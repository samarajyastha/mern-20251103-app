import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import Router from "./Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
