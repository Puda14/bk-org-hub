import React from "react";

export default function ClubLabItem({ club, onClick }) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer p-4 flex flex-col gap-4"
      onClick={onClick}
    >
      <img src={club.image} alt={club.name} className="w-full h-48 object-cover rounded-xl" />
      <div>
        <h2 className="text-xl font-semibold text-black">{club.name}</h2>
        <p className="text-gray-600 text-sm mt-1">
          {club.description.slice(0, 100)}...
        </p>
      </div>
      <div className="text-red-600 font-medium text-sm">
        {club.type === "club" ? "Club" : "Lab"} - {club.belongTo}
      </div>
    </div>
  );
}
