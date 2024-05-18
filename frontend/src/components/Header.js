import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/add-recipe">Добавить рецепт</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
