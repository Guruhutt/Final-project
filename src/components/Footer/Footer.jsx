import "./Footer.css";
import React from "react";
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright-name">
        © 2020 Supersite, Powered by News API
      </p>
      <div className="footer__separator">
        <p className="footer__copyright-home"> Home </p>
        <p className="footer__copyright-tripleTen"> tripleTen </p>
        <img
          className="footer__github-icon"
          src={githubIcon}
          alt="GitHub Icon"
        />
        <img
          className="footer__linkedin-icon"
          src={linkedinIcon}
          alt="LinkedIn Icon"
        />
      </div>
    </footer>
  );
}

export default Footer;
