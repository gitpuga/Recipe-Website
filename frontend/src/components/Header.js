import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left-container">
        <nav className="header-nav">
          <Link className="a" to="/">
            <h1 className="header-text">🍽️ CookBook</h1>
          </Link>
        </nav>
      </div>
      <nav className="header-nav">
        <div className="nav-container">
          <Link className="a" to="/add-recipe">
            <h1 className="header-text">+ добавить рецепт</h1>
          </Link>
        </div>
        <div className="nav-container">
          <Link className="a" to="/contact">
            <h1 className="header-text">☎ контакты</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
