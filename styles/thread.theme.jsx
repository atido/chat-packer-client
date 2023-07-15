import { defineStyleConfig } from "@chakra-ui/react";

const Thread = defineStyleConfig({
  baseStyle: {
    borderBottom: "1px solid",
    borderColor: "gray.800",
  },
  // Two variants: user and bot
  variants: {
    user: {
      bg: "white",
    },
    bot: {
      bg: "gray.50",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "user",
  },
});

export default Thread;
