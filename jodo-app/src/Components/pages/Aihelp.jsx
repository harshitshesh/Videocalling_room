import React from "react";
import { useState, useRef, useEffect } from "react";

const Aihelp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);
  const apiKey = "AIzaSyBgC6d63dbi1t0D1QvXNhELLvk6-a8qEiA";

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  const displayMessage = (text, sender, isLoading = false) => {
    setMessages((prev) => [
      ...prev,
      { text, sender, isLoading }
    ]);
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    displayMessage(trimmed, "user");
    setInput("");
    displayMessage("Thinking...", "bot", true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: trimmed }] }],
          }),
        }
      );

      const data = await res.json();
      setMessages((prev) =>
        prev.filter((msg) => !(msg.sender === "bot" && msg.isLoading))
      );

      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm sorry, I couldn't understand that.";
      displayMessage(botReply, "bot");
    } catch (err) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.isLoading ? { ...msg, text: "Something went wrong." } : msg
        )
      );
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-[#00020b] to-[#c05ac5] flex items-center justify-center p-2">
      <div className="w-full max-w-4xl h-[90vh] bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        <div
          ref={chatBoxRef}
          className="flex-1 overflow-y-auto p-5 space-y-3"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={` p-3  break-words ${
                msg.sender === "user"
                  ? "self-end bg-blue-[#c05bc2] rounded-3xl text-blue-200"
                  : `self-start ${
                      msg.isLoading
                        ? "italic text-gray-500"
                        : " text-white shadow"
                    }`
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/30 flex flex-col sm:flex-row gap-3 bg-white/10 items-center">
          <input
            type="text"
            className="flex-1 px-4 py-5 rounded-2xl bg-white/30 text-dark placeholder-dark/70 focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="px-6 py-2 rounded-2xl h-10 bg-orange-300 text-dark font-semibold hover:bg-green-200 hover:scale-105 transition-all duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aihelp;
