import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Header({ isLoggedIn, onLogin, onLogout, userData }) {
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-articles";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`app-header ${isSavedPage ? "app-header_dark" : ""}`}>
      <p className="app-header__title">NewsExplorer</p>

      <button
        className="nav-header__menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

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

      {isMenuOpen && (
        <div className="mobile-menu">
          <NavLink
            to="/"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="/saved-articles"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Saved Articles
            </NavLink>
          )}

          <button
            className="mobile-login-btn"
            onClick={() => {
              setIsMenuOpen(false);
              isLoggedIn ? onLogout() : onLogin();
            }}
          >
            {isLoggedIn ? `Logout, ${userData.name}` : "Sign in"}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
