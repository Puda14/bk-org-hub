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
  FaGlobe,
  FaEnvelope,
  FaInfoCircle,
} from "react-icons/fa";
import {
  Link as LinkIcon, // Icon mặc định cho link
  Users2, // Icon cho Số thành viên
  CalendarCheck2, // Icon cho Năm thành lập
  MapPin, // Icon cho Địa điểm
  Mail, // Icon cho Liên hệ
  Building, // Icon cho Trực thuộc
  ListChecks, // Icon cho Tiêu chí
  Image as ImageIcon, // Icon cho Thư viện ảnh
  Share2, // Icon cho Mạng xã hội
  ClipboardList as ActivitiesIcon, // Icon cho Hoạt động
  Award as TrophyIcon, // Icon cho Thành tựu
  UsersRound as ExecutiveIcon, // Icon cho Ban điều hành
  Handshake, // Icon cho Đối tác
  ArrowLeft, // Icon cho nút Quay lại
} from "lucide-react";

const iconMap = {
  facebook: <FaFacebook size={20} className="text-[#1877F2]" />,
  instagram: <FaInstagram size={20} className="text-[#E4405F]" />,
  twitter: <FaTwitter size={20} className="text-[#1DA1F2]" />,
  tiktok: <FaTiktok size={20} className="text-black" />,
  youtube: <FaYoutube size={20} className="text-[#FF0000]" />,
  linkedin: <FaLinkedin size={20} className="text-[#0A66C2]" />,
  github: <FaGithub size={20} className="text-gray-800" />,
  discord: <FaDiscord size={20} className="text-[#5865F2]" />,
  telegram: <FaTelegram size={20} className="text-[#2AABEE]" />,
  website: <FaGlobe size={20} className="text-gray-600" />,
  email: <FaEnvelope size={20} className="text-gray-600" />,
  default: <LinkIcon size={20} className="text-gray-500" />,
};

