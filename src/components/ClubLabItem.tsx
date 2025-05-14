// src/components/ClubLabItem.tsx
import React from "react";
import { Link } from "react-router-dom";

// Định nghĩa kiểu cho prop 'club'
interface ClubData {
  _id: string; // Hoặc string | number nếu ID có thể là số
  id?: string; // ID thay thế nếu _id không có
  name: string;
  logo?: string; // Trường logo từ API
  image?: string; // Trường image cũ (nếu vẫn dùng)
  description?: string;
  shortDescription?: string;
  overview?: string;
  type: string; // Ví dụ: 'club', 'lab'
  belongTo?: string; // Tên khoa/trường
  faculty?: {
    // Nếu faculty là object
    name?: string;
  };
  // Thêm các trường khác nếu cần để hiển thị trên card
}

interface ClubLabItemProps {
  club: ClubData;
}

const ClubLabItem: React.FC<ClubLabItemProps> = ({ club }) => {
  // Lấy ID ưu tiên _id, sau đó là id (nếu có)
  const clubId = club._id || club.id;

  // Xử lý trường hợp không có ID (dù không nên xảy ra với API)
  if (!clubId) {
    console.warn("ClubLabItem: Club data is missing a valid _id or id.", club);
    // Có thể render một thông báo lỗi hoặc không render gì cả
    return (
      <div className="bg-white border border-gray-200 rounded-2xl shadow p-4 flex flex-col gap-4">
        <p className="text-red-500 text-sm">
          Lỗi: Dữ liệu CLB/Lab không hợp lệ (thiếu ID).
        </p>
      </div>
    );
  }

  const imageUrl =
    club.logo ||
    club.image ||
    "https://via.placeholder.com/300x200?text=No+Image"; // Ảnh placeholder
  const clubName = club.name || "Tên không xác định";
  const clubDescription = (
    club.description ||
    club.shortDescription ||
    club.overview ||
    "Chưa có mô tả."
  ).slice(0, 100);
  const clubTypeDisplay =
    club.type === "club"
      ? "Câu lạc bộ"
      : club.type === "lab"
      ? "Phòng thí nghiệm"
      : "Không xác định";
  const clubBelongTo = club.belongTo || club.faculty?.name || "Chưa rõ";

  return (
    <Link
      to={`/clubs/${clubId}`}
      className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl focus-visible:shadow-xl focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-all p-4 flex flex-col gap-4 group outline-none"
      aria-label={`Xem chi tiết ${clubName}`}
    >
      <div className="w-full h-48 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={imageUrl}
          alt={`Logo của ${clubName}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          {clubName}
        </h2>
        <p className="text-gray-600 text-sm mt-1 flex-grow">
          {clubDescription}
          {clubDescription.length >= 100 && "..."}
        </p>
      </div>
      <div className="mt-auto pt-2 text-red-600 font-medium text-sm">
        {clubTypeDisplay} - {clubBelongTo}
      </div>
    </Link>
  );
};

export default ClubLabItem;
