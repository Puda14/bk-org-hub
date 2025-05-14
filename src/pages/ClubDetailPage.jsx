// src/pages/ClubDetailPage.jsx
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Bỏ Link, dùng useNavigate
import ClubLabDetailComponent from "../components/ClubLabDetail";
import { Loader2, AlertTriangle, Search as SearchIcon } from "lucide-react"; // Thêm SearchIcon

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function ClubDetailPage() {
  const { clubId } = useParams();
  const navigate = useNavigate(); // Sử dụng useNavigate

  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClubDetails = useCallback(async () => {
    if (!clubId) {
      setError("Không tìm thấy ID của CLB/Lab trong địa chỉ URL.");
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
        if (response.status === 404) {
          errorMessage = "Không tìm thấy CLB/Lab bạn yêu cầu (mã lỗi 404).";
        } else {
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
      if (!data || typeof data !== "object" || !data._id) {
        throw new Error(
          "Dữ liệu chi tiết trả về không hợp lệ hoặc không tìm thấy CLB/Lab."
        );
      }
      setClub(data);
    } catch (err) {
      console.error(`Lỗi khi fetch chi tiết CLB/Lab ID ${clubId}:`, err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [clubId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchClubDetails();
  }, [fetchClubDetails]);

  const handleGoBack = () => {
    navigate(-1); // Quay lại trang trước đó trong lịch sử
    // Hoặc navigate("/"); // Luôn quay về trang chủ
  };

  const renderLoading = () => (
    <div className="flex flex-col items-center justify-center text-center py-24 h-full">
      <Loader2 className="h-16 w-16 animate-spin text-red-600 mb-6" />
      <p className="text-xl font-medium text-gray-800">Đang tải chi tiết...</p>
      <p className="text-gray-600">Vui lòng chờ trong giây lát.</p>
    </div>
  );

  const renderError = () => (
    <div className="text-center py-20 px-6 bg-red-50 border-2 border-red-200 rounded-lg shadow-lg my-8">
      <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-5" />
      <h2 className="text-2xl font-bold text-red-700 mb-3">
        Rất tiếc, đã có lỗi xảy ra!
      </h2>
      <p className="text-gray-700 mb-4 text-base">{error}</p>
      <p className="text-sm text-gray-500 mb-6">
        Không thể tải được thông tin CLB/Lab. Điều này có thể do lỗi kết nối
        hoặc CLB/Lab không tồn tại.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={fetchClubDetails} // Nút thử lại
          className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
        >
          Thử lại
        </button>
        <button // Đổi Link thành button và dùng navigate
          onClick={() => navigate("/")}
          className="inline-flex items-center px-6 py-2.5 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Về trang chủ
        </button>
      </div>
    </div>
  );

  const renderNotFound = () => (
    <div className="text-center py-20 px-6 my-8">
      <SearchIcon className="h-16 w-16 text-gray-400 mx-auto mb-5" />
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        Không tìm thấy CLB/Lab
      </h2>
      <p className="text-gray-600 mb-6">
        Rất tiếc, chúng tôi không tìm thấy thông tin chi tiết cho CLB/Lab bạn
        yêu cầu.
      </p>
      <button // Đổi Link thành button và dùng navigate
        onClick={() => navigate("/")}
        className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
      >
        <ArrowLeft size={18} className="mr-2" />
        Khám phá các CLB/Lab khác
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-120px)]">
        {/* Nút quay lại đã được loại bỏ khỏi đây */}
        {/* Nó sẽ được render bên trong ClubLabDetailComponent nếu được truyền prop onBackClick */}

        {loading && renderLoading()}
        {!loading && error && renderError()}
        {!loading && !error && club && (
          <ClubLabDetailComponent club={club} onBackClick={handleGoBack} />
        )}
        {!loading && !error && !club && renderNotFound()}
      </div>
    </div>
  );
}
