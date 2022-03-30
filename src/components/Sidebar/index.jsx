import React from "react";
import { ImUsers } from "react-icons/im";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="title-side">System</h1>
      <div className="container-list">
        <ImUsers className="icon-user" />
        <Link to="/to-do" className="underline">
          <span className="title-users">Users</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
