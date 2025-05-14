// src/components/ChatBot.jsx
import { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bot, Send, Info } from "lucide-react"; // Thêm Info icon

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Các câu hỏi tương ứng với các trường trong API body
const questions = [
  { key: "fullName", label: "Họ và tên của bạn là gì?" },
  { key: "personalEmail", label: "Địa chỉ email cá nhân của bạn?" },
  {
    key: "schoolEmail",
    label: "Địa chỉ email trường cấp (ví dụ: nva@soict.hust.edu.vn)?",
  },
  { key: "studentId", label: "Mã số sinh viên của bạn?" },
  { key: "course", label: "Bạn học khóa mấy (ví dụ: K66, K67)?" },
  {
    key: "school",
    label:
      "Bạn thuộc trường/viện nào (ví dụ: Trường Công nghệ Thông tin và Truyền thông)?",
  },
  {
    key: "major",
    label: "Chuyên ngành của bạn là gì (ví dụ: Khoa học Máy tính)?",
  },
  { key: "class", label: "Lớp của bạn (ví dụ: CNTT2)?" },
  {
    key: "techSkills",
    label:
      "Hãy liệt kê các kỹ năng chuyên môn của bạn (ví dụ: Lập trình Python, AI, Data Science)?",
  },
  {
    key: "softSkills",
    label: "Kỹ năng mềm của bạn là gì (ví dụ: Làm việc nhóm, thuyết trình)?",
  },
  { key: "careerGoals", label: "Định hướng nghề nghiệp của bạn là gì?" },
  {
    key: "achievements",
    label:
      "Bạn có thành tựu nổi bật nào không (ví dụ: Giải Ba cuộc thi AI Hackathon)? Nếu không có, bạn có thể ghi 'Không có'.",
  },
  {
    key: "languageSkills",
    label:
      "Trình độ ngoại ngữ của bạn như thế nào (ví dụ: Tiếng Anh IELTS 6.5)? Nếu không có, bạn có thể ghi 'Không có'.",
  },
];

export default function ChatBot({ isOpen, onClose, onShowClubDetail }) {
  // Thêm onShowClubDetail
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào, tôi là HUST Bot. Tôi có thể giúp bạn tìm kiếm CLB/Lab phù hợp dựa trên một vài thông tin. Hãy bắt đầu nhé!",
    },
    { sender: "bot", text: questions[0].label }, // Hỏi câu đầu tiên
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef();

  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() && currentStep < questions.length) return; // Chỉ return nếu đang trong quá trình hỏi và input rỗng

    const userInputText = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userInputText }]);
    setInput("");

    if (currentStep < questions.length) {
      setUserData((prev) => ({
        ...prev,
        [questions[currentStep].key]: userInputText,
      }));
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      if (nextStep < questions.length) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: questions[nextStep].label },
        ]);
      } else {
        // Đã hỏi đủ thông tin, gọi API
        setIsTyping(true);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Cảm ơn bạn đã cung cấp thông tin. Tôi đang tìm kiếm gợi ý phù hợp...",
          },
        ]);
        try {
          setIsLoadingSuggestions(true);
          const response = await fetch(`${API_BASE_URL}/suggest`, {
            // Sửa endpoint
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...userData,
              [questions[currentStep].key]: userInputText,
            }), // Gửi cả câu trả lời cuối cùng
          });
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.message || `HTTP error! status: ${response.status}`
            );
          }
          const data = await response.json();
          setSuggestions(data.suggestions || []);
          if (data.suggestions && data.suggestions.length > 0) {
            setMessages((prev) => [
              ...prev,
              {
                sender: "bot",
                text: "Dưới đây là một số CLB/Lab có thể phù hợp với bạn. Bạn có thể nhấn vào tên để xem chi tiết:",
                suggestions: data.suggestions, // Gắn suggestions vào tin nhắn của bot
              },
            ]);
          } else {
            setMessages((prev) => [
              ...prev,
              {
                sender: "bot",
                text: "Rất tiếc, tôi không tìm thấy gợi ý nào phù hợp dựa trên thông tin bạn cung cấp.",
              },
            ]);
          }
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: `Đã có lỗi xảy ra khi tìm kiếm gợi ý: ${error.message}. Vui lòng thử lại sau.`,
            },
          ]);
        } finally {
          setIsTyping(false);
          setIsLoadingSuggestions(false);
        }
      }
    }
    // Nếu đã có suggestions, không xử lý input nữa (hoặc có thể thêm logic reset)
  };

  const handleSuggestionClick = (clubId) => {
    if (onShowClubDetail) {
      onShowClubDetail(clubId); // Gọi hàm từ MainSection để hiển thị chi tiết
    }
  };

  const resetChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Chào bạn! Hãy cùng tìm CLB/Lab phù hợp nhé. Bắt đầu lại nào!",
      },
      { sender: "bot", text: questions[0].label },
    ]);
    setCurrentStep(0);
    setUserData({});
    setSuggestions([]);
    setInput("");
    setIsTyping(false);
    setIsLoadingSuggestions(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, suggestions]);

  useEffect(() => {
    // Reset khi đóng mở dialog
    if (isOpen) {
      resetChat();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed bottom-0 right-0 m-4 w-full max-w-xl">
        <Dialog.Panel className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col max-h-[90vh]">
          <div className="bg-red-600 text-white px-5 py-4 font-semibold text-lg flex justify-between items-center">
            Chat với HUST Bot
            <button
              onClick={resetChat}
              className="text-xs bg-red-700 hover:bg-red-800 px-2 py-1 rounded"
            >
              Bắt đầu lại
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 text-base bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-red-100 text-red-800"
                      : "bg-white border border-gray-300 text-gray-800"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  {/* Hiển thị suggestions nếu có */}
                  {msg.sender === "bot" &&
                    msg.suggestions &&
                    msg.suggestions.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {msg.suggestions.map((suggestion) => (
                          <div
                            key={suggestion._id}
                            className="p-3 bg-red-50 rounded-md border border-red-200"
                          >
                            <button
                              onClick={() =>
                                handleSuggestionClick(suggestion._id)
                              }
                              className="font-semibold text-red-700 hover:underline text-left w-full"
                            >
                              {suggestion.name}
                            </button>
                            <p className="text-xs text-gray-600 mt-1">
                              {suggestion.reason}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            ))}
            {isTyping && ( // Hiển thị isTyping hoặc isLoadingSuggestions
              <div className="text-gray-500 text-sm italic">
                {isLoadingSuggestions
                  ? "Đang tìm kiếm gợi ý..."
                  : "Đang nhập..."}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="flex border-t bg-white px-4 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                currentStep < questions.length
                  ? "Nhập câu trả lời..."
                  : "Chat đã kết thúc, nhấn 'Bắt đầu lại' để hỏi lại."
              }
              className="flex-1 px-4 py-2 text-base border rounded-md border-gray-300 focus:outline-none"
              disabled={
                currentStep >= questions.length && suggestions.length > 0
              } // Disable input khi đã có gợi ý
            />
            <button
              type="submit"
              className="ml-2 px-4 text-red-600 hover:text-red-800 disabled:text-gray-400"
              disabled={
                currentStep >= questions.length && suggestions.length > 0
              }
            >
              <Send size={22} />
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
