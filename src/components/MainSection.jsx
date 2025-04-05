import { useState } from "react";
import ClubLabItem from "./ClubLabItem";
import ClubLabDetail from "./ClubLabDetail";
import ApplicationForm from "./ApplicationForm";
import { clubs } from "../mock/data";
import { FACULTIES, ENTITY_TYPES } from "../mock/data";

export default function MainSection() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false); // NEW

  const itemsPerPage = 9;

  const filteredClubs = clubs.filter((club) => {
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

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <ApplicationForm isOpen={showForm} onClose={() => setShowForm(false)} />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Khám phá và kết nối với các CLB - Lab tại HUST
          </h1>
          <p className="mt-8 text-lg font-medium text-black sm:text-xl">
            Tìm kiếm đam mê, học hỏi, nghiên cứu và phát triển kỹ năng thông qua cộng đồng sinh viên năng động.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => setShowForm(true)}
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              Ứng tuyển ngay
            </button>
            <a href="#" className="text-sm font-semibold text-red-700 hover:text-red-900">
              Tìm hiểu thêm <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pb-24">
        {selectedClub ? (
          <ClubLabDetail club={selectedClub} onBack={() => setSelectedClub(null)} />
        ) : (
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
                  <option key={key} value={label}>{label}</option>
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
                  key={club.name}
                  club={club}
                  onClick={() => setSelectedClub(club)}
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
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-md border ${currentPage === 1
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
                    className={`px-3 py-1 rounded-md border ${currentPage === i + 1
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
                  className={`px-3 py-1 rounded-md border ${currentPage === totalPages
                    ? "text-gray-400"
                    : "text-red-600 hover:bg-red-50"
                    }`}
                >
                  Sau →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
