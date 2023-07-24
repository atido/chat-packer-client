import "./Thread.css";

export default function Thread({ body }) {
  return (
    <div className={`thread ${body.role == "assistant" ? "thread--assistant" : "thread--user"}`}>
      {body.role == "assistant" && (
        <img className="thread__avatar" src="avatar-assistant.png" alt="assistant avatar" />
      )}
      <div className="thread__message">{body.content}</div>
    </div>
  );
}
