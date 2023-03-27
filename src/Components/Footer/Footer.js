import React from "react";
import "./Footer.css";
import Logo from "../../Images/LoginImage.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div>
          <img src={Logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-text">
          <div className="logo-name">
            <p>
              Rental<span>Go</span>
            </p>
          </div>
          <div>
            <Link to="/howitworks">How it Works</Link>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="footer-text">
          <div>
            <p>Hosting</p>
          </div>
          <div>
            <Link to="/host">List your car</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="made-by">
        <p>Made by Mohamad agag</p>
      </div>
    </div>
  );
}
