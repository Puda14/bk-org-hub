import { useState, useEffect } from "react";
import ClubLabItem from "./ClubLabItem";
import ClubLabDetail from "./ClubLabDetail";
import ApplicationForm from "./ApplicationForm";
import ChatBot from "./ChatBot";
import { Bot } from "lucide-react";

import { FACULTIES, ENTITY_TYPES } from "../mock/data";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MainSection() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const [allClubs, setAllClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 9;

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/entities`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllClubs(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setAllClubs([]);
        console.error("Failed to fetch clubs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  const filteredClubs = allClubs.filter((club) => {
    const matchesType = selectedType ? club.type === selectedType : true;
    const matchesFaculty = selectedFaculty
      ? club.belongTo === selectedFaculty
      : true;
    const matchesSearch = club.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesType && matchesFaculty && matchesSearch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClubs = filteredClubs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredClubs.length / itemsPerPage);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedType("");
    setSelectedFaculty("");
    setCurrentPage(1);
  };

  const handleClubClick = async (club) => {
    if (club && club._id) {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/entities/${club._id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const detailedClubData = await response.json();
        setSelectedClub(detailedClubData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setSelectedClub(null);
        console.error("Failed to fetch club details:", err);
      } finally {
        setLoading(false);
      }
    } else {
      setSelectedClub(club);
    }
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <ApplicationForm isOpen={showForm} onClose={() => setShowForm(false)} />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Khám phá và kết nối với các CLB - Lab tại HUST
          </h1>
          <p className="mt-8 text-lg font-medium text-black sm:text-xl">
            Tìm kiếm đam mê, học hỏi, nghiên cứu và phát triển kỹ năng thông qua
            cộng đồng sinh viên năng động.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => setShowForm(true)}
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              Ứng tuyển ngay
            </button>
            <a
              href="#"
              className="text-sm font-semibold text-red-700 hover:text-red-900"
            >
              Tìm hiểu thêm <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pb-24">
        {loading && (
          <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
        )}
        {error && <p className="text-center text-red-500">Lỗi: {error}</p>}

        {!loading && !error && selectedClub ? (
          <ClubLabDetail
            club={selectedClub}
            onBack={() => setSelectedClub(null)}
          />
        ) : (
          !loading &&
          !error && (
            <>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8 px-4">
                <input
                  type="text"
                  placeholder="🔍 Tìm theo tên CLB/Lab..."
                  className="border border-gray-300 rounded-xl px-4 py-2 w-72 text-sm"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />

                <select
                  className="border border-gray-300 rounded-xl px-4 py-2 text-sm"
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="">🎯 Tất cả loại hình</option>
                  <option value={ENTITY_TYPES.CLUB}>Câu lạc bộ</option>
                  <option value={ENTITY_TYPES.LAB}>Phòng thí nghiệm</option>
                </select>

                <select
                  className="border border-gray-300 rounded-xl px-4 py-2 text-sm"
                  value={selectedFaculty}
                  onChange={(e) => {
                    setSelectedFaculty(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="">🏫 Tất cả trường/khoa</option>
                  {Object.entries(FACULTIES).map(([key, label]) => (
                    <option key={key} value={label}>
                      {label}
                    </option>
                  ))}
                </select>

                {(searchTerm || selectedType || selectedFaculty) && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-red-600 hover:underline"
                  >
                    🧼 Xoá bộ lọc
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {currentClubs.map((club) => (
                  <ClubLabItem
                    key={club._id || club.name}
                    club={club}
                    onClick={() => handleClubClick(club)}
                  />
                ))}

                {filteredClubs.length === 0 && (
                  <p className="text-center text-gray-500 col-span-full">
                    Không tìm thấy CLB/Lab nào phù hợp với tiêu chí lọc.
                  </p>
                )}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2 text-sm">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md border ${
                      currentPage === 1
                        ? "text-gray-400"
                        : "text-red-600 hover:bg-red-50"
                    }`}
                  >
                    ← Trước
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 rounded-md border ${
                        currentPage === i + 1
                          ? "bg-red-600 text-white"
                          : "text-red-600 hover:bg-red-50"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md border ${
                      currentPage === totalPages
                        ? "text-gray-400"
                        : "text-red-600 hover:bg-red-50"
                    }`}
                  >
                    Sau →
                  </button>
                </div>
              )}
            </>
          )
        )}
      </div>

      <ChatBot isOpen={showChatbot} onClose={() => setShowChatbot(false)} />

      <button
        onClick={() => setShowChatbot(true)}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 z-40"
      >
        <Bot size={24} />
      </button>
    </div>
  );
}
