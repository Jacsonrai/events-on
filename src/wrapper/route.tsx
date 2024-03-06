import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/home";
const EVRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default EVRoute;
