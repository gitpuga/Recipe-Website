import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignInPopup.css";

const SingInPopup = () => {
  return (
    <div className="popup-container">
      <div className="popup-card">
        <img src="alert.png" alt="внимание" className="popup-img"/>
        <p className="popup-text">
          Пожалуйста<Link className="popup-link" to="/user">войдите</Link> в аккаунт, чтобы добавить новый
          рецепт
        </p>
      </div>
    </div>
  );
};

export default SingInPopup;
