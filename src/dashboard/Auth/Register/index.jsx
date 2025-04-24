import React from "react";
import "../css/auth.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Регистрация</h2>
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
              autocomplete="username"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              Электронная почта*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Введите e-mail"
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
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password" className="label">
              Повторите пароль*
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Повторите пароль"
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="register-btn auth-btn">
            Зарегистрироваться
          </button>
        </form>
        <p className="login-link">
          Уже есть аккаунт?
          <Link to="/dashboard/login">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
