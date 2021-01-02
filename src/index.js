import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import congigureStore from "./components/redux/configureStore";
import { provider } from "react-redux";

const store = congigureStore();
render(
  <provider store={store}>
    <Router>
      <App />
    </Router>
  </provider>,
  document.getElementById("app")
);
