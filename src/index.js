import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import blue from "material-ui/colors/blue";
import green from "material-ui/colors/green";
import store, { history } from "./store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import "normalize.css";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  status: {
    danger: "orange"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
