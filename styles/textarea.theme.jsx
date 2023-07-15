import { defineStyleConfig } from "@chakra-ui/react";

const Textarea = defineStyleConfig({
  sizes: {
    minimum: {
      height: 5,
      fontSize: "1rem",
      minHeight: 0,
      padding: 0,
    },
  },

  variants: {
    "no-border": {
      borderRadius: 0,
      background: "transparent",
    },
  },
});
export default Textarea;
