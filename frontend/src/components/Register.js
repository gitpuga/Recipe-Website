import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/api";
import "../styles/Form.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Пароли не совпадают!");
      return;
    }

    const response = await register(username, password);
    if (response.error) {
      setError(response.error);
    } else {
      setError("Регистрация успешна");
      setTimeout(function () {
        navigate("/user");
      }, 800);
    }
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-form-title">Регистрация</h2>
        <input
          className="login-input"
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="password-input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="password-input"
          type="password"
          placeholder="Подтверждение пароля"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="form-error">{error}</p>}
        <button className="register-form-button" type="submit">
          <p className="register-form-button-text">Создать аккаунт</p>
        </button>
        <div className="register-form-link">
          Уже есть аккаунт?
          <Link to="/user" className="register-form-link-text">
            Вход
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
