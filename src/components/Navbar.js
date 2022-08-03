import React from "react";
import "../stylesheets/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-logos">
      <a href="/">
        <h1>NoStateNode</h1>
      </a>
      <img
        className="logo-img"
        src={require("../img/horsecoin.png")}
        alt="nostatenode horse logo"
      />
    </div>
  );
}

export default Navbar;