// Constants for predefined values
const image = "https://hust.edu.vn/uploads/sys/news/2023_06/cbo_0362.jpg"; // HUST image
const robot_image =
  "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/337076057_921738645640922_127205912336207823_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeG9KmGgsa9Sj66kVudyjvc1lxeIM49MHJ6XF4gzj0wcnhhRd_Zxkurp_oiKugY58NKha9TWQAhzxOwxrXxjWPtk&_nc_ohc=NcidTe6Dg9IQ7kNvwGbZOQq&_nc_oc=AdkJGHM8ceaq7hMVXu7XEwft-AO858N9UUIKVRsf9vnZ3mzyugOltvUh1L5792SF7Q8&_nc_zt=24&_nc_ht=scontent.fhan2-3.fna&_nc_gid=-hR0h-b2pNeQmkSnkkoQsg&oh=00_AfLCSymw6jtCnOmqocuunIv1jgRoZsP4Z3UEal7IgpyXyA&oe=68310AE0";
const media_club_image =
  "https://hust.edu.vn/assets/sys/news/2021/05/573837.jpg";
const football_team_image =
  "https://hust.edu.vn/uploads/sys/news/2024_12/dsc_4692.jpg";
const music_club_image =
  "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/489860116_1175608344575953_2029728173949378543_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeErefAvDGq_HqLVhucFxfgodQrAHmWRwiJ1CsAeZZHCIl4eNWp0wAjQWVdRWrQcSymguITKWT-hZC9O1KThS6XC&_nc_ohc=CjlN96WsO4EQ7kNvwGASPCF&_nc_oc=AdkSYijiIbJ5--ADWinnBnyg_5dCwcG4jY5ef79-qHday0wEvk4Esqo_mLHGAU0KxGc&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=zuxvDGSjOho-IulMvQTY0g&oh=00_AfLK34sS6SBoqGqSKpAvid9Zk69KfNxhMFGNkFs6HQIRaw&oe=6830EFB5";

const art_club_image =
  "https://c8.alamy.com/comp/R20ND6/colorful-typography-illustration-featuring-the-words-art-club-decorated-with-a-color-palette-a-paint-brush-a-pencil-and-a-piece-of-paper-R20ND6.jpg";
const culture_club_image =
  "https://soict.hust.edu.vn/wp-content/uploads/taiko.jpg";

const hust_image1 =
  "https://hust.edu.vn/uploads/sys/news/2021/05/reinvent-cover.571399.26327.jpg";
const hust_image2 =
  "https://hust.edu.vn/uploads/sys/news/2022_11/a8bc2693-338f-410e-aace-9c05bef1ada3.jpeg";
const hust_image3 =
  "https://hust.edu.vn/uploads/sys/news/2025_02/20250214-cbo_8235.jpg";
const hust_image4 =
  "https://hust.edu.vn/uploads/sys/news/2022_11/c1a47692-9dac-42ef-bb03-ee13c2a0e1fc.jpeg";
const hust_image5 =
  "https://hust.edu.vn/uploads/sys/news/2021/05/pic-1.571399.26328.jpg";
const hust_image6 =
  "https://hust.edu.vn/uploads/sys/news/2021/05/reinvent-3.571399.26330.jpg";
const hust_image7 =
  "https://hust.edu.vn/uploads/sys/news/2023_10/20231012-tsp_9004.jpg";
const hust_image8 = "https://hust.edu.vn/uploads/sys/news/2019/12/501307.jpg";
const hust_image9 =
  "https://vov2.vov.vn/sites/default/files/styles/large/public/2023-06/13.jpg";
const hust_image10 =
  "https://hust.edu.vn/uploads/sys/news/2024_02/20231213-cbo_1032.jpg";
const hust_logo =
  "https://upload.wikimedia.org/wikipedia/en/8/8e/%C4%90%E1%BA%A1i_h%E1%BB%8Dc_B%C3%A1ch_khoa_H%C3%A0_N%E1%BB%99i_%28logo%29.png";

// Define the types of entities
export const ENTITY_TYPES = {
  CLUB: "club",
  LAB: "lab",
  FOOTBALL: "football",
  MUSIC: "music",
  ART: "art",
  CULTURE: "culture",
  MEDIA: "media",
};

// Define the faculties or departments
export const FACULTIES = {
  SME: "Trường Cơ khí - SME",
  SOICT: "Trường Công nghệ Thông tin và Truyền thông - SoICT",
  SEEE: "Trường Điện - Điện tử - SEEE",
  SCIS: "Trường Hoá và KHSS - SCIS",
  SMSE: "Trường Vật liệu - SMSE",
  SEM: "Trường Kinh tế - SEM",
  FAMI: "Khoa Toán - Tin - FAMI",
  SEP: "Khoa Vật lý Kỹ thuật - SEP",
  SOFL: "Khoa Ngoại ngữ - SOFL",
  FED: "Khoa Khoa học và CNGD - FED",
};

