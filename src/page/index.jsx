import React from "react";
import Login from "./Login";
import ToDo from "./ToDo";
import TodoView from "./ToDoView";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/to-do" element={<ToDo />} />
      <Route path="/view" element={<TodoView />} />
    </Routes>
  );
};

export default AppRouter;

