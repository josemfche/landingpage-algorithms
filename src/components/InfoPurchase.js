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
            Tap to pay with Visa for a chance to win $25,000 for you and $25,000 for your favorite small business. No Purchase Necessary. Open to
            U.S., 18+. Ends 6/30/21. Click the arrow above to find out more.
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
