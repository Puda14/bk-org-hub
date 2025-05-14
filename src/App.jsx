import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage"; // Trang chủ mới (MainSection cũ được điều chỉnh)
import ClubDetailPage from "./pages/ClubDetailPage"; // Trang chi tiết CLB/Lab mới
import SuggestionPage from "./pages/SuggestionPage"; // Trang gợi ý mới
// Các import khác nếu cần

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clubs/:clubId" element={<ClubDetailPage />} />
            <Route path="/suggest" element={<SuggestionPage />} />
            {/* <Route path="/404" element={<NotFoundPage />} /> */}
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
