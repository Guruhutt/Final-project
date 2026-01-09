import React from "react";
import "./AboutMe.css";
import placeHolder from "../../assets/placeHolder.png";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__header">About Me</h2>
        <p className="about-me__description">
          Hello! I'm a passionate developer with a love for creating intuitive
          and dynamic user experiences. In my free time, I enjoy hiking, reading
          sci-fi novels, and experimenting with new cooking recipes.
        </p>
      </div>
      <img className="about-me__image" src={placeHolder} alt="" />
    </div>
  );
}
export default AboutMe;
