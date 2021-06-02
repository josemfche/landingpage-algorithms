import React from "react";
import "../components/css/NavHeader.css";
import logopng from "../../public/visalogo-min.png";

const NavHeader = () => {
  return (
    <nav className="nav">
      <div className="nav-left nav-text">
        <img src={logopng}></img>
      </div>
      <div className="nav-center nav-text">
        <a className=""> Home </a>
      </div>
      <div className="nav-right nav-text">
        <a className="">Home</a>
      </div>
    </nav>
  );
};

export default NavHeader;
