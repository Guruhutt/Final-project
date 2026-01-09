import "./App.css";
import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Articles from "../Articles/Articles.jsx";
import SavedArticals from "../SavedArticals/SavedArticals.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Header />
      <SearchBar />

      <Routes>
        {" "}
        <Route path="/articles" element={<Articles />} />
        <Route path="/saved-articles" element={<SavedArticals />} />
      </Routes>
      <AboutMe />
      <Footer />
    </div>
  );
}
export default App;