// Helper component để hiển thị một mục thông tin cơ bản
const InfoItemDisplay = ({ icon: Icon, label, value, href }) => {
  if (!value || value === "Chưa cập nhật") return null;

  let content = value;
  const isEmail =
    typeof value === "string" &&
    value.includes("@") &&
    !value.startsWith("http");
  const isHttpLink = typeof value === "string" && value.startsWith("http");

  if (isEmail) {
    content = (
      <a
        href={`mailto:${value}`}
        className="text-red-600 hover:text-red-700 hover:underline break-all"
      >
        {value}
      </a>
    );
  } else if (href || isHttpLink) {
    // href có thể được truyền riêng hoặc tự phát hiện từ value
    content = (
      <a
        href={href || value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700 hover:underline break-all"
      >
        {value}
      </a>
    );
  }

  return (
    <div className="flex items-start text-sm mb-2.5">
      {Icon && (
        <Icon className="text-red-500 mr-3 mt-1 flex-shrink-0" size={16} />
      )}
      <div>
        <span className="font-semibold text-gray-800">{label}:</span>
        <span className="text-gray-600 ml-1.5">{content}</span>
      </div>
    </div>
  );
};

// Helper component để render các khối thông tin (section)
const InfoSection = ({ title, icon: Icon, children, fullSpan = false }) => {
  // Lọc bỏ các children là null, undefined, hoặc React Fragment rỗng để kiểm tra có nội dung không
  const validChildren = React.Children.toArray(children).filter((child) => {
    if (child === null || child === undefined) return false;
    // Nếu child là một <p> chứa defaultText, coi như không có nội dung thực sự
    if (
      React.isValidElement(child) &&
      child.type === "p" &&
      child.props.children &&
      typeof child.props.children === "string" &&
      child.props.children.includes("Chưa cập nhật")
    ) {
      return false;
    }
    return true;
  });

  if (validChildren.length === 0) return null;

  return (
    <div
      className={`bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm ${
        fullSpan ? "lg:col-span-3 md:col-span-2 sm:col-span-1" : ""
      }`}
    >
      <div className="flex items-center mb-3.5 pb-2.5 border-b border-gray-200">
        {Icon && <Icon className="text-red-600 mr-2.5" size={22} />}
        <h2 className="text-xl font-semibold text-red-700">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default function ClubLabDetail({ club, onBackClick }) {
  if (!club) {
    return (
      <p className="text-center text-gray-500 py-20">
        Đang tải hoặc không có dữ liệu chi tiết...
      </p>
    );
  }

  const clubName = club.name ?? "Tên CLB/Lab không xác định";
  const clubTypeDisplay =
    club.type === "club"
      ? "Câu lạc bộ"
      : club.type === "lab"
      ? "Phòng thí nghiệm"
      : typeof club.type === "string"
      ? club.type.charAt(0).toUpperCase() + club.type.slice(1)
      : "Chưa rõ loại hình";
  const imageUrl =
    club.logo ||
    club.image ||
    "https://via.placeholder.com/400x400?text=HUST+ORG";
  const yearEstablished =
    club.yearOfEstablishment || club.establishedYear || "Chưa cập nhật";
  const contactInfo = club.contactEmail || club.contact || "Chưa cập nhật";

  const renderExecutiveBoard = () => {
    const boardData = club.executive_board; // Đảm bảo khớp với tên trường từ API
    if (
      !boardData ||
      Object.keys(boardData).length === 0 ||
      (!boardData.chairman &&
        (!boardData.mentor || boardData.mentor.length === 0))
    ) {
      return (
        <p className="text-sm text-gray-500 italic">
          Thông tin chưa được cập nhật.
        </p>
      );
    }
    const chairman = boardData.chairman;
    const mentorsArray = Array.isArray(boardData.mentor)
      ? boardData.mentor
      : boardData.mentor
      ? [boardData.mentor]
      : [];
    const mentorNames = mentorsArray
      .map((mentorItem) =>
        typeof mentorItem === "string"
          ? mentorItem.trim()
          : mentorItem?.name?.trim()
      )
      .filter(Boolean)
      .join(", ");

    if (!chairman && (!mentorNames || mentorNames.length === 0)) {
      return (
        <p className="text-sm text-gray-500 italic">
          Thông tin chưa được cập nhật.
        </p>
      );
    }
    return (
      <ul className="text-gray-700 text-sm list-none space-y-1.5">
        {chairman && (
          <li>
            <strong className="font-medium">Chủ nhiệm/Trưởng Lab:</strong>{" "}
            {chairman}
          </li>
        )}
        {mentorNames && mentorNames.length > 0 && (
          <li>
            <strong className="font-medium">Cố vấn/Mentor:</strong>{" "}
            {mentorNames}
          </li>
        )}
      </ul>
    );
  };

  const renderGenericList = (
    items,
    defaultText = "Chưa cập nhật thông tin."
  ) => {
    if (!Array.isArray(items) || items.length === 0) {
      return <p className="text-sm text-gray-500 italic">{defaultText}</p>; // Sẽ được InfoSection lọc bỏ nếu là children duy nhất
    }
    const listContent = items
      .map((item, index) => {
        const key = `item-${index}-${
          typeof item === "string"
            ? item.slice(0, 5)
            : (item?.title || item?.name || "def").slice(0, 5)
        }`;
        const mainText =
          typeof item === "string" ? item : item?.title || item?.name || null; // Trả về null nếu không có
        const subText = typeof item === "object" ? item?.description : null;
        const yearText =
          typeof item === "object" && item?.year ? ` (${item.year})` : "";

        if (!mainText && !subText) return null; // Bỏ qua item rỗng hoàn toàn

        return (
          <li key={key} className="leading-relaxed">
            {mainText && (
              <span className="font-medium text-gray-800">{mainText}</span>
            )}
            {yearText && <span className="text-gray-600">{yearText}</span>}
            {subText && (
              <p className="text-xs text-gray-600 pl-4 mt-0.5">{subText}</p>
            )}
          </li>
        );
      })
      .filter(Boolean); // Lọc bỏ các phần tử null

    if (listContent.length === 0) {
      return <p className="text-sm text-gray-500 italic">{defaultText}</p>;
    }

    return (
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
        {listContent}
      </ul>
    );
  };

  return (
    // Bỏ mt-20, div này là card nội dung chính
    <div className="max-w-6xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-2xl">
      {/* Nút "Quay lại" được đặt ở đây */}
      {onBackClick && (
        <div className="mb-8">
          <button
            onClick={onBackClick}
            className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg py-2 px-3 hover:bg-red-50"
          >
            <ArrowLeft
              size={18}
              className="mr-2 group-hover:-translate-x-1 transition-transform duration-200 ease-in-out"
            />
            Quay lại
          </button>
        </div>
      )}

      {/* Header: Ảnh và Thông tin cơ bản */}
      <header className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-10 pb-10 border-b border-gray-200">
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex-shrink-0">
          <img
            src={imageUrl}
            alt={`Hình ảnh của ${clubName}`}
            className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>
        <div className="flex-grow text-center md:text-left mt-4 md:mt-0">
          <p className="text-lg text-red-600 font-bold mb-1 tracking-wide uppercase">
            {clubTypeDisplay}
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            {clubName}
          </h1>
          <div className="space-y-2.5">
            {club.belongTo && (
              <InfoItemDisplay
                icon={Building}
                label="Trực thuộc"
                value={club.belongTo}
              />
            )}
            <InfoItemDisplay
              icon={MapPin}
              label="Địa điểm"
              value={club.location}
            />
            {club.numberOfMembers !== undefined && (
              <InfoItemDisplay
                icon={Users2}
                label="Số thành viên"
                value={`~${club.numberOfMembers}`}
              />
            )}
            <InfoItemDisplay
              icon={CalendarCheck2}
              label="Năm thành lập"
              value={yearEstablished}
            />
            <InfoItemDisplay
              icon={Mail}
              label="Liên hệ"
              value={contactInfo}
              href={
                contactInfo.startsWith("http")
                  ? contactInfo
                  : contactInfo.includes("@")
                  ? `mailto:${contactInfo}`
                  : undefined
              }
            />
            <InfoItemDisplay
              icon={FaGlobe}
              label="Website"
              value={club.website}
              href={club.website}
            />
          </div>
        </div>
      </header>

      {/* Nội dung chi tiết */}
      <div className="space-y-10">
        {(club.description || club.detailedDescription) && (
          <InfoSection title="Giới thiệu" icon={FaInfoCircle} fullSpan>
            <div className="text-gray-700 whitespace-pre-line text-sm sm:text-base leading-relaxed prose prose-sm sm:prose max-w-none">
              {club.detailedDescription || club.description}
            </div>
          </InfoSection>
        )}

        {/* Kiểm tra club.executive_board trước khi render InfoSection */}
        {club.executive_board && (
          <InfoSection title="Ban điều hành" icon={ExecutiveIcon} fullSpan>
            {renderExecutiveBoard()}
          </InfoSection>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(club.activities) && club.activities.length > 0 && (
            <InfoSection title="Hoạt động nổi bật" icon={ActivitiesIcon}>
              {renderGenericList(
                club.activities,
                "Chưa có thông tin hoạt động."
              )}
            </InfoSection>
          )}
          {Array.isArray(club.achievements) && club.achievements.length > 0 && (
            <InfoSection title="Thành tựu" icon={TrophyIcon}>
              {renderGenericList(club.achievements, "Chưa có thành tựu nào.")}
            </InfoSection>
          )}
          {Array.isArray(club.criteria) && club.criteria.length > 0 && (
            <InfoSection title="Tiêu chí tuyển chọn" icon={ListChecks}>
              {renderGenericList(club.criteria, "Chưa có thông tin tiêu chí.")}
            </InfoSection>
          )}
        </div>

        {Array.isArray(club.partnersAndSponsors) &&
          club.partnersAndSponsors.length > 0 && (
            <InfoSection
              title="Đối tác & Nhà tài trợ"
              icon={Handshake}
              fullSpan
            >
              {renderGenericList(
                club.partnersAndSponsors,
                "Chưa có thông tin đối tác/tài trợ."
              )}
            </InfoSection>
          )}

        {Array.isArray(club.gallery) && club.gallery.length > 0 && (
          <InfoSection title="Thư viện ảnh" icon={ImageIcon} fullSpan>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {club.gallery.map(
                (imgSrc, index) =>
                  imgSrc &&
                  typeof imgSrc === "string" && (
                    <a
                      key={index}
                      href={imgSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-100 group"
                    >
                      <img
                        src={imgSrc}
                        alt={`Ảnh ${index + 1} của ${clubName}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </a>
                  )
              )}
            </div>
          </InfoSection>
        )}

        {club.socialMediaLinks &&
          Object.values(club.socialMediaLinks).some(
            (url) =>
              url &&
              typeof url === "string" &&
              url.trim() !== "" &&
              url.trim() !== "#"
          ) && (
            <InfoSection title="Kết nối mạng xã hội" icon={Share2} fullSpan>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {Object.entries(club.socialMediaLinks)
                  .filter(
                    ([_, urlValue]) =>
                      urlValue &&
                      typeof urlValue === "string" &&
                      urlValue.trim() !== "" &&
                      urlValue.trim() !== "#"
                  )
                  .map(([platform, urlValue]) => {
                    const platformKey = platform.toLowerCase();
                    const SpecificIcon = iconMap[platformKey];
                    const IconElement = SpecificIcon
                      ? React.cloneElement(SpecificIcon, {})
                      : React.cloneElement(iconMap.default, {});
                    return (
                      <a
                        key={platform}
                        href={urlValue}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-800 hover:text-red-700 transition-colors text-sm group"
                        aria-label={`Trang ${platform} của ${clubName}`}
                      >
                        {IconElement}
                        <span className="capitalize font-medium group-hover:underline">
                          {platform}
                        </span>
                      </a>
                    );
                  })}
              </div>
            </InfoSection>
          )}
      </div>
    </div>
  );
}
