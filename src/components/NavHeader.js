import React from "react";
import "../components/css/NavHeader.css";
import { Link } from "react-router-dom";
import logopng from "../../public/visalogo-min.png";

const NavHeader = () => {
  return (
    <nav className="nav">
      <div className="nav-left nav-text">
        <img src={logopng}></img>
      </div>
      <div className="nav-center nav-text">
        <Link to="/users">
          <a className="">Your Clients</a>
        </Link>
      </div>
      <div className="nav-right nav-text">
        <a className="">Disabled</a>
      </div>
    </nav>
  );
};

export default NavHeader;
