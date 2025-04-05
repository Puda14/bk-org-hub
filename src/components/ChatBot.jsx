import { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bot, Send } from "lucide-react";

export default function ChatBot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào, tôi là nhân viên hỗ trợ tìm kiếm CLB và Lab của Đại học Bách khoa Hà Nội 🤖",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: "Cảm ơn bạn đã đặt câu hỏi. Mình sẽ sớm hỗ trợ bạn nhé!",
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed bottom-0 right-0 m-4 w-full max-w-xl">
        <Dialog.Panel className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="bg-red-600 text-white px-5 py-4 font-semibold text-lg">
            Chat với HUST Bot
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 text-base bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-lg ${msg.sender === "user"
                    ? "bg-red-100 text-red-800"
                    : "bg-white border border-gray-300 text-gray-800"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-gray-500 text-sm italic">Đang nhập...</div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex border-t bg-white px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="flex-1 px-4 py-2 text-base border rounded-md border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-2 px-4 text-red-600 hover:text-red-800"
            >
              <Send size={22} />
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
