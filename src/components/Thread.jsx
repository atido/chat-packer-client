import { Box, useStyleConfig } from "@chakra-ui/react";

export default function Thread({ id, isBot, message }) {
  const styles = useStyleConfig("Thread", { variant: isBot ? "bot" : "user" });
  return (
    <Box __css={styles}>
      <Box display="flex" p={4}>
        <div className="profile">
          <img src={`${isBot ? "public/avatarBot.png" : "user"}`} alt={`${isBot ? "bot" : "user"}`} />
        </div>
        <div className="message" id={id}>
          {message}
        </div>
      </Box>
    </Box>
  );
}
