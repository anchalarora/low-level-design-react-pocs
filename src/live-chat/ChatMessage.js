import "./LiveChat.css";

const ChatMessage = ({ name, photo, message }) => {
  return (
    <div className="chat-message-container">
      <img className="user-image" src={photo} alt="user" />
      <div className="message-container">
        <p>{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};
export default ChatMessage;
