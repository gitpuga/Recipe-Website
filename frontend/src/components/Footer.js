import React from "react";
import "../styles/Footer.css";

const Footer = ({ toggleAccessibilityMode }) => {
  return (
    <footer>
      <button
        onClick={toggleAccessibilityMode}
        className="accessibility-button"
      >
        Режим для слабовидящих
      </button>
      © 2024 Cook Book
    </footer>
  );
};

export default Footer;
