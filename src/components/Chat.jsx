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
    initConversation();
  }, []);

  const initConversation = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_HOST}/api/chat`)
      .then((response) => response.json())
      .then((json) => setConversation(json))
      .catch((err) => console.log(err));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setMessage("");

    await fetch(`${import.meta.env.VITE_BACKEND_HOST}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversation: conversation, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("");
        setConversation(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="chat">
      <div className="chat__container">
        {conversation?.map((el) => (
          <DynamicComponent key={el.id} element={el} />
        ))}
        <form onSubmit={handleSubmit}>
          <div className="chat__messageZone">
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
    </div>
  );
}
