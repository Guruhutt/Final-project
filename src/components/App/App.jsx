import "./App.css";
import React, { use } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Articles from "../Articles/Articles.jsx";
import SavedArticals from "../SavedArticals/SavedArticals.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { validateToken } from "../utils/auth.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [userData, setUserData] = React.useState({ name: "", avatar: "" });
  const [savedArticles, setSavedArticles] = React.useState([]);
  const navigate = useNavigate();

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
    setUserData({ name: "", avatar: "" });
    navigate("/");
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
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
      <Header />
      <SearchBar />
      <Articles />
      <Routes>
        <Route path="/saved-articles" element={<SavedArticals />} />
      </Routes>
      <AboutMe />
      <Footer />
    </div>
  );
}
export default App;
