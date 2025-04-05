// Constants for predefined values
const image = "https://hust.edu.vn/uploads/sys/news/2023_06/cbo_0362.jpg";

// Define the types of entities
const ENTITY_TYPES = {
  CLUB: "club",
  LAB: "lab",
};

// Define the faculties or departments
const FACULTIES = {
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
export const clubs = [
  {
    name: "Câu lạc bộ Sáng tạo Sinh viên (SINNO Club)",
    executive_board: {
      chairman: "Nguyen Binh An",
      mentor: ["Nguyen Van A", "Tran Thi B", "Le Van C"],
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
    belongTo: [FACULTIES.SOICT],
    contact: "sinno.soict@gmail.com",
    image,
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
    belongTo: [FACULTIES.SOICT],
    contact: "robotics.club@soict.edu.vn",
    image,
    gallery: [image, image, image],
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
    belongTo: [FACULTIES.SEM],
    contact: "economics.club@sem.edu.vn",
    image,
    gallery: [image, image, image],
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
    belongTo: [FACULTIES.SMSE],
    contact: "maker.club@smse.edu.vn",
    image,
    gallery: [image, image, image],
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
    belongTo: [FACULTIES.SOICT],
    contact: "ai.lab@soict.edu.vn",
    image,
    gallery: [image, image, image],
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
    belongTo: [FACULTIES.SOICT],
    contact: "blockchain.lab@soict.edu.vn",
    image,
    gallery: [image, image, image],
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
    belongTo: [FACULTIES.SEEE],
    contact: "applied.phys.lab@see.edu.vn",
    image,
    gallery: [image, image, image],
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
    belongTo: [FACULTIES.FAMI],
    contact: "data.science.lab@fami.edu.vn",
    image,
    gallery: [image, image, image],
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
    belongTo: [FACULTIES.SOICT],
    contact: "network.security.lab@soict.edu.vn",
    image,
    gallery: [image, image, image],
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
];
