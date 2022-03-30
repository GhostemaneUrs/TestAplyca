import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container-dashboard">
        <GiHamburgerMenu className="icon-hambu"/>
        <span className="title-dashboard">Dashboard</span>
      </div>
      <div className="container-user">
        <div className="container-img"/>
        <span className="title-dashboard">Marlene Sasoeur</span>
      </div>
    </div>
  );
};

export default Navbar;
