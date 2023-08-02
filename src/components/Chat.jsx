import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import myaxios from "../../myaxios";
import "./Chat.css";
import DynamicComponent from "./DynamicComponent";
import Loader from "./Loader";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMessageInputEmpty = message.trim() === "";

  useEffect(() => {
    const initConversation = async () => {
      myaxios
        .post(`${import.meta.env.VITE_BACKEND_HOST}/api/chat/events`, {
          type: "INIT",
        })
        .then((response) => setConversation(response.data))
        .catch((err) => setErrorMessage(err.message));
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
    setErrorMessage("");

    myaxios
      .post(`${import.meta.env.VITE_BACKEND_HOST}/api/chat/events`, {
        type: "MESSAGE",
        message,
      })
      .then((response) => setConversation(response.data))
      .catch((err) => {
        setErrorMessage(err.message);
      })
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
