import React from "react";
import ListUser from "../../components/ListUser";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const ToDo = () => {
  return (
    <div className="container-bg-todo">
      <div className="container-sider">
        <Sidebar />
        <div className="container-content">
          <Navbar />
          <ListUser />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
