// components/Header.jsx
"use client";
import Expand from "../Icons/Expand";
import X from "../Icons/X";

/**
 * Header component displays the header of the chat interface, including title,
 * close button, and expand/collapse button.
 *
 * @component
 * @param {boolean} isExpanded - Indicates whether the chat interface is expanded.
 * @param {function} setIsExpanded - Callback function to toggle the expansion state.
 */
const Header = ({ isExpanded, setIsExpanded }) => {
  // Add a function to close the chatbot
  const handleClose = () => {
    // Send message to parent window to close the chatbot
    window.parent.postMessage({ type: "closeChatbot" }, "*");
  };

  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200  bg-[#093154] text-zinc-100">
      <div className="flex items-center">
        {/* <img src="././dist/logo_placeholder.jpg" alt="logo" className="w-auto h-6" /> */}
        <p className="ml-2">Corpus Christi Chatbot</p>
      </div>
      <div className="flex items-center space-x-2">
        {/* Close button */}
        <button
          className="hover:text-gray-600 hover:cursor-pointer hover:bg-zinc-100 p-1"
          onClick={handleClose}
          aria-label="Close chatbot"
        >
          <X />
        </button>

        {/* Expand button */}
        <button
          className="hover:text-gray-600 hover:cursor-pointer hover:bg-zinc-100 p-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Expand />
        </button>
      </div>
    </div>
  );
};

export default Header;