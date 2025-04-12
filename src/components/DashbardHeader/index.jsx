import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/dashboard-header.css";

import burger from "@/assets/img/icons/burger-menu.svg";

const DashboardHeader = () => {
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
  return (
    <div className="dashboard-header">
      <div className="main-container">
        <div className="dashboard-header__in">
          <p className="logo">Админка</p>
          <nav className={"dashboard-header__nav " + (isOpen ? "show" : "")}>
            <ul className="nav-list">
              <li className="list-item">
                <Link to="#" className="nav-link">
                  О нас
                </Link>
              </li>
              <li className="list-item">
                <Link to="#" className="nav-link">
                  Услуги
                </Link>
              </li>
              <li className="list-item">
                <Link to="#" className="nav-link">
                  Новости
                </Link>
              </li>
              <li className="list-item">
                <Link to="#" className="nav-link">
                  Медия
                </Link>
              </li>
              <li className="list-item">
                <Link to="#" className="nav-link">
                  Контакты
                </Link>
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
