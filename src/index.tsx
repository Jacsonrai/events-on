import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./page/home";
const App = () => {
  return <Home />;
};
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
