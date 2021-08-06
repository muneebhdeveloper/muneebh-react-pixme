import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@material-ui/core";

const customTheme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#C1272D",
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    button: {
      textTransform: "initial",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <Provider store={Store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
