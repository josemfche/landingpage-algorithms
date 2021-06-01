import React from "react";
import "./App.css";
import NavHeader from "./components/NavHeader";
import Hero from "./components/Hero";
import ImageComponent from "./components/ImageComponent";
import InfoComp1 from "./components/InfoComp1";
import InfoComp2 from "./components/InfoComp2";
import CardsSlide from "./components/CardsSlide";
import InfoPurchase from "./components/InfoPurchase";

const App = () => (
  <div className="main">
    <div className="shape">
      <div className="container">
        {/*  <div class="custom-shape-divider-bottom-1622509366">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
          </svg>
        </div> */}
        <NavHeader />
        <Hero />
        <ImageComponent />
        <InfoComp1 />
        <CardsSlide />
        <InfoPurchase />
        <InfoComp2 />
      </div>
    </div>
  </div>
);

export default App;
