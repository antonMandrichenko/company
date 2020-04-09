import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4369F0",
    },
    text: {
      primary: "#000",
      secondary: "#A0A4A8",
      disabled: "#E8E8E8",
    },
    secondary: {
      main: "#2a3540",
    },
    error: {
      main: "#E93C3C",
    },
    warning: {
      main: "#E89806",
    },
    background: {
      paper: "#E5E5E5",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Noto Sans", "sans-serif"].join(","),
    h1: {
      fontSize: 98,
    },
    h2: {
      fontSize: 124,
      fontWeight: 500,
    },
    h3: {
      fontSize: 34,
      textTransform: "uppercase",
    },
    h4: {
      fontSize: 26,
      fontWeight: 500,
    },
    body1: {
      fontSize: 20,
      fontFamily: "Noto Sans",
    },
    body2: {
      fontSize: 15,
      fontFamily: "Noto Sans",
    },
    subtitle1: {
      fontSize: 38,
      fontFamily: "Noto Sans",
      lineHeight: 1.25,
    },
    subtitle2: {
      fontSize: 40,
      fontFamily: "Montserrat",
      lineHeight: 1.25,
      fontWeight: 500,
    },
  },
});

export default theme;
