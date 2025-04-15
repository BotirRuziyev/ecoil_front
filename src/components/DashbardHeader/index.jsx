import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/dashboard-header.css";

import burger from "@/assets/img/icons/burger-menu.svg";

const DashboardHeader = () => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const burgerToggle = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);
  const ContactClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const AboutClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const location = useLocation();
  const isNews = location.pathname.startsWith("/dashboard/news");
  return (
    <div className="dashboard-header">
      <div className="main-container">
        <div className="dashboard-header__in">
          <p className="logo">Админка</p>
          <nav className={"dashboard-header__nav " + (isOpen ? "show" : "")}>
            <ul className="nav-list">
              <li className="list-item">
                <a href="#about" className="nav-link" onClick={AboutClick}>
                  О нас
                </a>
              </li>
              <li className="list-item">
                <Link to="/services" className="nav-link">
                  Услуги
                </Link>
              </li>
              {!isNews && (
                <li className="list-item">
                  <Link to="/dashboard/news" className="nav-link">
                    Новости
                  </Link>
                </li>
              )}
              {!isNews && (
                <li className="list-item">
                  <Link to="#" className="nav-link">
                    Медия
                  </Link>
                </li>
              )}
              <li className="list-item">
                <a href="#" className="nav-link" onClick={ContactClick}>
                  Контакты
                </a>
              </li>
              <li className="list-item mobile-item">
                <Link to={"/"} className="nav-link">
                  открыть сайт
                </Link>
              </li>
              <li className="list-item mobile-item">
                <Link to={"/"} className="nav-link">
                  выход
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="header-right__list">
            <li className="right-link__item">
              <Link to={"/"} className="right-link">
                открыть сайт
              </Link>
            </li>
            <li className="right-link__item">
              <Link to={"/"} className="right-link">
                выход
              </Link>
            </li>
          </ul>
          <button className="burger-btn" onClick={burgerToggle}>
            <a href="#">
              <img src={burger} alt="" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
