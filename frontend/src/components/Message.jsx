// components/Message.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { memo } from "react";

/**
 * Message component displays a single chat message, handling different message types
 * and rendering markdown content.
 *
 * @component
 * @param {string} messageType - The type of the message ('ai' or 'user').
 * @param {string} message - The message content.
 */
const Message = ({ messageType, message }) => {
  // Remove bracketed annotations like 【some text】 from the message
  const cleanedMessage = message.replace(/【[^】]+】/g, '');

  return (
    <div
      className={`px-4 py-3 text-[14px] flex flex-col gap-3 ${
        messageType === "ai"
          ? "bg-gradient-to-t from-white to-gray-50 w-9/10 animate-slide-in-left shadow-lg border-t-2 border-gray-50"
          : "bg-[#093154] text-white w-fit max-w-9/10 ml-auto break-words animate-slide-in-right shadow-md"
      }`}
    >
      {messageType === "ai" && (
        <div className="flex items-center gap-3 font-medium">
          <span className="overline decoration-[#f7941d]">
            AI
          </span>
        </div>
      )}
      <div className='react-markdown'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{cleanedMessage}</ReactMarkdown>
      </div>
    </div>
  );
};

export default memo(Message);