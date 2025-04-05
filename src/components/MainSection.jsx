import ClubLabItem from "./ClubLabItem";
import ClubLabDetail from "./ClubLabDetail";
import { clubs } from "../mock/data";
import { useState } from "react";

export default function MainSection() {
  const [selectedClub, setSelectedClub] = useState(null);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm text-red-600 ring-1 ring-red-600/10 hover:ring-red-600/20">
            Chào mừng bạn đến với cổng thông tin CLB - Lab HUST.
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Khám phá và kết nối với các CLB - Lab tại HUST
          </h1>
          <p className="mt-8 text-lg font-medium text-black sm:text-xl">
            Tìm kiếm đam mê, học hỏi, nghiên cứu và phát triển kỹ năng thông qua cộng đồng sinh viên năng động.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Khám phá ngay
            </a>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club) => (
              <ClubLabItem
                key={club.name}
                club={club}
                onClick={() => setSelectedClub(club)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
