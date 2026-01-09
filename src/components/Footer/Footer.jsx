import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright-name">Developed by Aaron Young</p>
      <p className="footer__copyright">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
