import Videostream from "./VideoStream";
import ChatWindow from "./ChatWindow";
import "./LiveChat.css";

const LiveChat = () => {
  return (
    <div className="live-chat-container">
      <Videostream />
      <ChatWindow />
    </div>
  );
};

export default LiveChat;
