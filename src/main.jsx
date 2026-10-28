import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";
import "./components/utils/normalize.css";
import "./components/utils/fonts.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Final-project/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