// Sample club data
const clubs = [
  {
    name: "Câu lạc bộ Sáng tạo Sinh viên (SINNO Club)",
    executive_board: {
      chairman: "Nguyen Binh An",
      mentor: ["Nguyen Dich Nhat Minh", "Kha Minh Bao", "Nguyen Hong Viet"],
    },
    description: `Câu lạc bộ Sáng tạo Sinh viên (SINNO Club) trực thuộc Trường Công nghệ Thông tin và Truyền thông (SoICT), Đại học Bách khoa Hà Nội, là môi trường dành cho sinh viên đam mê công nghệ và sáng tạo. Với mục tiêu xây dựng môi trường nghiên cứu, học tập và đổi mới sáng tạo, SINNO Club cung cấp điều kiện và cộng đồng cho sinh viên kết nối ý tưởng và hợp tác phát triển.

      Hoạt động của câu lạc bộ tập trung vào ba lĩnh vực chính:

      Nghiên cứu: Hình thành các nhóm sinh viên tìm hiểu công nghệ mới, tổ chức seminar chia sẻ kiến thức và xây dựng ngân hàng ý tưởng cho các dự án thực tế.
      Kết nối: Liên kết với các tổ chức, trung tâm nghiên cứu và tổ chức các cuộc thi Hackathon, khởi nghiệp, đồng thời kết nối với các quỹ và câu lạc bộ khác tại Hà Nội.
      Khởi nghiệp: Tạo điều kiện cho thành viên tham gia dự án thực tế, phát triển kỹ năng chuyên môn và tư duy xây dựng dự án có tính thực tiễn cao.

      SINNO Club không chỉ là một câu lạc bộ học thuật mà còn là nơi nuôi dưỡng niềm đam mê công nghệ, đưa ra các giải pháp sáng tạo trong lĩnh vực khoa học công nghệ, hứa hẹn phá vỡ mọi giới hạn và định kiến. Tham gia SINNO Club, sinh viên có cơ hội khám phá dự án thực tiễn, học hỏi từ các thành viên tài năng và cùng nhau tạo ra những giải pháp đột phá.`,
    numberOfMembers: 50,
    yearOfEstablishment: 2020,
    activities: [
      "Tổ chức các buổi seminar chia sẻ kiến thức.",
      "Tham gia các cuộc thi Hackathon.",
      "Phát triển dự án thực tế.",
    ],
    criteria: [
      "Đam mê công nghệ, có kiến thức cơ bản về lập trình.",
      "Có khả năng làm việc nhóm.",
    ],
    belongTo: FACULTIES.SOICT,
    contact: "sinno.soict@gmail.com",
    image:
      "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/474505359_1147062854095987_6955759576379322941_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG6cutALC5548sk2xRQSzXfxnJ8pqKcwbPGcnymopzBsyAaJmz_MyXJYP2lN8KlxYMPU6Pu_ajuU1HV6eSVH8Re&_nc_ohc=M9p-WbcAIIoQ7kNvwGGW-GJ&_nc_oc=AdmUshi_puf_2bROVGGEVtLPrdBg5Ix06FfUdmeK6fC89XHtvKZEoTOdxeGSS31Awo0&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=mXPN1DtthJqFA97sFnZPAg&oh=00_AfIFQbKq3exYc81SaZOtSPls39MWFC2FCxVlnEEW_i0ZsQ&oe=683118C7",
    gallery: [image, image, image],
    website: "http://sinno.soict.ai/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/SINNOclub",
      instagram: "https://www.facebook.com/SINNOclub",
      twitter: "https://www.facebook.com/SINNOclub",
      tiktok: "https://www.facebook.com/SINNOclub",
      youtube: "https://www.facebook.com/SINNOclub",
      linkedin: "https://www.facebook.com/SINNOclub",
      github: "https://github.com/SOICTInnovationClub",
      discord: "https://www.facebook.com/SINNOclub",
      telegram: "https://www.facebook.com/SINNOclub",
    },
    location: "B1-304",
    achievements: ["Giải ba SCIC 2025", "Top 8 TechStart 2023"],
    partnersAndSponsors: ["Neural of Things - NoT", "Innovation Center"],
    type: ENTITY_TYPES.CLUB,
  },
  {
    name: "Lab BKAI",
    executive_board: {
      chairman: "TS. Đinh Viết Sang",
      mentor: ["Nguyen Phi Le", "Than Quang Khoat", "TS. Đinh Viết Sang"],
    },
    description: `
    Trung tâm Nghiên cứu quốc tế về Trí tuệ nhân tạo BK.AI được thành lập với mục tiêu xây dựng và phát triển một cơ quan nghiên cứu hàng đầu tại Việt Nam, đặc biệt trong việc đào tạo nhân lực trình độ cao về AI và nghiên cứu những nội dung chọn lọc quan trọng về AI. Trung tâm hướng tới xây dựng những nhóm nghiên cứu mạnh, tạo ra các công trình có tầm ảnh hưởng lớn trong khu vực và trên thế giới. Trung tâm cũng chú trọng chuyển giao công nghệ, thúc đẩy việc ứng dụng AI vào thực tiễn.`,
    numberOfMembers: 50,
    yearOfEstablishment: 2020,
    activities: [
      "Tổ chức các buổi seminar chia sẻ kiến thức.",
      "Tham gia các cuộc thi Hackathon.",
      "Phát triển dự án thực tế.",
    ],
    criteria: [
      "Đam mê công nghệ, có kiến thức cơ bản về lập trình.",
      "Có khả năng làm việc nhóm.",
    ],
    belongTo: FACULTIES.SOICT,
    contact: "sinno.soict@gmail.com",
    image:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/292787364_413752620812911_1461665317152822517_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGrFF5Z4eElc07N4m5jK0CwPjbVezitjiw-NtV7OK2OLAIcogeT4IPEl_NwE45tMc71EKMGPkUCcZXFy9IFkvHZ&_nc_ohc=o4xRh1J1s48Q7kNvwHcLflS&_nc_oc=AdnW0QkSBcQCPfjSE4Mr1KkCvHmCw0A8lctn4Dj8cybvKSvh15wMmkun7fSXJB_ejLM&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=0YCvIULb4vTju2x_wv43vQ&oh=00_AfJ-gMwzGHx2AZ2hMXhguupQs5_LDziYfhoPqJMrqRSz6g&oe=6831080E",
    gallery: [hust_image1, hust_image3, hust_image10],
    website: "http://sinno.soict.ai/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/SINNOclub",
      instagram: "https://www.facebook.com/SINNOclub",
      twitter: "https://www.facebook.com/SINNOclub",
      tiktok: "https://www.facebook.com/SINNOclub",
      youtube: "https://www.facebook.com/SINNOclub",
      linkedin: "https://www.facebook.com/SINNOclub",
      github: "https://github.com/SOICTInnovationClub",
      discord: "https://www.facebook.com/SINNOclub",
      telegram: "https://www.facebook.com/SINNOclub",
    },
    location: "B1-304",
    achievements: ["Giải ba SCIC 2025", "Top 8 TechStart 2023"],
    partnersAndSponsors: ["Neural of Things - NoT", "Innovation Center"],
    type: ENTITY_TYPES.CLUB,
  },
  {
    name: "Câu lạc bộ Robotics (Robotics Club)",
    executive_board: {
      chairman: "Nguyen Thi Mai",
      mentor: ["Hoang Minh Tu", "Nguyen Thi Thu", "Pham Hoang Nam"],
    },
    description: `Câu lạc bộ Robotics chuyên nghiên cứu và phát triển các dự án robot, với mục tiêu đưa sinh viên tiếp cận các công nghệ robot hiện đại và góp phần phát triển ngành công nghệ robot tại Việt Nam.`,
    numberOfMembers: 60,
    yearOfEstablishment: 2018,
    activities: [
      "Thiết kế robot tham gia các cuộc thi quốc tế.",
      "Tổ chức các buổi workshop về robot và trí tuệ nhân tạo.",
      "Phát triển dự án robot cho các tổ chức doanh nghiệp.",
    ],
    criteria: [
      "Đam mê robot và công nghệ, có khả năng làm việc nhóm.",
      "Có kiến thức cơ bản về lập trình.",
    ],
    belongTo: FACULTIES.SOICT,
    contact: "robotics.club@soict.edu.vn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmciB0Hx3jAxxM_Z_JiOYh3VGBYovvwLtLQ&s",
    gallery: [hust_image4, hust_image5, hust_image9],
    website: "http://roboticsclub.soict.edu.vn/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/RoboticsClubSoICT",
      instagram: "https://www.instagram.com/RoboticsClubSoICT",
      twitter: "https://www.twitter.com/RoboticsClubSoICT",
      tiktok: "https://www.tiktok.com/RoboticsClubSoICT",
      youtube: "https://www.youtube.com/RoboticsClubSoICT",
      linkedin: "https://www.linkedin.com/RoboticsClubSoICT",
      github: "https://github.com/RoboticsClubSoICT",
      discord: "https://www.discord.com/RoboticsClubSoICT",
      telegram: "https://www.telegram.com/RoboticsClubSoICT",
    },
    location: "B1-305",
    achievements: ["Giải nhất cuộc thi Robotics 2023", "Top 3 TechFest 2024"],
    partnersAndSponsors: ["Tech Robotics", "VietTech Labs"],
    type: ENTITY_TYPES.CLUB,
  },
  {
    name: "Câu lạc bộ Kinh tế (Economics Club)",
    executive_board: {
      chairman: "Pham Minh Tu",
      mentor: ["Tran Thi Lan", "Nguyen Thi Thu", "Nguyen Minh Tuan"],
    },
    description: `Câu lạc bộ Kinh tế dành cho những sinh viên đam mê nghiên cứu và học hỏi các vấn đề kinh tế, từ lý thuyết đến thực tiễn. Các hoạt động của câu lạc bộ bao gồm các hội thảo, dự án nghiên cứu và trao đổi về các xu hướng kinh tế mới.`,
    numberOfMembers: 40,
    yearOfEstablishment: 2017,
    activities: [
      "Tổ chức các hội thảo và diễn đàn kinh tế.",
      "Cộng tác với các chuyên gia trong ngành kinh tế.",
      "Chia sẻ kiến thức về thị trường tài chính và kinh doanh.",
    ],
    criteria: "Yêu thích nghiên cứu kinh tế, có kiến thức cơ bản về tài chính.",
    belongTo: FACULTIES.SEM,
    contact: "economics.club@sem.edu.vn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHP03vPwC7Bnw5Cr6ZLnQNm9gc2Zvyam1cQ&s",
    gallery: [hust_image4, hust_image2, hust_image6],
    website: "http://economicsclub.sem.edu.vn/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/EconomicsClubSem",
      instagram: "https://www.instagram.com/EconomicsClubSem",
      twitter: "https://www.twitter.com/EconomicsClubSem",
      tiktok: "https://www.tiktok.com/EconomicsClubSem",
      youtube: "https://www.youtube.com/EconomicsClubSem",
      linkedin: "https://www.linkedin.com/EconomicsClubSem",
      github: "https://github.com/EconomicsClubSem",
      discord: "https://www.discord.com/EconomicsClubSem",
      telegram: "https://www.telegram.com/EconomicsClubSem",
    },
    location: "B2-102",
    achievements: [
      "Giải nhì cuộc thi Kinh tế 2024",
      "Top 10 Startup Competition 2023",
    ],
    partnersAndSponsors: ["Economic Research Center", "Finance Group"],
    type: ENTITY_TYPES.CLUB,
  },
  {
    name: "Câu lạc bộ Chế tạo (Maker Club)",
    executive_board: {
      chairman: "Le Thanh Son",
      mentor: ["Nguyen Thi Mai", "Pham Minh Hoang", "Tran Thi Lan"],
    },
    description: `Câu lạc bộ Chế tạo tập trung vào việc chế tạo các sản phẩm từ các vật liệu có sẵn, phát triển các kỹ năng chế tạo và sáng tạo. Đây là nơi lý tưởng cho những ai đam mê tạo ra những sản phẩm độc đáo.`,
    numberOfMembers: 30,
    yearOfEstablishment: 2016,
    activities: [
      "Thực hành chế tạo các sản phẩm handmade.",
      "Tham gia các cuộc thi sáng tạo.",
      "Cung cấp tài liệu, công cụ cho các dự án sáng tạo.",
    ],
    criteria: [
      "Có đam mê sáng tạo, muốn học hỏi về kỹ thuật chế tạo.",
      "Có khả năng làm việc nhóm.",
    ],
    belongTo: FACULTIES.SMSE,
    contact: "maker.club@smse.edu.vn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuYWlNLNcHa1s4e8ll0m15Qr1ZVRgx3DgnA&s",
    gallery: [hust_image3, hust_image8, hust_image4],
    website: "http://makerclub.smse.edu.vn/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/MakerClubSMSE",
      instagram: "https://www.instagram.com/MakerClubSMSE",
      twitter: "https://www.twitter.com/MakerClubSMSE",
      tiktok: "https://www.tiktok.com/MakerClubSMSE",
      youtube: "https://www.youtube.com/MakerClubSMSE",
      linkedin: "https://www.linkedin.com/MakerClubSMSE",
      github: "https://github.com/MakerClubSMSE",
      discord: "https://www.discord.com/MakerClubSMSE",
      telegram: "https://www.telegram.com/MakerClubSMSE",
    },
    location: "B2-201",
    achievements: ["Giải nhất cuộc thi Sáng tạo 2022", "Top 5 Maker Fair 2023"],
    partnersAndSponsors: ["MakerHub", "Creative Labs"],
    type: ENTITY_TYPES.CLUB,
  },
  {
    name: "Phòng thí nghiệm Công nghệ AI (AI Technology Lab)",
    executive_board: {
      chairman: "Nguyen Thi Mai",
      mentor: ["Tran Minh Tu", "Le Thi Lan", "Pham Minh Hoang"],
    },
    description: `Phòng thí nghiệm Công nghệ AI tập trung vào nghiên cứu và phát triển các ứng dụng AI trong nhiều lĩnh vực, bao gồm học máy, thị giác máy tính và xử lý ngôn ngữ tự nhiên.`,
    numberOfMembers: 25,
    yearOfEstablishment: 2021,
    activities: [
      "Nghiên cứu các thuật toán AI tiên tiến.",
      "Phát triển các mô hình học máy.",
      "Tổ chức các buổi hội thảo về AI.",
    ],
    criteria: [
      "Có kiến thức về lập trình Python, đam mê nghiên cứu AI.",
      "Có khả năng làm việc nhóm.",
    ],
    belongTo: FACULTIES.SOICT,
    contact: "ai.lab@soict.edu.vn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4h3aKh6Ptt0qNvuf4S9dHIIFp68x3bx4ObA&s",
    gallery: [hust_image5, hust_image6, hust_image7],
    website: "http://ai-lab.soict.edu.vn/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/AITechnologyLab",
      instagram: "https://www.instagram.com/AITechnologyLab",
      twitter: "https://www.twitter.com/AITechnologyLab",
      tiktok: "https://www.tiktok.com/AITechnologyLab",
      youtube: "https://www.youtube.com/AITechnologyLab",
      linkedin: "https://www.linkedin.com/AITechnologyLab",
      github: "https://github.com/AITechnologyLab",
      discord: "https://www.discord.com/AITechnologyLab",
      telegram: "https://www.telegram.com/AITechnologyLab",
    },
    location: "B2-405",
    achievements: [
      "Giải nhất cuộc thi AI Innovation 2023",
      "Top 3 AI Challenge 2024",
    ],
    partnersAndSponsors: ["AI Research Center", "Tech Innovators"],
    type: ENTITY_TYPES.LAB,
  },
  {
    name: "Phòng thí nghiệm Blockchain (Blockchain Lab)",
    executive_board: {
      chairman: "Nguyen Minh Tuan",
      mentor: ["Tran Thi Lan", "Pham Minh Hoang", "Le Thi Bich"],
    },
    description: `Phòng thí nghiệm Blockchain nghiên cứu các ứng dụng của công nghệ Blockchain trong các lĩnh vực tài chính, bảo mật và quản lý dữ liệu.`,
    numberOfMembers: 15,
    yearOfEstablishment: 2019,
    activities: [
      "Nghiên cứu các ứng dụng Blockchain trong ngành tài chính.",
      "Phát triển các giải pháp bảo mật dựa trên Blockchain.",
      "Tổ chức các buổi hội thảo về Blockchain và tiền điện tử.",
    ],
    criteria: [
      "Có kiến thức cơ bản về Blockchain và Cryptocurrencies.",
      "Có khả năng lập trình.",
    ],
    belongTo: FACULTIES.SOICT,
    contact: "blockchain.lab@soict.edu.vn",
    image: "https://blog.dktcdn.net/files/blockchain-la-gi-1.jpeg",
    gallery: [hust_image5, hust_image7, hust_image6, hust_image10],
    website: "http://blockchainlab.soict.edu.vn/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/BlockchainLabSoICT",
      instagram: "https://www.instagram.com/BlockchainLabSoICT",
      twitter: "https://www.twitter.com/BlockchainLabSoICT",
      tiktok: "https://www.tiktok.com/BlockchainLabSoICT",
      youtube: "https://www.youtube.com/BlockchainLabSoICT",
      linkedin: "https://www.linkedin.com/BlockchainLabSoICT",
      github: "https://github.com/BlockchainLabSoICT",
      discord: "https://www.discord.com/BlockchainLabSoICT",
      telegram: "https://www.telegram.com/BlockchainLabSoICT",
    },
    location: "B2-506",
    achievements: [
      "Giải nhì Blockchain Hackathon 2023",
      "Top 5 Blockchain Challenge 2024",
    ],
    partnersAndSponsors: ["CryptoTech", "Blockchain Ventures"],
    type: ENTITY_TYPES.LAB,
  },
  {
    name: "Phòng thí nghiệm Vật lý Ứng dụng (Applied Physics Lab)",
    executive_board: {
      chairman: "Le Thanh Son",
      mentor: ["Nguyen Thi Mai", "Pham Minh Hoang", "Tran Thi Thu"],
    },
    description: `Phòng thí nghiệm Vật lý Ứng dụng chuyên nghiên cứu các ứng dụng của vật lý trong công nghệ, với các dự án liên quan đến vật liệu mới, quang học và điện tử.`,
    numberOfMembers: 20,
    yearOfEstablishment: 2018,
    activities: [
      "Nghiên cứu vật liệu mới và ứng dụng trong công nghệ.",
      "Thực hiện thí nghiệm quang học và điện tử.",
      "Tổ chức các buổi hội thảo về vật lý ứng dụng.",
    ],
    criteria: [
      "Có kiến thức về vật lý, đặc biệt là trong lĩnh vực quang học và điện tử.",
      "Có khả năng làm việc nhóm.",
    ],
    belongTo: FACULTIES.SEEE,
    contact: "applied.phys.lab@see.edu.vn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVyD7TLhURDl_PO0T4An72mGXyXy0v5XzUA&s",
    gallery: [hust_image1, hust_image2, hust_image3, hust_image4],
    website: "http://appliedphyslab.see.edu.vn/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/AppliedPhysicsLabSEE",
      instagram: "https://www.instagram.com/AppliedPhysicsLabSEE",
      twitter: "https://www.twitter.com/AppliedPhysicsLabSEE",
      tiktok: "https://www.tiktok.com/AppliedPhysicsLabSEE",
      youtube: "https://www.youtube.com/AppliedPhysicsLabSEE",
      linkedin: "https://www.linkedin.com/AppliedPhysicsLabSEE",
      github: "https://github.com/AppliedPhysicsLabSEE",
      discord: "https://www.discord.com/AppliedPhysicsLabSEE",
      telegram: "https://www.telegram.com/AppliedPhysicsLabSEE",
    },
    location: "B3-204",
    achievements: [
      "Giải nhất cuộc thi Vật lý Ứng dụng 2023",
      "Top 5 Science Fair 2024",
    ],
    partnersAndSponsors: ["Physics Innovations", "Tech Labs"],
    type: ENTITY_TYPES.LAB,
  },
  {
    name: "Phòng thí nghiệm Khoa học Dữ liệu (Data Science Lab)",
    executive_board: {
      chairman: "Pham Minh Tuan",
      mentor: ["Nguyen Thi Lan", "Tran Minh Hoang", "Le Thi Thu"],
    },
    description: `Phòng thí nghiệm Khoa học Dữ liệu chuyên nghiên cứu và phát triển các ứng dụng của Khoa học Dữ liệu trong phân tích dữ liệu lớn, học máy và trí tuệ nhân tạo.`,
    numberOfMembers: 18,
    yearOfEstablishment: 2020,
    activities: [
      "Nghiên cứu phân tích dữ liệu lớn.",
      "Phát triển các mô hình học máy và AI.",
      "Tổ chức các buổi hội thảo về Khoa học Dữ liệu.",
    ],
    criteria: [
      "Có nền tảng vững về toán học và lập trình.",
      "Có khả năng làm việc nhóm.",
    ],
    belongTo: FACULTIES.FAMI,
    contact: "data.science.lab@fami.edu.vn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAO9f9obOCUqXRDg1J82cpGnQ4mVCJcQKkQ&s",
    gallery: [hust_image5, hust_image6, hust_image7, hust_image8],
    website: "http://datasciencelab.fami.edu.vn/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/DataScienceLabFami",
      instagram: "https://www.instagram.com/DataScienceLabFami",
      twitter: "https://www.twitter.com/DataScienceLabFami",
      tiktok: "https://www.tiktok.com/DataScienceLabFami",
      youtube: "https://www.youtube.com/DataScienceLabFami",
      linkedin: "https://www.linkedin.com/DataScienceLabFami",
      github: "https://github.com/DataScienceLabFami",
      discord: "https://www.discord.com/DataScienceLabFami",
      telegram: "https://www.telegram.com/DataScienceLabFami",
    },
    location: "B4-102",
    achievements: [
      "Giải nhất cuộc thi Data Science Challenge 2023",
      "Top 5 Data Science Expo 2024",
    ],
    partnersAndSponsors: ["DataTech", "AI Innovators"],
    type: ENTITY_TYPES.LAB,
  },
  {
    name: "Phòng thí nghiệm Mạng và Bảo mật (Network and Security Lab)",
    executive_board: {
      chairman: "Nguyen Thi Mai",
      mentor: ["Tran Minh Tu", "Le Thanh Son", "Pham Thi Lan"],
    },
    description: `Phòng thí nghiệm Mạng và Bảo mật nghiên cứu các giải pháp về bảo mật mạng, các vấn đề về bảo mật thông tin và tối ưu hóa hệ thống mạng.`,
    numberOfMembers: 22,
    yearOfEstablishment: 2017,
    activities: [
      "Nghiên cứu bảo mật mạng và phòng chống tấn công mạng.",
      "Phát triển các giải pháp bảo mật trong các hệ thống phân tán.",
      "Tổ chức các buổi hội thảo về bảo mật mạng và an toàn thông tin.",
    ],
    criteria: [
      "Có kiến thức về mạng máy tính và bảo mật thông tin.",
      "Có khả năng lập trình.",
    ],
    belongTo: FACULTIES.SOICT,
    contact: "network.security.lab@soict.edu.vn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVs5oOehFuyLO7QeLEU4qhHYjZA95RUKTicA&s",
    gallery: [hust_image1, hust_image6, hust_image6, hust_image8],
    website: "http://networksecuritylab.soict.edu.vn/",
    socialMediaLinks: {
      facebook: "https://www.facebook.com/NetworkSecurityLabSoICT",
      instagram: "https://www.instagram.com/NetworkSecurityLabSoICT",
      twitter: "https://www.twitter.com/NetworkSecurityLabSoICT",
      tiktok: "https://www.tiktok.com/NetworkSecurityLabSoICT",
      youtube: "https://www.youtube.com/NetworkSecurityLabSoICT",
      linkedin: "https://www.linkedin.com/NetworkSecurityLabSoICT",
      github: "https://github.com/NetworkSecurityLabSoICT",
      discord: "https://www.discord.com/NetworkSecurityLabSoICT",
      telegram: "https://www.telegram.com/NetworkSecurityLabSoICT",
    },
    location: "B2-403",
    achievements: [
      "Giải ba cuộc thi Bảo mật Mạng 2023",
      "Top 10 CyberSecurity Challenge 2024",
    ],
    partnersAndSponsors: ["SecureTech", "Cyber Labs"],
    type: ENTITY_TYPES.LAB,
  },
  {
    name: "Phòng thí nghiệm Hoá Sinh Ứng Dụng (Applied Biochemistry Lab)",
    executive_board: {
      chairman: "Nguyen Thi Hoa",
      mentor: ["Tran Van Hieu", "Le Thi Thanh"],
    },
    description: `Nghiên cứu các giải pháp hoá sinh ứng dụng trong y sinh, thực phẩm và môi trường.`,
    numberOfMembers: 20,
    yearOfEstablishment: 2019,
    activities: [
      "Thử nghiệm mô hình vi sinh trong xử lý nước thải.",
      "Phân tích chất lượng thực phẩm.",
      "Tổ chức hội thảo khoa học sinh viên SCIS.",
    ],
    criteria: [
      "Có kiến thức cơ bản về hoá học và sinh học.",
      "Yêu thích nghiên cứu khoa học ứng dụng.",
    ],
    belongTo: FACULTIES.SCIS,
    contact: "bio.lab@scis.edu.vn",
    image: "https://schoolgist.ng/storage/postFiles/BIOCHEMISTRY.jpg",
    gallery: [hust_image10, hust_image6, hust_image7, hust_image8],
    website: "http://biochem.scis.edu.vn",
    socialMediaLinks: {
      facebook: "https://facebook.com/AppliedBioChemLab",
      instagram: "https://instagram.com/AppliedBioChemLab",
      twitter: "https://twitter.com/AppliedBioChemLab",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "B5-203",
    achievements: ["Top 3 SCIS Student Research 2023"],
    partnersAndSponsors: ["GreenTech", "BioFuture Co."],
    type: ENTITY_TYPES.LAB,
  },
  {
    name: "Câu lạc bộ Vật lý Thực nghiệm (Experimental Physics Club)",
    executive_board: {
      chairman: "Tran Quang Huy",
      mentor: ["Pham Van Binh", "Le Thu Ha"],
    },
    description: `Nơi sinh viên đam mê vật lý thực nghiệm thực hành và sáng tạo các mô hình vật lý.`,
    numberOfMembers: 35,
    yearOfEstablishment: 2015,
    activities: [
      "Thiết kế mô hình vật lý ứng dụng.",
      "Thực hành thí nghiệm chuyên sâu.",
      "Tham gia Olympic Vật lý sinh viên.",
    ],
    criteria: [
      "Đam mê vật lý và thích chế tạo mô hình.",
      "Có nền tảng cơ bản về Vật lý đại cương.",
    ],
    belongTo: FACULTIES.SEP,
    contact: "physics.club@sep.edu.vn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFEZBLgoTXZ3BK7whK8ZpU0RA95xbtyFEGA&s",
    gallery: [hust_image1, hust_image9, hust_image7, hust_image8],
    website: "#",
    socialMediaLinks: {
      facebook: "https://facebook.com/ExperimentalPhysicsClub",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "B6-102",
    achievements: ["Giải nhì Olympic Vật lý Toàn quốc 2023"],
    partnersAndSponsors: ["SEP Physics Lab", "BK Physics Forum"],
    type: ENTITY_TYPES.CLUB,
  },
  {
    name: "Phòng thí nghiệm Công nghệ Giáo dục (EdTech Lab)",
    executive_board: {
      chairman: "Dang Thi Mai",
      mentor: ["Nguyen Van Thanh"],
    },
    description: `Tập trung nghiên cứu các giải pháp chuyển đổi số trong giáo dục và phát triển công cụ học tập.`,
    numberOfMembers: 12,
    yearOfEstablishment: 2022,
    activities: [
      "Xây dựng nền tảng học tập AI.",
      "Phát triển ứng dụng dạy học số.",
      "Tổ chức workshop giáo dục hiện đại.",
    ],
    criteria: [
      "Yêu thích giáo dục và công nghệ.",
      "Có kỹ năng lập trình web hoặc mobile.",
    ],
    belongTo: FACULTIES.FED,
    contact: "edtech.lab@fed.edu.vn",
    image: "https://soict.hust.edu.vn/wp-content/uploads/EdtechFresher.jpg",
    gallery: [hust_image1, hust_image6, hust_image10, hust_image8],
    website: "#",
    socialMediaLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "D1-401",
    achievements: ["Top 5 Dự án đổi mới sáng tạo trong giáo dục 2024"],
    partnersAndSponsors: ["Vietnam EdTech Alliance", "BK Digital School"],
    type: ENTITY_TYPES.LAB,
  },
  {
    name: "Câu lạc bộ Kỹ thuật Cơ khí (Mechanical Engineering Club)",
    executive_board: {
      chairman: "Pham Tien Dung",
      mentor: ["Tran Duy Hai"],
    },
    description: `Nơi giao lưu, học hỏi và thực hành kỹ năng chế tạo cơ khí, CAD/CAM/CAE.`,
    numberOfMembers: 45,
    yearOfEstablishment: 2014,
    activities: [
      "Thiết kế mô hình 3D.",
      "Chế tạo chi tiết cơ khí với CNC.",
      "Hỗ trợ đồ án sinh viên SME.",
    ],
    criteria: [
      "Biết sử dụng SolidWorks hoặc AutoCAD.",
      "Yêu thích kỹ thuật cơ khí chế tạo.",
    ],
    belongTo: FACULTIES.SME,
    contact: "mech.club@sme.edu.vn",
    image:
      "https://t4.ftcdn.net/jpg/01/01/94/51/360_F_101945192_efxgx8EbWauu9zQApKZaSeaVubiqxHuS.jpg",
    gallery: [hust_image5, hust_image2, hust_image7, hust_image1],
    website: "#",
    socialMediaLinks: {
      facebook: "https://facebook.com/MechanicalEngineeringClub",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "A3-102",
    achievements: ["Top 3 Cuộc thi thiết kế sản phẩm cơ khí 2022"],
    partnersAndSponsors: ["CADTech", "BK CNC Center"],
    type: ENTITY_TYPES.CLUB,
  },
  {
    name: "Câu lạc bộ HUST Global Talk",
    executive_board: {
      chairman: "Tran Thi Thao",
      mentor: ["Nguyen Van Hung"],
    },
    description: `CLB chuyên tổ chức các hoạt động trao đổi ngoại ngữ và văn hoá quốc tế dành cho sinh viên.`,
    numberOfMembers: 55,
    yearOfEstablishment: 2019,
    activities: [
      "Tổ chức các buổi Speaking Club.",
      "Giao lưu với sinh viên quốc tế.",
      "Tổ chức sự kiện đa văn hoá và workshop ngoại ngữ.",
    ],
    criteria: [
      "Yêu thích giao tiếp tiếng Anh.",
      "Sẵn sàng tham gia các sự kiện quốc tế.",
    ],
    belongTo: FACULTIES.SOFL,
    contact: "global.talk@sofl.edu.vn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrikiYwSm76R4suVZN8Qnfy9MK9U4Vq9v2Q&s",
    gallery: [hust_image1, hust_image2],
    website: "#",
    socialMediaLinks: {
      facebook: "https://facebook.com/HUSTGlobalTalk",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "C1-101",
    achievements: [
      "Top CLB Giao tiếp năm 2023",
      "CLB tiêu biểu Khoa Ngoại ngữ",
    ],
    partnersAndSponsors: ["British Council", "LanguageLink"],
    type: ENTITY_TYPES.CLUB,
  },
  {
    name: "Câu lạc bộ Âm nhạc HUST Melody",
    executive_board: {
      chairman: "Nguyen Thanh Lam",
      mentor: ["Tran Thi Quyen", "Hoang Tuan Anh"],
    },
    description: `Câu lạc bộ Âm nhạc HUST Melody là nơi dành cho những sinh viên có niềm đam mê với âm nhạc, từ hát, chơi nhạc cụ đến sản xuất âm nhạc.`,
    numberOfMembers: 40,
    yearOfEstablishment: 2013,
    activities: [
      "Tổ chức đêm nhạc tại khuôn viên trường.",
      "Tập luyện biểu diễn thường xuyên.",
      "Tham gia các cuộc thi âm nhạc sinh viên.",
    ],
    criteria: [
      "Có năng khiếu hoặc yêu thích âm nhạc.",
      "Tích cực tham gia các hoạt động biểu diễn và tập luyện.",
    ],
    belongTo: FACULTIES.SOFH,
    contact: "melody.club@sofl.edu.vn",
    image: music_club_image,
    gallery: [music_club_image],
    website: "#",
    socialMediaLinks: {
      facebook: "https://facebook.com/HUSTMelodyClub",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "C2-102",
    achievements: ["Top 5 CLB Văn hoá nghệ thuật toàn trường"],
    partnersAndSponsors: ["HUST Arts Center"],
    type: ENTITY_TYPES.MUSIC,
  },
  {
    name: "Câu lạc bộ Bóng đá HUST FC",
    executive_board: {
      chairman: "Pham Van Khoa",
      mentor: ["Do Van Thanh", "Le Hoang Phuc"],
    },
    description: `CLB Bóng đá HUST FC quy tụ những sinh viên có niềm đam mê với bóng đá, tham gia các giải đấu nội bộ và ngoại khóa.`,
    numberOfMembers: 35,
    yearOfEstablishment: 2012,
    activities: [
      "Tổ chức các trận đấu giao hữu nội bộ.",
      "Tham gia giải Bóng đá sinh viên cấp thành.",
      "Tập luyện định kỳ tại sân vận động HUST.",
    ],
    criteria: [
      "Có thể lực tốt, yêu thích bóng đá.",
      "Có tinh thần đồng đội và kỷ luật.",
    ],
    belongTo: FACULTIES.SME,
    contact: "hust.fc@sme.edu.vn",
    image: football_team_image,
    gallery: [football_team_image],
    website: "#",
    socialMediaLinks: {
      facebook: "https://facebook.com/HUSTFootballClub",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "Sân vận động Bách khoa",
    achievements: ["Vô địch giải Bóng đá Sinh viên 2023"],
    partnersAndSponsors: ["Bách Khoa Sport", "BK Store"],
    type: ENTITY_TYPES.FOOTBALL,
  },
  {
    name: "Câu lạc bộ Truyền thông HUST Media",
    executive_board: {
      chairman: "Le Thi Ha",
      mentor: ["Nguyen Van Quan"],
    },
    description: `HUST Media là nơi hội tụ những bạn trẻ yêu thích chụp ảnh, quay phim, viết nội dung và tổ chức sự kiện truyền thông trong trường.`,
    numberOfMembers: 30,
    yearOfEstablishment: 2018,
    activities: [
      "Tổ chức các chiến dịch truyền thông sự kiện.",
      "Sản xuất video, ảnh sự kiện trong trường.",
      "Đào tạo thành viên mới về thiết kế, dựng phim.",
    ],
    criteria: [
      "Yêu thích truyền thông và sáng tạo nội dung.",
      "Có kỹ năng viết, thiết kế, chụp ảnh là một lợi thế.",
    ],
    belongTo: FACULTIES.SOFH,
    contact: "media.club@sofl.edu.vn",
    image: media_club_image,
    gallery: [media_club_image],
    website: "#",
    socialMediaLinks: {
      facebook: "https://facebook.com/HUSTMediaClub",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "C3-205",
    achievements: ["Top 3 CLB truyền thông toàn HUST năm 2024"],
    partnersAndSponsors: ["BK Media Hub", "HUST Press"],
    type: ENTITY_TYPES.MEDIA,
  },
  {
    name: "Câu lạc bộ Nghệ thuật HUST Art Club",
    executive_board: {
      chairman: "Nguyen Thi Cam Tu",
      mentor: ["Hoang Van Minh", "Le Thu Trang"],
    },
    description: `HUST Art Club là sân chơi cho các bạn sinh viên đam mê hội hoạ, vẽ tay, vẽ digital, thiết kế sáng tạo và các loại hình nghệ thuật thị giác.`,
    numberOfMembers: 28,
    yearOfEstablishment: 2016,
    activities: [
      "Vẽ tranh tường cho các sự kiện lớn trong trường.",
      "Tổ chức workshop về thiết kế và sáng tạo nghệ thuật.",
      "Triển lãm tranh và sản phẩm nghệ thuật của thành viên.",
    ],
    criteria: [
      "Có đam mê nghệ thuật.",
      "Muốn phát triển tư duy sáng tạo và kỹ năng thiết kế.",
    ],
    belongTo: FACULTIES.FED,
    contact: "art.club@fed.edu.vn",
    image: art_club_image,
    gallery: [art_club_image],
    website: "#",
    socialMediaLinks: {
      facebook: "https://facebook.com/HUSTArtClub",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "D2-302",
    achievements: ["Top 3 cuộc thi thiết kế sáng tạo 2023"],
    partnersAndSponsors: ["BK ArtSpace", "Graphic Design Center"],
    type: ENTITY_TYPES.ART,
  },
  {
    name: "Câu lạc bộ Văn hoá HUST Culture Club",
    executive_board: {
      chairman: "Doan Thi Lan",
      mentor: ["Nguyen Van Huy"],
    },
    description: `HUST Culture Club là nơi kết nối sinh viên yêu văn hóa Việt Nam và quốc tế thông qua các hoạt động truyền thống, giao lưu, trình diễn và lễ hội.`,
    numberOfMembers: 50,
    yearOfEstablishment: 2015,
    activities: [
      "Tổ chức các buổi giới thiệu văn hóa truyền thống.",
      "Tổ chức lễ hội đa văn hóa và Ngày hội quốc tế.",
      "Hợp tác với các tổ chức giao lưu sinh viên quốc tế.",
    ],
    criteria: [
      "Quan tâm đến văn hóa và hoạt động ngoại khóa.",
      "Yêu thích tổ chức sự kiện và giao lưu quốc tế.",
    ],
    belongTo: FACULTIES.SOFL,
    contact: "culture.club@sofl.edu.vn",
    image: culture_club_image,
    gallery: [culture_club_image],
    website: "#",
    socialMediaLinks: {
      facebook: "https://facebook.com/HUSTCultureClub",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      linkedin: "#",
      github: "#",
      discord: "#",
      telegram: "#",
    },
    location: "C3-301",
    achievements: ["CLB tổ chức Ngày hội Văn hóa Quốc tế 2023"],
    partnersAndSponsors: [
      "HUST Language Center",
      "International Student Office",
    ],
    type: ENTITY_TYPES.CULTURE,
  },
];
