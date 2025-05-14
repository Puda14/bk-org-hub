// src/pages/SuggestionClubDetailView.jsx
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ClubLabDetailComponent from "../components/ClubLabDetail";
import { ArrowLeft, Loader2, AlertTriangle } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function SuggestionClubDetailView() {
  const { clubId } = useParams(); // Lấy clubId từ URL của route con
  const navigate = useNavigate();

  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClubDetails = useCallback(async () => {
    if (!clubId) {
      setError("ID CLB/Lab không hợp lệ.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    setClub(null);
    try {
      const response = await fetch(`${API_BASE_URL}/entities/${clubId}`);
      if (!response.ok) {
        let errorMessage = `Lỗi HTTP: ${response.status}`;
        if (response.status === 404)
          errorMessage = "Không tìm thấy CLB/Lab bạn yêu cầu.";
        else {
          try {
            const errData = await response.json();
            errorMessage = errData.message || errData.error || errorMessage;
          } catch (e) {
            /* Bỏ qua */
          }
        }
        throw new Error(errorMessage);
      }
      const data = await response.json();
      if (!data || !data._id) throw new Error("Dữ liệu chi tiết không hợp lệ.");
      setClub(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [clubId]);

  useEffect(() => {
    fetchClubDetails();
  }, [fetchClubDetails]);

  const handleBackToSuggestionsList = () => {
    navigate("/suggest", { replace: true }); // Quay lại trang /suggest, xóa clubId khỏi URL
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center text-center py-20">
        <Loader2 className="h-12 w-12 animate-spin text-red-600 mb-4" />
        <p className="text-lg font-medium text-gray-700">
          Đang tải chi tiết...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-10 px-6 bg-red-50 border border-red-200 rounded-lg">
        <AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-3" />
        <h3 className="text-xl font-semibold text-red-700 mb-2">
          Lỗi tải dữ liệu
        </h3>
        <p className="text-gray-600 text-sm mb-4">{error}</p>
        <button
          onClick={handleBackToSuggestionsList}
          className="text-sm text-red-600 hover:underline inline-flex items-center"
        >
          <ArrowLeft size={16} className="mr-1" /> Quay lại danh sách gợi ý
        </button>
      </div>
    );

  if (!club)
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">Không tìm thấy thông tin chi tiết.</p>
        <button
          onClick={handleBackToSuggestionsList}
          className="mt-4 text-sm text-red-600 hover:underline inline-flex items-center"
        >
          <ArrowLeft size={16} className="mr-1" /> Quay lại danh sách gợi ý
        </button>
      </div>
    );

  return (
    <div className="bg-white p-1 rounded-lg shadow-lg">
      {" "}
      {/* Card cho chi tiết */}
      {/* ClubLabDetailComponent sẽ có nút back riêng của nó gọi handleBackToSuggestionsList */}
      <ClubLabDetailComponent
        club={club}
        onBackClick={handleBackToSuggestionsList}
      />
    </div>
  );
}
