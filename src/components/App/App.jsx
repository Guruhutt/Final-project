import "./App.css";
import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Articles from "../Articles/Articles.jsx";
import SavedArticles from "../SavedArticles/SavedArticles.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import LoginModal from "../login/LoginModal.jsx";
import RegistrationModal from "../Registration/Registration.jsx";
import SuccessModal from "../SuccessModal/SuccessModal.jsx";
import * as auth from "../utils/auth.js";
import Api from "../utils/api.js";
import ProtectedRoute from "../RouteProtecter/RouteProtecter.jsx";
import { useState } from "react";
import { NEWS_API } from "../utils/constants.js";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState("");
  const [userData, setUserData] = React.useState({ name: "", email: "" });
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const api = NEWS_API;

  const fetchData = (searchTerm) => {
    setError(null);
    api
      .getNews(searchTerm)
      .then((data) => {
        setSearchTerm("");
        console.log("Fetched data:", data);
        setSearchResults(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch news articles.");
      });
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleOpenLogin = () => {
    setActiveModal("login");
  };

  const handleOpenRegister = () => {
    setActiveModal("register");
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          auth
            .validateToken(data.token)
            .then((data) => {
              setUserData(data);
              setIsLoggedIn(true);
              navigate("/saved-articles");
              closeActiveModal();
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUserData({ name: "", email: "" });
    navigate("/");
  };

  const handleRegistration = ({ email, password, name }) => {
    if (password) {
      auth
        .signup(email, password, name)
        .then((user) => {
          setUserData(user);
          return auth.signin(email, password);
        })
        .then((data) => {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          closeActiveModal();
          navigate("/saved-articles");
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      api
        .fetchSavedArticles()
        .then((articles) => {
          setSavedArticles(articles);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={handleOpenLogin}
        onLogout={handleLogout}
        onRegister={handleOpenRegister}
        userData={userData}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={fetchData} />
              {error && (
                <div
                  style={{ color: "red", padding: "20px", textAlign: "center" }}
                >
                  {error}
                </div>
              )}

              <Articles
                savedArticles={savedArticles}
                setSavedArticles={setSavedArticles}
                searchResults={searchResults}
                api={api}
                isLoggedIn={isLoggedIn}
              />
              <AboutMe />
            </>
          }
        />

        <Route
          path="/saved-articles"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedArticles
                userData={userData}
                savedArticles={savedArticles}
                setSavedArticles={setSavedArticles}
              />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />

      <LoginModal
        swithedToRegister={handleOpenRegister}
        activeModal={activeModal}
        onClose={closeActiveModal}
        isOpen={activeModal === "login"}
        onLogin={handleLogin}
      />

      <RegistrationModal
        swithedToLogin={handleOpenLogin}
        activeModal={activeModal}
        onClose={closeActiveModal}
        isOpen={activeModal === "register"}
        onRegistration={handleRegistration}
      />

      <SuccessModal
        switchedTologin={handleOpenLogin}
        onClose={closeActiveModal}
        activeModal={activeModal}
      />
    </div>
  );
}

export default App;
