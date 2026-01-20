import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, onLogin, onLogout, onRegister, userData }) {
  return (
    <header className="app-header">
      <p>NewsExplorer</p>
      <div className="nav-header__container">
        <Link to="/" className="home-link">
          Home
        </Link>
        {/*
      <Link to="/about" className="about-link">
        saved Articles
      </Link>
      */}
        <button
          className="header-login-btn"
          onClick={isLoggedIn ? onLogout : onLogin}
        >
          {isLoggedIn ? `logout, ${userData.name}` : "Sign in"}
        </button>
      </div>
    </header>
  );
}

export default Header;
