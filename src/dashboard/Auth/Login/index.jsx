import React from "react";
import "../css/auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Вход в аккаунт</h2>
        <form className="auth-form">
          <div className="form-control">
            <label htmlFor="username" className="label">
              Имя пользователя*
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              Пароль*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Введите пароль"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="login-btn auth-btn">
            Войти
          </button>
        </form>
        <p className="signup-link">
          Нет аккаунта? <Link to="/dashboard/register">Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
