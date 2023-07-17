import "./Thread.css";

export default function Thread({ id, message, isAssistant }) {
  return (
    <div className={`thread ${isAssistant ? "thread--assistant" : "thread--user"}`}>
      {isAssistant && (
        <img className="thread__avatar" src="avatar-assistant.png" alt="assistant avatar" />
      )}
      <div className="thread__message" id={id}>
        {message}
      </div>
    </div>
  );
}
