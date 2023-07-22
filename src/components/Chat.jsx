import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import "./Card.css";
import "./Chat.css";

import Loader from "./Loader";
import Thread from "./Thread";

import FlightCard from "./FlightCard"
import AccomCard from "./AccomCard"
import TripCard from "./TripCard"

export default function Chat() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const newConversation = [
      ...conversation,
      { id: crypto.randomUUID(), role: "user", content: message },
    ];
    setConversation(newConversation);
    setMessage("");
    sendConversation(newConversation);
  };

  const sendConversation = async (newConversation) => {
    setIsLoading(true);
    const conversationForChatService = newConversation.map((el) => ({
      role: el.role,
      content: el.content,
    }));
    await fetch(`${import.meta.env.VITE_BACKEND_HOST}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversation: conversationForChatService }),
    })
      .then((response) => response.json())
      .then((data) => {
        setConversation([
          ...newConversation,
          {
            content: data.content,
            role: data.role,
            id: crypto.randomUUID(),
          },
        ]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="chat">
      <div className="chat__container">
        {conversation?.map((el) => (
          <Thread
            key={el.id}
            id={el.id}
            message={el.content}
            isAssistant={el.role === "assistant"}
          />
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
              <button type="submit">
                <Icon className="chat__submit" icon="fe:paper-plane" />
              </button>
            ) : (
              <Loader />
            )}
          </div>
        </form>

        <AccomCard/>
        <FlightCard/>
        {/* <TripCard/> */}
      </div>
    </div>
  );
}
