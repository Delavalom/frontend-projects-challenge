import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SelectionProvider } from "./context/SelectionContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SelectionProvider>
      <App />
    </SelectionProvider>
  </React.StrictMode>
);
