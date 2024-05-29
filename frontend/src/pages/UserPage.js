import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserPage.css";

const UserPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/user");
  };

  return (
    <div className="user-page-container">
      <button className="logout-button" onClick={handleLogout}>
        <p className="logout-button-text">Выйти из аккаунта</p>
      </button>
    </div>
  );
};

export default UserPage;
