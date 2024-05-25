import React, { useState } from "react";
import { login } from "../utils/api";
import "../styles/Form.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(username, password);
    if (response.error) {
      setError(response.error);
    } else {
      onLogin(response.token);
      setError("Вход успешен");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form-title">Вход</h2>
      <div>
        <label className="login-label">Логин:</label>
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="password-label">Пароль:</label>
        <input
          className="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="login-form-button" type="submit">
        Вход
      </button>
    </form>
  );
};

export default Login;
