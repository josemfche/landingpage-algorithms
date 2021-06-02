import React from "react";
import { Link } from "react-router-dom";
import "../css/userscomponentscss/NavHeaderCM.css";

const NavHeader = () => {
  return (
    <nav className="navCM">
      <div className="nav-leftCM nav-textCM">
        <h1>Clients Manager</h1>
      </div>
      <div className="nav-rightCM nav-textCM">
        <a>
          <Link to="/">Back to Landing</Link>
        </a>
      </div>
    </nav>
  );
};

export default NavHeader;
