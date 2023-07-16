import { defineStyleConfig } from "@chakra-ui/react";

const Thread = defineStyleConfig({
  baseStyle: {
    my: "20px"
  },
  variants: {
    user: {
      bg: "white",
      borderRadius: "30px 30px 0px 30px",
      border: "1px solid #F0A944",
      background: "rgba(255, 251, 239, 0.75)",
      boxShadow: "0px 2px 4px 0px rgba(31, 57, 55, 0.26)",
      backdropFilter: "blur(2px)",
      marginLeft: "50px",
    },
    bot: {
      bg: "gray.50",
      borderRadius: "30px 30px 30px 0px",
      background: "rgba(206, 163, 100, 0.85)",
      boxShadow: "0px 2px 4px 0px rgba(31, 57, 55, 0.26)",
      backdropFilter: "blur(2px)",
      marginRight: "50px",

    },
  },
  defaultProps: {
    variant: "user",
  },
});

export default Thread;
