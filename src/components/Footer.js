import React from "react";
import "../components/css/Footer.css";
import logopng from "../../public/gradientvisa.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col-1">
          <ul className="">
            <h4>PRODUCER</h4>
            <li>
              <a href="#">Staff Person</a>
            </li>
            <li>
              <a href="#">Staff Person</a>
            </li>
            <li>
              <a href="#">Staff Person</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-2">
          <ul className="">
            <h4>DEVELOPER</h4>
            <li>
              <a href="#">Staff Person</a>
            </li>
            <li>
              <a href="#">Staff Person</a>
            </li>
            <li>
              <a href="#">Staff Person</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-3">
          <ul className="">
            <h4>COMPANY</h4>
            <li>
              <a href="#">Staff Person</a>
            </li>
            <li>
              <a href="#">Staff Person</a>
            </li>
            <li>
              <a href="#">Staff Person</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-4">
          <img src={logopng}></img>
        </div>
        <div className="footer-bottom">
          <h3 className="insta">Instagram</h3>
          <h3 className="face">Facebook</h3>
          <h3 className="twitter">Twitter</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
