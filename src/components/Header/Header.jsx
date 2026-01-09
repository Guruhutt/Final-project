import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <p>NewsExplorer</p>
      <div className="nav-header__container">
        <Link to="/" className="home-link">
          Home
        </Link>
        {/*make link to saved articles page appears after implementing the page and routing
      should only be visible when user is logged in
      <Link to="/about" className="about-link">
        saved Articles
      </Link>
      */}
        <button className="header-login-btn">sign in</button>
      </div>
    </header>
  );
}

export default Header;
