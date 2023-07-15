import { extendTheme } from "@chakra-ui/react";
import Textarea from "./textarea.theme";
import Thread from "./thread.theme";

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      },
      "html, body": {
        backgroundColor: "#343541",
      },
    },
  },
  colors: {
    brand: {
      500: "#f7fafc",
      // ...
      600: "#1a202c",
    },
  },
  components: {
    Textarea,
    Thread,
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          boxShadow: "0 0 2px 2px #efdfde",
          bg: "teal.500",
          _hover: {
            color: "white",
            backgroundColor: "teal.700",
          },
        },
        // 4. We can override existing variants
        solid: () => ({
          boxShadow: "0 0 2px 2px #efdfde",
        }),
        // 5. We can add responsive variants
        sm: {
          bg: "teal.500",
          fontSize: "md",
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
        variant: "solid", // default is solid
        colorScheme: "green", // default is gray
      },
    },
  },
});

export default theme;
