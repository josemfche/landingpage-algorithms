import React from "react";
import "../Hero.css";
const Hero = () => {
  return (
    <div className="hero hero-text">
      <div>
        <h2>Be Smart Take Card</h2>
        <p>
          When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and
          close the topnav (.icon)
        </p>
        <button className="hero-button">Apply for Card</button>
      </div>
    </div>
  );
};

export default Hero;
