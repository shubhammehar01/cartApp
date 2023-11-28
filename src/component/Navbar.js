import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg " id="navbar">
      <a className="navbar-brand" href="/">
        CardApp
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
  );
}

export default Navbar;
