import React from "react";
import "../components/css/NavHeader.css";

const NavHeader = () => {
  return (
    <nav className="nav">
      <div className="nav-left nav-text">
        <a className="">Home</a>
      </div>
      <div className="nav-center nav-text">
        <a className=""> Home </a>
        <a className=""> Deudas </a>
      </div>
      <div className="nav-right nav-text">
        <a className="">Home</a>
      </div>
    </nav>
  );
};

export default NavHeader;
