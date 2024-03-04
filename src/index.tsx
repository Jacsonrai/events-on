import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MapLayout from "./component/map/maplayout";
import useWindowDimensions from "./hooks/useWindowDimension";
const App = () => {
  const { height } = useWindowDimensions();
  return (
    <div style={{ height: height }}>
      <MapLayout />
    </div>
  );
};
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
