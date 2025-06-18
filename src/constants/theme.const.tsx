import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121417", // основной фон
      paper: "#121417", // фон карточек, модалок и т.п.
    },
    common: {
      black: "#121417",
      white: "#ffffff",
    },
    primary: {
      main: "#DBE8F2", // цвет кнопок, активных элементов
      contrastText: "#121417", // текст на кнопках, если нужно тёмный
    },
    secondary: {
      main: "#2B3036", // цвет инпутов и т.п.
    },
    text: {
      primary: "#ffffff", // основной текст
      secondary: "#9CABBA", // вспомогательный текст
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h2: {
      fontSize: "32px",
    },
    h3: {
      fontSize: "28px",
    },
  },
  shape: {
    borderRadius: 12,
  },
});
