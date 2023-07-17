import { Icon } from "@iconify/react";
import { useState } from "react";
import "./Chat.css";
import Thread from "./Thread";

export default function Chat({ conversationFromApi }) {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState(conversationFromApi);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConversation([...conversation, { id: crypto.randomUUID(), role: "user", content: message }]);
    setMessage("");
    sendConversation();
  };

  const sendConversation = async () => {
    setIsLoading(true);
    const conversationForChatService = conversation.map((el) => ({
      role: el.role,
      content: el.content,
    }));
    await fetch("http://localhost:5005/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversation: conversationForChatService }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setConversation([
          ...conversation,
          {
            content: data.content,
            role: data.role,
            id: crypto.randomUUID(),
          },
        ]);
        setIsLoading(false);
      });
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
              name="message"
              id="message"
              cols="1"
              rows="1"
              placeholder="Send a message"
            />

            <button type="submit" disabled={isLoading}>
              <Icon icon="fe:paper-plane" color="#406B7D" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
