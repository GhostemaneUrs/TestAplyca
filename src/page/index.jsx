import React from "react";
import Login from "./Login";
import ToDo from "./ToDo";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/to-do" element={<ToDo />} />
    </Routes>
  );
};

export default AppRouter;

