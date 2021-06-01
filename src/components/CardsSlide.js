import React from "react";
import "../components/css/CardsSlide.css";
import creditcardmini from "../../public/creditcardmini.png";
import notebook2 from "../../public/notebook2.png";
import notebooks1 from "../../public/notebooks1.png";

const CardsSlide = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <img src={notebook2} className="card-icon"></img>
          <h3 className="card-title">Get An Aprobal</h3>
          <p className="card-text">Visa Inc. es una multinacional de servicios financieros con sede en Foster City, California, Estados Unidos.​</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img src={creditcardmini} className="card-icon"></img>
          <h3 className="card-title">Get An Aprobal</h3>
          <p className="card-text">Visa Inc. es una multinacional de servicios financieros con sede en Foster City, California, Estados Unidos.​</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img src={notebooks1} className="card-icon"></img>
          <h3 className="card-title">Get An Aprobal</h3>
          <p className="card-text">Visa Inc. es una multinacional de servicios financieros con sede en Foster City, California, Estados Unidos.​</p>
        </div>
      </div>
    </div>
  );
};

export default CardsSlide;
