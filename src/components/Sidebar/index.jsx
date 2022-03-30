import React from "react";
import { ImUsers } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="title-side">System</h1>
      <div className="container-list">
        <ImUsers className="icon-user" />
        <span className="title-users">Users</span>
      </div>
    </div>
  );
};

export default Sidebar;
