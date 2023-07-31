import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import "./Chat.css";
import DynamicComponent from "./DynamicComponent";
import Loader from "./Loader";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMessageInputEmpty = message.trim() === "";

  useEffect(() => {
    const initConversation = async () => {
      await fetch(`${import.meta.env.VITE_BACKEND_HOST}/api/chat`)
        .then((response) => response.json())
        .then((json) => setConversation(json))
        .catch((err) => console.log(err));
    };
    initConversation();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!isMessageInputEmpty) handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setMessage("");

    await fetch(`${import.meta.env.VITE_BACKEND_HOST}/api/chat/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversation, type: "MESSAGE", params: { message } }),
    })
      .then((response) => response.json())
      .then((data) => {
        setConversation(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="chat">
      <div className="chat__container">
        {conversation?.map((el) => (
          <DynamicComponent key={el.id} element={el} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="chat__message-zone">
          <textarea
            className="chat__message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            name="message"
            id="message"
            cols="1"
            rows="1"
            placeholder="Send a message"
          />

          {!isLoading ? (
            <button
              type="submit"
              disabled={isMessageInputEmpty}
              className={`chat__submit-btn btn btn--primary ${
                isMessageInputEmpty ? "btn--disabled" : ""
              }`}
            >
              <Icon className="chat__submit-icon" icon="fe:paper-plane" />
            </button>
          ) : (
            <Loader />
          )}
        </div>
      </form>
    </div>
  );
}
