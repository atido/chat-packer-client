import { extendTheme } from "@chakra-ui/react";
import Textarea from "./textarea.theme";
import Thread from "./thread.theme";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const cyan100Rgb = hexToRgb("#C4F1F9");

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
      500: "6FAAC1",
      600: "F8FDFF",
    },
  },
  fonts :{
    body: "Lato, sans-serif",
    heading: "Pacifico, sans-serif",
  },
  components: {
    Textarea,
    Thread,
    Heading: {
      baseStyle: {
        color: "white",
        margin: {
          base: "16px auto",
          md: "80px auto"
        }
        
      }
    },
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
        "primrary-btn": {
          border: "none",
          boxShadow: "none",
          bg: "cyan.800",
          color: "white",
          _hover: {
            backgroundColor: "cyan.700",
          },
        },
        "secondary-btn": {
          border: "1px solid",
          borderColor: "cyan.900",
          boxShadow: "none",
          bg: `rgba(${cyan100Rgb.r}, ${cyan100Rgb.g}, ${cyan100Rgb.b}, 0.7)`,
          color: "cyan.900",
          _hover: {
            bg: `rgba(${cyan100Rgb.r}, ${cyan100Rgb.g}, ${cyan100Rgb.b}, 0.9)`,
            color: "cyan.800",
            borderColor: "cyan.800"
          },
        },
      },
      // 4. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
        variant: "solid", // default is solid
        colorScheme: "Cyan", // default is gray
      },
    },
  },
});

export default theme;
