import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

// Supports weights 100-700
import "@fontsource-variable/roboto-mono";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
