import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from 'react-router-dom'
import Role from "./Role.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
     <Role/>
    </StrictMode>
  </BrowserRouter>
);
