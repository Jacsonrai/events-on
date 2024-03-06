import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./page/home";
import { BrowserRouter } from "react-router-dom";
import EVRoute from "./wrapper/route";
const App = () => {
  return (
    <BrowserRouter>
      <EVRoute />
    </BrowserRouter>
  );
};
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
