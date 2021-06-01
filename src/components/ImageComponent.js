import React from "react";
import CreditCard from "../../public/creditcard.png";
import "../components/css/ImageComponent.css";

const ImageComponent = () => {
  return (
    <div className="image-div">
      <img src={CreditCard}></img>
    </div>
  );
};

export default ImageComponent;
