import "./App.css";
import React, { use } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Articles from "../Articles/Articles.jsx";
import SavedArticals from "../SavedArticals/SavedArticals.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import LoginModal from "../login/LoginModal.jsx";
import RegistrationModal from "../Registration/Registration.jsx";
import * as auth from "../utils/auth.js";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState("");
  const [userData, setUserData] = React.useState({ name: "", email: "" });
  const [savedArticles, setSavedArticles] = React.useState([]);
  const navigate = useNavigate();

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
      .signin(email, password)
      .then((data) => {
        if (data.token) {
          validateToken(data.token)
            .then((data) => {
              setUserData(data);
              setIsLoggedIn(true);
              navigate("/Profile");
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

  const handleSearchResults = (results) => {
    setSearchResults(results);
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
          validateToken(data.token);
          setIsLoggedIn(true);
          closeActiveModal();
          navigate("/profile");
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchSavedArticles()
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
      <SearchBar onSearchResults={setSearchResults} />
      <Articles searchResults={searchResults} />
      <Routes>
        <Route path="/saved-articles" element={<SavedArticals />} />
      </Routes>

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

      <AboutMe />
      <Footer />
    </div>
  );
}
export default App;
