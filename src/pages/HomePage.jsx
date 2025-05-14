// src/pages/HomePage.jsx
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom"; // Sử dụng Link để điều hướng
import ClubLabItem from "../components/ClubLabItem";
import ApplicationForm from "../components/ApplicationForm";
import { Search as SearchIcon, FileText, Loader2 } from "lucide-react";
import { FACULTIES, ENTITY_TYPES } from "../mock/data";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ITEMS_PER_PAGE = 9;

export default function HomePage() {
  const [allClubs, setAllClubs] = useState([]);
  const [filteredAndPaginatedClubs, setFilteredAndPaginatedClubs] = useState(
    []
  );
  // selectedClubForDetail sẽ không còn ở đây nữa, vì chi tiết sẽ là trang riêng

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const fetchEntities = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/entities`);
      if (!response.ok) {
        const errData = await response
          .json()
          .catch(() => ({ message: response.statusText }));
        throw new Error(
          errData.message || `HTTP error! status: ${response.status}`
        );
      }
      const data = await response.json();
      setAllClubs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch entities:", err);
      setError(err.message);
      setAllClubs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEntities();
  }, [fetchEntities]);

  useEffect(() => {
    let filtered = [...allClubs];
    if (searchTerm) {
      filtered = filtered.filter((club) =>
        (club.name || "").toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedType) {
      filtered = filtered.filter(
        (club) => (club.type || "").toLowerCase() === selectedType
      );
    }
    if (selectedFaculty) {
      filtered = filtered.filter((club) => club.belongTo === selectedFaculty);
    }
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const paginated = filtered.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
    setFilteredAndPaginatedClubs(paginated);
  }, [allClubs, searchTerm, selectedType, selectedFaculty, currentPage]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedType("");
    setSelectedFaculty("");
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPagination = () => {
    if (!totalPages || totalPages <= 1) return null;
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
      <div
        className="flex justify-center mt-8 gap-2 text-sm"
        aria-label="Pagination"
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md border ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-red-600 hover:bg-red-50"
          }`}
          aria-label="Go to previous page"
        >
          ← Trước
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-3 py-1 rounded-md border ${
              currentPage === number
                ? "bg-red-600 text-white"
                : "text-red-600 hover:bg-red-50"
            }`}
            aria-current={currentPage === number ? "page" : undefined}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md border ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-red-600 hover:bg-red-50"
          }`}
          aria-label="Go to next page"
        >
          Sau →
        </button>
      </div>
    );
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <ApplicationForm
        isOpen={showApplicationForm}
        onClose={() => setShowApplicationForm(false)}
      />
      {/* Hero Section */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Khám phá và kết nối với các CLB - Lab tại HUST
          </h1>
          <p className="mt-8 text-lg font-medium text-black sm:text-xl">
            Tìm kiếm đam mê, học hỏi, nghiên cứu và phát triển kỹ năng thông qua
            cộng đồng sinh viên năng động.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <button
              onClick={() => setShowApplicationForm(true)}
              className="w-full sm:w-auto rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 flex items-center justify-center"
            >
              <FileText size={18} className="mr-2" /> Ứng tuyển ngay
            </button>
            {/* Link đến trang gợi ý */}
            <Link
              to="/suggest"
              className="w-full sm:w-auto rounded-md bg-gray-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 flex items-center justify-center"
            >
              <SearchIcon size={18} className="mr-2" /> Tìm gợi ý CLB/Lab
            </Link>
          </div>
          <a
            href="#club-list-content"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("club-list-content")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 inline-block text-sm font-semibold text-red-600 hover:text-red-800"
          >
            Hoặc khám phá toàn bộ danh sách <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Club List Content */}
      <div
        id="club-list-content"
        className="max-w-7xl mx-auto pb-24 min-h-[calc(100vh-400px)]"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Danh sách Câu lạc bộ & Phòng thí nghiệm
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 px-4">
          {/* Filters UI - giữ nguyên */}
          <input
            type="text"
            placeholder="🔍 Tìm theo tên CLB/Lab..."
            className="border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-72 text-sm"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            aria-label="Tìm kiếm theo tên"
          />
          <select
            className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full sm:w-auto"
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);
              setCurrentPage(1);
            }}
            aria-label="Lọc theo loại hình"
          >
            <option value="">🎯 Tất cả loại hình</option>
            {Object.keys(ENTITY_TYPES).map((key) => (
              <option key={key} value={ENTITY_TYPES[key].toLowerCase()}>
                {ENTITY_TYPES[key]}
              </option>
            ))}
          </select>
          <select
            className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full sm:w-auto"
            value={selectedFaculty}
            onChange={(e) => {
              setSelectedFaculty(e.target.value);
              setCurrentPage(1);
            }}
            aria-label="Lọc theo trường/khoa"
          >
            <option value="">🏫 Tất cả trường/khoa</option>
            {Object.values(FACULTIES).map((facultyName) => (
              <option key={facultyName} value={facultyName}>
                {facultyName}
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

        {loading && (
          <p className="text-center text-gray-500 py-10">
            <Loader2 className="inline-block mr-2 animate-spin" />
            Đang tải danh sách...
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 py-10">
            Lỗi tải danh sách: {error}
          </p>
        )}

        {!loading && !error && filteredAndPaginatedClubs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {filteredAndPaginatedClubs.map((club) => (
              // ClubLabItem sẽ được cập nhật để dùng Link
              <ClubLabItem key={club._id || club.id || club.name} club={club} />
            ))}
          </div>
        )}
        {!loading &&
          !error &&
          filteredAndPaginatedClubs.length === 0 &&
          allClubs.length > 0 && (
            <p className="text-center text-gray-500 col-span-full py-10">
              Không tìm thấy CLB/Lab nào phù hợp với tiêu chí của bạn.
            </p>
          )}
        {!loading &&
          !error &&
          filteredAndPaginatedClubs.length > 0 &&
          renderPagination()}
      </div>
      {/* FAB không cần ở đây nếu các nút điều hướng đã đủ */}
    </div>
  );
}
