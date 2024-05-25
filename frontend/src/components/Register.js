import React, { useState } from "react";
import { register } from "../utils/api";
import "../styles/Form.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(username, password);
    if (response.error) {
      setError(response.error);
    } else {
      setError("Регистрация успешна");
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-form-title">Регистрация</h2>
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
      <button className="register-form-button" type="submit">
        Регистрация
      </button>
    </form>
  );
};

export default Register;
