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
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import {
  Link as LinkIcon,
  Users2,
  CalendarCheck2,
  MapPin,
  Mail,
  Building,
  ListChecks,
  Image as ImageIcon,
  Share2,
  Mic2,
  Award as TrophyIcon,
  UsersRound as ExecutiveIcon,
  Handshake,
  ArrowLeft,
  ClipboardList as ActivitiesIcon,
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

// Helper component để hiển thị một mục thông tin kèm icon
const InfoItemDisplay = ({ icon: Icon, label, value, href, isEmail }) => {
  if (!value || value === "Chưa cập nhật") return null;

  let content = value;
  if (isEmail && value.includes("@")) {
    content = (
      <a
        href={`mailto:${value}`}
        className="text-red-600 hover:text-red-700 hover:underline break-all"
      >
        {value}
      </a>
    );
  } else if (href) {
    content = (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700 hover:underline break-all"
      >
        {value}
      </a>
    );
  }

  return (
    <div className="flex items-start text-sm mb-2">
      {Icon && (
        <Icon className="text-red-500 mr-2.5 mt-0.5 flex-shrink-0" size={16} />
      )}
      <div>
        <span className="font-semibold text-gray-700">{label}:</span>
        <span className="text-gray-600 ml-1">{content}</span>
      </div>
    </div>
  );
};

// Helper component để render các khối thông tin
const InfoSection = ({
  title,
  icon: Icon,
  children,
  fullSpan = false,
  extraHeaderContent,
}) => {
  const validChildren = React.Children.toArray(children).filter(
    (child) =>
      !!child &&
      (typeof child !== "object" ||
        React.isValidElement(child) ||
        Object.keys(child).length > 0)
  );

  // Điều chỉnh logic kiểm tra children để tránh lỗi với <p> defaultText
  let hasContent = false;
  if (validChildren.length > 0) {
    if (
      validChildren.length === 1 &&
      React.isValidElement(validChildren[0]) &&
      validChildren[0].type === "p"
    ) {
      // Nếu children duy nhất là <p>, kiểm tra nội dung của nó
      const pContent = validChildren[0].props.children;
      if (
        typeof pContent === "string" &&
        pContent.trim() !== "" &&
        pContent !== "Thông tin chưa được cập nhật." &&
        pContent !== "Chưa cập nhật thông tin." &&
        pContent !== "Chưa có thông tin hoạt động." &&
        pContent !== "Chưa có thành tựu nào." &&
        pContent !== "Chưa có thông tin tiêu chí." &&
        pContent !== "Chưa có thông tin đối tác/tài trợ."
      ) {
        hasContent = true;
      } else if (Array.isArray(pContent) && pContent.length > 0) {
        // Trường hợp pContent là mảng
        hasContent = true;
      }
    } else {
      // Nếu có nhiều children hoặc child không phải là <p> mặc định rỗng
      hasContent = true;
    }
  }

  if (!hasContent) return null;

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-5 shadow-md ${
        fullSpan ? "lg:col-span-3 md:col-span-2 sm:col-span-1" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
        <div className="flex items-center">
          {Icon && <Icon className="text-red-600 mr-2" size={20} />}
          <h2 className="text-lg font-semibold text-red-700">{title}</h2>
        </div>
        {extraHeaderContent && <div>{extraHeaderContent}</div>}
      </div>
      {children}
    </div>
  );
};

export default function ClubLabDetail({ club, onBackClick }) {
  if (!club) {
    return (
      <p className="text-center text-gray-500 py-20">
        Không có dữ liệu chi tiết để hiển thị.
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
    "https://via.placeholder.com/800x600?text=HUST+ORG";
  const yearEstablished =
    club.yearOfEstablishment || club.establishedYear || "Chưa cập nhật";
  const contactInfo = club.contactEmail || club.contact || "Chưa cập nhật";

  const renderExecutiveBoard = () => {
    // Sửa ở đây: dùng club.executive_board và boardData.mentor
    const boardData = club.executive_board; // << SỬA LẠI TÊN TRƯỜNG
    if (
      !boardData ||
      Object.keys(boardData).length === 0 ||
      (!boardData.chairman &&
        (!boardData.mentor || boardData.mentor.length === 0)) // << SỬA LẠI TÊN TRƯỜNG
    ) {
      return (
        <p className="text-sm text-gray-500 italic">
          Thông tin chưa được cập nhật.
        </p>
      );
    }
    const chairman = boardData.chairman;
    const mentorsArray = Array.isArray(boardData.mentor) // << SỬA LẠI TÊN TRƯỜNG
      ? boardData.mentor
      : boardData.mentor
      ? [boardData.mentor]
      : [];
    const mentorNames = mentorsArray
      .map(
        (
          mentorItem // Đổi tên biến để tránh nhầm lẫn
        ) =>
          typeof mentorItem === "string"
            ? mentorItem.trim()
            : mentorItem?.name?.trim()
      )
      .filter(Boolean)
      .join(", ");

    if (!chairman && !mentorNames) {
      return (
        <p className="text-sm text-gray-500 italic">
          Thông tin chưa được cập nhật.
        </p>
      );
    }
    return (
      <ul className="text-gray-700 text-sm list-none space-y-1">
        {chairman && (
          <li>
            <strong className="font-medium">Chủ nhiệm/Trưởng Lab:</strong>{" "}
            {chairman}
          </li>
        )}
        {mentorNames && (
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
      return <p className="text-sm text-gray-500 italic">{defaultText}</p>;
    }
    return (
      <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
        {items.map((item, index) => {
          const key = `item-${index}-${Math.random()
            .toString(36)
            .substring(7)}`;
          const mainText =
            typeof item === "string"
              ? item
              : item?.title || item?.name || "N/A";
          const subText = typeof item === "object" ? item?.description : null;
          const yearText =
            typeof item === "object" && item?.year ? ` (${item.year})` : "";
          if (mainText === "N/A" && !subText) return null;
          return (
            <li key={key}>
              <span className="font-medium">{mainText}</span>
              {yearText}
              {subText && (
                <p className="text-xs text-gray-500 pl-4 mt-0.5">{subText}</p>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="mt-20 max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
      {onBackClick && (
        <div className="mb-6">
          <button
            onClick={onBackClick}
            className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-2 hover:bg-red-50"
          >
            <ArrowLeft
              size={20}
              className="mr-1.5 group-hover:-translate-x-1.5 transition-transform duration-200 ease-in-out"
            />
            Quay lại
          </button>
        </div>
      )}

      <header className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 pb-8 border-b border-gray-200">
        <div className="md:w-1/3 lg:w-1/4 flex-shrink-0 mx-auto md:mx-0">
          <img
            src={imageUrl}
            alt={`Hình ảnh của ${clubName}`}
            className="w-full max-w-xs md:max-w-none aspect-square object-cover rounded-lg shadow-lg border-4 border-white"
          />
        </div>
        <div className="md:w-2/3 lg:w-3/4 text-center md:text-left">
          <p className="text-base text-red-600 font-semibold mb-1 tracking-wide uppercase">
            {clubTypeDisplay}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {clubName}
          </h1>
          <div className="space-y-1.5">
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
              isEmail={contactInfo.includes("@")}
              href={contactInfo.startsWith("http") ? contactInfo : undefined}
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

      <div className="space-y-6">
        {(club.description || club.detailedDescription) && (
          <InfoSection title="Giới thiệu" icon={FaInfoCircle} fullSpan>
            <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed prose prose-sm max-w-none">
              {club.detailedDescription || club.description}
            </div>
          </InfoSection>
        )}
        {/* Sửa ở đây: kiểm tra club.executive_board */}
        {club.executive_board &&
          Object.keys(club.executive_board).length > 0 && (
            <InfoSection title="Ban điều hành" icon={ExecutiveIcon} fullSpan>
              {renderExecutiveBoard()}
            </InfoSection>
          )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(club.activities) && club.activities.length > 0 && (
            <InfoSection title="Hoạt động" icon={ActivitiesIcon}>
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
            <InfoSection title="Đối tác & Tài trợ" icon={Handshake} fullSpan>
              {renderGenericList(
                club.partnersAndSponsors,
                "Chưa có thông tin đối tác/tài trợ."
              )}
            </InfoSection>
          )}
        {Array.isArray(club.gallery) && club.gallery.length > 0 && (
          <InfoSection title="Thư viện ảnh" icon={ImageIcon} fullSpan>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {club.gallery.map(
                (imgSrc, index) =>
                  imgSrc &&
                  typeof imgSrc === "string" && (
                    <a
                      key={index}
                      href={imgSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-100 group"
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
            <InfoSection title="Kết nối với chúng tôi" icon={Share2} fullSpan>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
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
                        className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors text-sm group"
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
