// Nav.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/images/travel-logo.svg";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="logo-title-container">
        <img src={logo} alt="Travel Friend Logo" className="logo" />
        <h1 className="nav-title">Travel Friend</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
