import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header({ isLoggedIn, onLogin, onLogout, onRegister, userData }) {
  return (
    <header className="app-header">
      <p>NewsExplorer</p>
      <div className="nav-header__container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `home-link ${isActive ? "home-link_active" : ""}`
          }
        >
          Home
        </NavLink>

        {isLoggedIn ? (
          <NavLink
            to="/saved-articles"
            className={({ isActive }) =>
              `saved-articles-link ${isActive ? "home-link_active" : ""}`
            }
          >
            Saved Articles
          </NavLink>
        ) : null}
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
