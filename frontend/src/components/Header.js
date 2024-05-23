import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left-container">
        <nav className="nav-container">
          <Link className="a" to="/">
            <h1 className="header-title-text">🍽️ CookBook</h1>
          </Link>
        </nav>
        <div className="header-divider" />
        <div className="nav-container">
          <Link className="a" to="/add-recipe">
            <h1 className="header-text">добавить рецепт</h1>
          </Link>
        </div>
        <div className="nav-container">
          <Link className="a" to="/contact">
            <h1 className="header-text">контакты</h1>
          </Link>
        </div>
      </div>
      <div className="header-right-container">
        <Link className="header-user-button" to="/user">
          <FaUser size={20} className="header-user-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
