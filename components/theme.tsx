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
      disabled: "#E8E8E8"
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#E93C3C",
    },
    warning: {
      main: "#E89806"
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Noto Sans", "sans-serif"].join(","),
  },
});

export default theme;
