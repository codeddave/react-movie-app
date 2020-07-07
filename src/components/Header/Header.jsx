import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="/" className="navbar-brand movie-den-logo">
          <i className="fas fa-video"></i> MovieDen
        </Link>
      </div>
    </div>
  );
}
export default Header;
