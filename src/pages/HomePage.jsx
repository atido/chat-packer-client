import { Box, Button, Container, Spinner, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import Thread from "../components/Thread";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [conversation, setConversation] = useState([
    { isBot: true, message: "Bonjour je suis le bot", id: "1" },
    { isBot: false, message: "Bonjour Mr le Bot", id: "2" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };
  return (
    <Container maxW="3xl">
      <Box id="chat-container">
        {conversation?.map((el) => (
          <Thread key={el.id} message={el.message} isBot={el.isBot} id={el.id} />
        ))}
        {loading && <Spinner />}
      </Box>
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center" w="100%" p={4} borderWidth="1px" borderRadius="md">
          <Textarea
            value={message}
            placeholder="Send a message"
            onChange={(e) => setMessage(e.target.value)}
            resize="none"
            size="minimum"
            variant="no-border"
          />
          <Button size="xs" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}
