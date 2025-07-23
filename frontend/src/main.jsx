import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootApp from "./App.jsx"; // Change import to RootApp
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//rootapp is rendered here
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RootApp /> 
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);