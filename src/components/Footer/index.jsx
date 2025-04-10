import React from "react";
import "./css/footer.css";
import { Link } from "react-router-dom";
import logo from "@/assets/img/icons/logo.svg";
import virtek from "@/assets/img/icons/virtek.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-container">
        <div className="footer-in">
          <nav className="footer-nav">
            <ul className="footer-nav__list">
              <li className="list-item">
                <Link to="#" className="nav-link">
                  Услуги
                </Link>
                <Link to="#" className="nav-link">
                  Документы
                </Link>
              </li>
              <li className="list-item">
                <Link to="#" className="nav-link">
                  Продукция
                </Link>
                <Link to="#" className="nav-link">
                  Контакты
                </Link>
              </li>
              <li className="list-item">
                <Link to="#" className="nav-link">
                  Регистрация
                </Link>
                <Link to="#" className="nav-link">
                  Каталические системы
                </Link>
              </li>
            </ul>
            <p className="privacy-policy">
              Политика обработки персональных данных
            </p>
          </nav>
          <div className="right-block">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <p className="privacy-policy">
              Политика обработки персональных данных
            </p>
            <a href="tel:+73472163015" className="phone-number">
              +7 (347) 216-30-15
            </a>
            <div className="sayt">
              Сайт от
              <img src={virtek} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
