import React from "react";
import "./App.css";
import NavHeader from "./components/NavHeader";
import NavHeaderCM from "./components/userscomponents/NavHeaderCM";
import Hero from "./components/Hero";
import ImageComponent from "./components/ImageComponent";
import InfoComp1 from "./components/InfoComp1";
import InfoComp2 from "./components/InfoComp2";
import CardsSlide from "./components/CardsSlide";
import InfoPurchase from "./components/InfoPurchase";
import Footer from "./components/Footer";

import Users from "./components/userscomponents/Users";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <div className="main">
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container-fluid">
            <div className="shape">
              <NavHeader />
              <div className="container">
                <Hero />
                <ImageComponent />
                <InfoComp1 />
                <CardsSlide />
                <InfoPurchase />
                <InfoComp2 />
              </div>
              <Footer />
            </div>
          </div>
        </Route>
        <Route exact path="/users">
          <div className="container-fluid">
            <NavHeaderCM />
            <div className="container">
              <Users />
            </div>
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
