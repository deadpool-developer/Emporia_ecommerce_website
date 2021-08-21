import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StateProvider } from "./StateProvider";
import reducer, { intialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider intialState={intialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
