import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Login from "../page/auth/login";
const EVRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default EVRoute;
