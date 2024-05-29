import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/api";
import "../styles/Form.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      if (response.error) {
        setError(response.error);
      } else if (response.token) {
        localStorage.setItem("token", response.token);
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Неожиданный ответ от сервера");
      }
    } catch (err) {
      setError("Вход не удался, пожалуйста попробуйте снова");
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form-title">Вход</h2>
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
        {error && <p className="form-error">{error}</p>}
        <button className="login-form-button" type="submit">
          <p className="login-form-button-text">Вход</p>
        </button>
        <div className="login-form-link">
          Нет аккаунта?
          <Link to="/user/register" className="login-form-link-text">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
