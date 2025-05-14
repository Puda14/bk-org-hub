import { useState, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  RotateCcw,
  Send,
  Info,
  Loader2,
} from "lucide-react";
import ClubLabDetail from "./ClubLabDetail";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const formFields = [
  {
    name: "fullName",
    label: "Họ và tên",
    type: "text",
    placeholder: "Nguyễn Văn A",
    required: true,
  },
  {
    name: "personalEmail",
    label: "Email cá nhân",
    type: "email",
    placeholder: "nva@gmail.com",
    required: true,
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
    required: true,
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
    required: true,
  },
  {
    name: "major",
    label: "Chuyên ngành (VD: Khoa học Máy tính)",
    type: "text",
    placeholder: "Khoa học Máy tính",
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

export default function SuggestionFeature({ onBackToListMode }) {
  const [formData, setFormData] = useState(initialFormData);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [suggestionError, setSuggestionError] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const [selectedClubForDetail, setSelectedClubForDetail] = useState(null);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  const [detailError, setDetailError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitSuggestions = async (e) => {
    e.preventDefault();
    setIsLoadingSuggestions(true);
    setSuggestionError(null);
    setSuggestions([]);
    setSelectedClubForDetail(null);
    setShowResults(false);

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
      setShowResults(true);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setSuggestionError(err.message || "Đã có lỗi xảy ra khi tìm kiếm gợi ý.");
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  const fetchClubDetail = useCallback(async (clubId) => {
    if (!clubId) return;
    setIsLoadingDetail(true);
    setDetailError(null);
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
      setSelectedClubForDetail(detailedClubData);
    } catch (err) {
      console.error("Failed to fetch entity detail:", err);
      setDetailError(err.message);
      setSelectedClubForDetail(null);
    } finally {
      setIsLoadingDetail(false);
    }
  }, []);

  const handleSuggestionClick = (clubId) => {
    fetchClubDetail(clubId);
  };

  const resetFormAndResults = () => {
    setFormData(initialFormData);
    setSuggestions([]);
    setSuggestionError(null);
    setShowResults(false);
    setSelectedClubForDetail(null);
    setDetailError(null);
  };

  const handleBackToSuggestions = () => {
    setSelectedClubForDetail(null);
    setDetailError(null);
  };

  if (selectedClubForDetail) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <button
          onClick={handleBackToSuggestions}
          className="mb-6 inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
        >
          <ArrowLeft size={18} className="mr-2" />
          Quay lại danh sách gợi ý
        </button>
        {isLoadingDetail && (
          <p className="text-center text-gray-500 py-10">
            <Loader2 className="inline-block mr-2 animate-spin" /> Đang tải chi
            tiết...
          </p>
        )}
        {detailError && (
          <p className="text-center text-red-500 py-10">
            Lỗi khi tải chi tiết: {detailError}
          </p>
        )}
        {!isLoadingDetail && !detailError && selectedClubForDetail && (
          <ClubLabDetail
            club={selectedClubForDetail}
            onBack={handleBackToSuggestions}
          />
        )}
        {!isLoadingDetail && !detailError && !selectedClubForDetail && (
          <p className="text-center text-gray-500 py-10">
            Không có thông tin chi tiết để hiển thị hoặc đã có lỗi xảy ra.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <button
        onClick={onBackToListMode}
        className="mb-6 inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
      >
        <ArrowLeft size={18} className="mr-2" />
        Quay lại danh sách CLB
      </button>

      <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
        Tìm CLB/Lab phù hợp với bạn
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Cung cấp thông tin của bạn để nhận được những gợi ý CLB/Lab phù hợp nhất
        từ hệ thống.
      </p>

      <form
        onSubmit={handleSubmitSuggestions}
        className="bg-white shadow-xl rounded-xl p-6 md:p-8 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {formFields.map((field) => (
            <div
              key={field.name}
              className={field.type === "textarea" ? "md:col-span-2" : ""}
            >
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1 text-left" // Thêm text-left
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
            <RotateCcw size={18} className="mr-2" /> Xóa form
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

      {showResults && !isLoadingSuggestions && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {suggestions.length > 0
              ? "Kết quả gợi ý dành cho bạn:"
              : "Không có gợi ý nào"}
          </h3>
          {suggestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion._id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => handleSuggestionClick(suggestion._id)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-red-700 group-hover:text-red-800 text-lg">
                      {suggestion.name}
                    </h4>
                    <ExternalLink
                      size={18}
                      className="text-gray-400 group-hover:text-red-600 transition-colors opacity-50 group-hover:opacity-100"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1.5">
                    <span className="font-medium text-gray-700">Lý do:</span>{" "}
                    {suggestion.reason}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            !suggestionError && (
              <p className="text-center text-gray-500">
                Rất tiếc, không tìm thấy CLB/Lab nào hoàn toàn phù hợp với thông
                tin bạn cung cấp. Bạn có thể thử điều chỉnh lại thông tin hoặc
                khám phá danh sách đầy đủ.
              </p>
            )
          )}
        </div>
      )}
    </div>
  );
}
