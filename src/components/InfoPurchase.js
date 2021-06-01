import React from "react";
import "../components/css/InfoPurchase.css";
import posterminal from "../../public/pos-terminal.png";

const InfoPurchase = () => {
  return (
    <div className="purchase-container">
      <div className="col-1">
        {" "}
        <div className="info">
          <h2>Purchase Anywhere</h2>
          <p>
            When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open
            and close the topnav (.icon)
          </p>
          <button className="purchase-button">More information</button>
        </div>
      </div>
      <div className="col-2">
        <div className="phone">
          <div className="phone-screen">
            <img src={posterminal}></img>
            <h3>Swiping card...</h3>
          </div>
          <div className="phone-bottom">
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPurchase;
