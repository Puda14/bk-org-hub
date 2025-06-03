// src/pages/SuggestionPageLayout.jsx
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react"; // Sử dụng Dialog của Headless UI cho Modal
import ClubLabDetailComponent from "../components/ClubLabDetail"; // Import component chi tiết
import {
  ArrowLeft,
  Search,
  ExternalLink,
  RotateCcw,
  Send,
  Info,
  Loader2,
  X,
} from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const formFields = [
  {
    name: "fullName",
    label: "Họ và tên",
    type: "text",
    placeholder: "Nguyễn Văn A",
  },
  {
    name: "personalEmail",
    label: "Email cá nhân",
    type: "email",
    placeholder: "nva@gmail.com",
  },
  {
    name: "schoolEmail",
    label: "Email trường (VD: nva@sis.hust.edu.vn)",
    type: "email",
    placeholder: "nva@sis.hust.edu.vn",
  },
  {
    name: "studentId",
    label: "Mã số sinh viên",
    type: "text",
    placeholder: "20201234",
  },
  {
    name: "course",
    label: "Khóa (VD: K65, K66)",
    type: "text",
    placeholder: "K65",
  },
  {
    name: "school",
    label: "Trường/Viện",
    type: "text",
    placeholder: "Trường Công nghệ Thông tin & Truyền thông",
  },
  {
    name: "major",
    label: "Chuyên ngành (VD: Khoa học Máy tính)",
    type: "text",
    placeholder: "Khoa học Máy tính",
    required: true,
  },
  {
    name: "class",
    label: "Lớp (VD: KHMT01-K65)",
    type: "text",
    placeholder: "KHMT01-K65",
  },
  {
    name: "techSkills",
    label: "Kỹ năng chuyên môn",
    type: "textarea",
    placeholder: "VD: Python, React, Node.js, AI, Lập trình nhúng...",
    required: true,
  },
  {
    name: "softSkills",
    label: "Kỹ năng mềm",
    type: "textarea",
    placeholder: "VD: Làm việc nhóm, thuyết trình, quản lý thời gian...",
  },
  {
    name: "careerGoals",
    label: "Định hướng nghề nghiệp",
    type: "textarea",
    placeholder: "VD: Trở thành kỹ sư AI, Chuyên gia dữ liệu...",
    required: true,
  },
  {
    name: "achievements",
    label: "Thành tựu nổi bật (nếu có)",
    type: "textarea",
    placeholder: "VD: Giải nhất cuộc thi ABC, Học bổng XYZ...",
  },
  {
    name: "languageSkills",
    label: "Trình độ ngoại ngữ (nếu có)",
    type: "textarea",
    placeholder: "VD: Tiếng Anh IELTS 7.0, Tiếng Nhật N2...",
  },
];
const initialFormData = formFields.reduce((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {});

export default function SuggestionPageLayout() {
  const [formData, setFormData] = useState(initialFormData);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [suggestionError, setSuggestionError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // State cho modal chi tiết CLB
  const [selectedClubDataForModal, setSelectedClubDataForModal] =
    useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  const [detailError, setDetailError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component mount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitSuggestions = async (e) => {
    e.preventDefault();
    setIsLoadingSuggestions(true);
    setSuggestionError(null);
    setSuggestions([]);
    setHasSearched(false);
    setIsDetailModalOpen(false); // Đảm bảo modal chi tiết đóng khi search mới

    for (const field of formFields) {
      if (field.required && !formData[field.name].trim()) {
        setSuggestionError(
          `Vui lòng điền thông tin cho trường: ${field.label}`
        );
        setIsLoadingSuggestions(false);
        return;
      }
    }
    try {
      const response = await fetch(`${API_BASE_URL}/suggest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: "Lỗi không xác định từ server" }));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }
      const data = await response.json();
      setSuggestions(data.suggestions || []);
      setHasSearched(true);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setSuggestionError(err.message || "Đã có lỗi xảy ra khi tìm kiếm gợi ý.");
      setHasSearched(true);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  const fetchClubDetailForModal = useCallback(async (clubId) => {
    if (!clubId) return;
    setIsLoadingDetail(true);
    setDetailError(null);
    setSelectedClubDataForModal(null);
    try {
      const response = await fetch(`${API_BASE_URL}/entities/${clubId}`);
      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: "Lỗi không xác định từ server" }));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }
      const detailedClubData = await response.json();
      if (!detailedClubData || !detailedClubData._id) {
        throw new Error("Dữ liệu chi tiết không hợp lệ.");
      }
      setSelectedClubDataForModal(detailedClubData);
      setIsDetailModalOpen(true); // Mở modal sau khi fetch thành công
    } catch (err) {
      console.error("Failed to fetch entity detail for modal:", err);
      setDetailError(err.message || "Không thể tải chi tiết CLB/Lab.");
      setIsDetailModalOpen(true); // Vẫn mở modal để hiển thị lỗi
    } finally {
      setIsLoadingDetail(false);
    }
  }, []);

  const handleSuggestionItemClick = (suggestionClubId) => {
    fetchClubDetailForModal(suggestionClubId);
  };

  const closeModalAndResetDetail = () => {
    setIsDetailModalOpen(false);
    // Có thể reset selectedClubDataForModal và detailError ở đây nếu muốn
    // setTimeout(() => { // Để modal kịp unmount trước khi reset data
    //   setSelectedClubDataForModal(null);
    //   setDetailError(null);
    // }, 300); // Thời gian transition của modal
  };

  const resetFormAndResults = () => {
    setFormData(initialFormData);
    setSuggestions([]);
    setSuggestionError(null);
    setHasSearched(false);
    closeModalAndResetDetail(); // Đóng modal nếu đang mở
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <Link
        to="/"
        className="mb-8 inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 group"
      >
        <ArrowLeft
          size={18}
          className="mr-2 group-hover:-translate-x-1 transition-transform"
        />
        Về trang chủ
      </Link>

      <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
        Tìm CLB/Lab phù hợp với bạn
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Cung cấp thông tin của bạn để nhận được những gợi ý CLB/Lab phù hợp
        nhất.
      </p>

      {/* Form tìm kiếm */}
      <form
        onSubmit={handleSubmitSuggestions}
        className="bg-white shadow-xl rounded-xl p-6 md:p-8 space-y-6 mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {formFields.map((field) => (
            <div
              key={field.name}
              className={field.type === "textarea" ? "md:col-span-2" : ""}
            >
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1 text-left"
              >
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={3}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2.5"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2.5"
                />
              )}
            </div>
          ))}
        </div>
        {suggestionError && (
          <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
            <Info size={16} className="inline mr-1" />
            {suggestionError}
          </p>
        )}
        <div className="pt-4 flex flex-col sm:flex-row justify-end gap-3">
          <button
            type="button"
            onClick={resetFormAndResults}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <RotateCcw size={18} className="mr-2" /> Xóa form & Kết quả
          </button>
          <button
            type="submit"
            disabled={isLoadingSuggestions}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-60"
          >
            {isLoadingSuggestions ? (
              <Loader2 size={20} className="animate-spin mr-2" />
            ) : (
              <Search size={18} className="mr-2" />
            )}
            {isLoadingSuggestions ? "Đang tìm..." : "Tìm gợi ý"}
          </button>
        </div>
      </form>

      {/* Kết quả gợi ý */}
      {hasSearched && !isLoadingSuggestions && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {suggestions.length > 0
              ? "Kết quả gợi ý dành cho bạn:"
              : "Không có gợi ý phù hợp"}
          </h3>
          {suggestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestions.map((suggestion, index) => (
                <div
                  key={suggestion._id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => handleSuggestionItemClick(suggestion._id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <span className="mr-2 font-medium text-red-700">
                          {index + 1}.
                        </span>
                        <h4 className="font-semibold text-red-700 group-hover:text-red-800 text-lg">
                          {suggestion.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 mt-1.5 pl-5">
                        <span className="font-medium text-gray-700">
                          Lý do:
                        </span>
                        {suggestion.reason}
                      </p>
                    </div>
                    <ExternalLink
                      size={18}
                      className="text-gray-400 group-hover:text-red-600 transition-colors opacity-50 group-hover:opacity-100 flex-shrink-0" // Thêm flex-shrink-0
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !suggestionError && (
              <p className="text-center text-gray-500">
                Rất tiếc, không tìm thấy CLB/Lab nào hoàn toàn phù hợp với thông
                tin bạn cung cấp.
              </p>
            )
          )}
        </div>
      )}

      {/* Modal hiển thị chi tiết CLB */}
      <Dialog
        open={isDetailModalOpen}
        onClose={closeModalAndResetDetail}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-5xl rounded-xl bg-gray-100 p-1 shadow-2xl">
              {" "}
              {/* Nền modal xám nhạt */}
              {isLoadingDetail && (
                <div className="flex flex-col items-center justify-center text-center py-20 h-64">
                  <Loader2 className="h-12 w-12 animate-spin text-red-600 mb-4" />
                  <p className="text-lg font-medium text-gray-700">
                    Đang tải chi tiết...
                  </p>
                </div>
              )}
              {detailError && !isLoadingDetail && (
                <div className="text-center py-10 px-6 bg-red-50 border border-red-200 rounded-lg m-4">
                  <AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-red-700 mb-2">
                    Lỗi tải dữ liệu
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{detailError}</p>
                  <button
                    onClick={closeModalAndResetDetail}
                    className="text-sm text-red-600 hover:underline inline-flex items-center"
                  >
                    <X size={16} className="mr-1" /> Đóng
                  </button>
                </div>
              )}
              {!isLoadingDetail && !detailError && selectedClubDataForModal && (
                <ClubLabDetailComponent
                  club={selectedClubDataForModal}
                  onBackClick={closeModalAndResetDetail} // Nút back trong ClubLabDetail sẽ đóng modal
                />
              )}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
