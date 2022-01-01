import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src="/images/Foodmandu-logo1.png"
        alt="Foodmandu-Logo"
      />
      <button className="navbar__btn">Login</button>
    </div>
  );
}

export default Navbar;
