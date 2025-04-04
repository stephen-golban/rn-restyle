import { useTheme as useRestyleTheme } from "rn-restyle";

export const theme = {
  colors: {
    primary: "#000000",
    secondary: "#000000",
    tertiary: "#000000",
    quaternary: "#000000",
    quinary: "#000000",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  borderRadii: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  textVariants: {
    h1: {
      fontSize: 32,
      fontWeight: "bold",
    },
  },
  fontFamily: {
    regular: "Roboto-Regular",
    bold: "Roboto-Bold",
    italic: "Roboto-Italic",
    boldItalic: "Roboto-BoldItalic",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
} as const;

export type Theme = typeof theme;

export const useTheme = () => {
  return useRestyleTheme<Theme>();
};
