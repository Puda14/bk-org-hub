import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";

const iconMap = {
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
  tiktok: <FaTiktok />,
  youtube: <FaYoutube />,
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  discord: <FaDiscord />,
  telegram: <FaTelegram />,
};

export default function ClubLabDetail({ club, onBack }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-black space-y-6 max-w-7xl mx-auto text-left">
      <button onClick={onBack} className="text-red-600 hover:underline text-sm">
        ← Quay lại danh sách
      </button>

      {/* Phần đầu: ảnh + info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={club.image} alt={club.name} className="w-full h-64 object-cover rounded-xl" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
          <p className="text-sm text-red-600 font-medium mb-1">
            {club.type === "club" ? "Câu lạc bộ" : "Phòng thí nghiệm"}
          </p>
          <p className="text-gray-600 text-sm">
            Trực thuộc: {club.belongTo}
          </p>
          <ul className="text-gray-700 text-sm mt-4 space-y-1">
            <li><strong>📍 Địa điểm:</strong> {club.location}</li>
            <li><strong>👥 Thành viên:</strong> {club.numberOfMembers}</li>
            <li><strong>🗓️ Thành lập:</strong> {club.yearOfEstablishment}</li>
            <li><strong>📧 Liên hệ:</strong> {club.contact}</li>
            <li><strong>🌐 Website:</strong> <a href={club.website} className="text-red-600 hover:underline">{club.website}</a></li>
          </ul>
        </div>
      </div>

      {/* Grid thông tin */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
        <div className="lg:col-span-2 bg-gray-50 rounded-xl p-4">
          <h2 className="text-xl font-semibold text-red-600 mb-2">🧾 Giới thiệu</h2>
          <p className="text-gray-700 whitespace-pre-line text-sm">{club.description}</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <h2 className="text-xl font-semibold text-red-600 mb-2">👤 Ban điều hành</h2>
          <ul className="text-gray-700 text-sm list-disc ml-5">
            <li><strong>Chủ nhiệm:</strong> {club.executive_board.chairman}</li>
            <li><strong>Mentor:</strong> {club.executive_board.mentor.join(", ")}</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <h2 className="text-xl font-semibold text-red-600 mb-2">🏆 Thành tựu</h2>
          <ul className="list-disc ml-5 text-gray-700 text-sm">
            {club.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <h2 className="text-xl font-semibold text-red-600 mb-2">🧪 Hoạt động</h2>
          <ul className="list-disc ml-5 text-gray-700 text-sm">
            {club.activities.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <h2 className="text-xl font-semibold text-red-600 mb-2">🧠 Tiêu chí</h2>
          <ul className="list-disc ml-5 text-gray-700 text-sm">
            {club.criteria.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <h2 className="text-xl font-semibold text-red-600 mb-2">💼 Tài trợ</h2>
          <ul className="list-disc ml-5 text-gray-700 text-sm">
            {club.partnersAndSponsors.map((sponsor, i) => (
              <li key={i}>{sponsor}</li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 bg-gray-50 rounded-xl p-4">
          <h2 className="text-xl font-semibold text-red-600 mb-4">📸 Thư viện ảnh</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {club.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`gallery-${i}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 bg-gray-50 rounded-xl p-4">
          <h2 className="text-xl font-semibold text-red-600 mb-2">🔗 Mạng xã hội</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-700">
            {Object.entries(club.socialMediaLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-red-600 hover:underline"
              >
                {iconMap[platform.toLowerCase()] ?? "🔗"} {platform}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
