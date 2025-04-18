import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/img/icons/logo.svg";
import logoBlue from "@/assets/img/icons/logo-blue.svg";
import arrow from "@/assets/img/icons/dropdown-arrow.svg";
import search from "@/assets/img/icons/search.svg";
import burger from "@/assets/img/icons/burger-menu.svg";
import "./css/header.css";
import ContactModal from "../ContactModal";

const Header = ({ addClass, setOpenBar, isOpenBar }) => {
  const location = useLocation();
  const isServices = location.pathname.startsWith("/services");
  const isProduct = location.pathname.startsWith("/product");
  const [langOpen, setLang] = useState(false);
  const [navOpen, setNav] = useState(false);
  const [searchOpen, setSearch] = useState(false);
  const [isOpen, setModal] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

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
  const openMenu = () => {
    if (window.innerWidth <= 992) {
      setNav(!navOpen);
    }
  };
  const openBar = () => {
    setOpenBar((open) => !open);
  };
  const langSelected = () => {
    setLang(!langOpen);
  };
  const openSearch = () => {
    setSearch(true);
  };
  const clickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearch(false);
    }
  };
  useEffect(() => {
    if (navOpen || isOpenBar) {
      document.body.classList.add("hide");
    } else {
      document.body.classList.remove("hide");
    }

    return () => {
      document.body.classList.remove("hide");
    };
  }, [navOpen, isOpenBar]);
  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);
  return (
    <div>
      <header
        className={
          "header " +
          (navOpen ? "show " : "") +
          (isProduct ? "product-header " : "") +
          addClass
        }
      >
        <div className="main-container">
          <div className="header-in">
            <div className="header-head">
              <div className="header-left__block">
                <div className="logo">
                  {addClass !== "inner-pages__header" ? (
                    <Link to={"/"} className="logo-link">
                      <img src={logo} alt="" />
                    </Link>
                  ) : (
                    <Link to={"/"} className="logo-link">
                      <img src={logoBlue} alt="" />
                    </Link>
                  )}
                </div>
                <p className="header-description">
                  Промышленные и нефтепромысловые химические реагенты
                </p>
              </div>
              <div
                className={
                  "header-right__block " + (searchOpen ? "active" : "")
                }
              >
                <div className="header-contact">
                  <a href="tel:+73472163015" className="phone-number">
                    +7 (347) 216-30-15
                  </a>
                  <a href="mailto:ntp-ecoil@mail.ru" className="email-link">
                    e-mail: ntp-ecoil@mail.ru
                  </a>
                </div>
                <div ref={searchRef} className="header-search">
                  <div
                    className={"form-control " + (searchOpen ? "show" : "")}
                    onClick={openSearch}
                  >
                    <button className="search-btn">
                      <img src={search} alt="" />
                    </button>
                    <input
                      type="search"
                      placeholder="Поиск по сайту"
                      className="form-input"
                    />
                  </div>
                </div>
                <button
                  className={"contact-us__btn " + (searchOpen ? "hidden" : "")}
                  onClick={() => setModal(true)}
                >
                  Связаться с нами
                  <span className="icon">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928933C12.9526 0.538409 12.3195 0.538409 11.9289 0.928933C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM-8.74228e-08 9L19 9L19 7L8.74228e-08 7L-8.74228e-08 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
                <div className={"header-lang " + (searchOpen ? "hidden" : "")}>
                  <button
                    className={"lang-btn " + (langOpen ? "active" : "")}
                    onClick={langSelected}
                  >
                    <span className="lang-value">ru</span>
                    <span className="arrow-icon">
                      <img src={arrow} alt="" />
                    </span>
                  </button>
                  <ul className={"lang-menu " + (langOpen ? "show" : "")}>
                    <li className="lang-item active" onClick={langSelected}>
                      ru
                    </li>
                    <li className="lang-item" onClick={langSelected}>
                      arb
                    </li>
                    <li className="lang-item" onClick={langSelected}>
                      port
                    </li>
                    <li className="lang-item" onClick={langSelected}>
                      esp
                    </li>
                    <li className="lang-item" onClick={langSelected}>
                      en
                    </li>
                  </ul>
                </div>
                <button className="burger-btn" onClick={openMenu}>
                  <a href="#">
                    <img src={burger} alt="" />
                  </a>
                </button>
              </div>
            </div>
            <div className="header-bottom">
              <nav className={"header-nav " + (navOpen ? "show" : "")}>
                <ul className="nav-list">
                  <li className="list-item">
                    <div className="dropdown">
                      <button
                        className={
                          "dropdown-btn " + (isServices ? "active" : "")
                        }
                      >
                        Услуги
                        <span className="arrow-icon">
                          <img src={arrow} alt="" />
                        </span>
                      </button>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/services"} className="nav-link">
                            Разработка и производство химреагентов для ТЭК
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/services"} className="nav-link">
                            Разработка инновационных решений для потребностей
                            промышленности
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/services"} className="nav-link">
                            Создание востребованных коммерческих продуктов
                            (импортозамещение), внедрение в промышленное
                            производство
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/services"} className="nav-link">
                            Лабораторные исследования и анализы
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/services"} className="nav-link">
                            Реализация флокулянтов для интенсификации процессов
                            очистки воды, уплотнения и обезвоживания осадков
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="dropdown">
                      <button
                        className={
                          "dropdown-btn " + (isProduct ? "active" : "")
                        }
                      >
                        Продукция
                        <span className="arrow-icon">
                          <img src={arrow} alt="" />
                        </span>
                      </button>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Реагенты для добычи нефти и газа
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Водоизолирующие - водонерастворимые
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-ПС-1 (марки-А1, А2, А3)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-ПС-1 (марки-В1, В2, В3, В4, В5)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Самоэмульгирующаяся система
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-ЭСК-1 марки (А,Б,В,Г,К,С)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Моющий диспергирующий состав
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            ПАВ М100 (марки-А и Б)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Реагенты для подготовки нефти и газа
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Нейтрализаторы сероводорода
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-НСС-1 (марки-А, Б, В, Г, Д, Е, С)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Ингибиторы коррозии
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-ИК-1 (марка-А)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-ИК-1 (марка-Б)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Ингибиторы солеотложений
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-ИСО-1 (марка-А)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-ИСО-1 (марка-Б)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Ингибиторы АСПО
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-ИНПАР-1 (марка-А)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            РП-ИНПАР-1 (марка-Б)
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Реализуемая продукция компаний партнеров
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Натр-едкий
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Натр едкий технический марки ТР ГОСТ 55064-2012
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Соль техническая
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Соль техническая концентрат минеральный "Галит"
                            марка С
                          </Link>
                        </li>
                        <li className="dropdown-item" onClick={openMenu}>
                          <Link to={"/product"} className="nav-link">
                            Лимонная кислота (моногидрат)
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item service-item" onClick={openMenu}>
                    <Link to={"/services"} className="nav-link">
                      Услуги
                    </Link>
                  </li>
                  <li className="nav-item product-item" onClick={openMenu}>
                    <Link to={"/product"} className="nav-link">
                      Продукция
                    </Link>
                  </li>
                  <li className="nav-item" onClick={openMenu}>
                    <Link to={"#"} className="nav-link">
                      Каталические системы
                    </Link>
                  </li>
                  <li className="nav-item" onClick={openMenu}>
                    <Link to={"#"} className="nav-link">
                      Документы
                    </Link>
                  </li>
                  <li className="nav-item" onClick={openMenu}>
                    <Link to={"#"} className="nav-link">
                      Регистрация
                    </Link>
                  </li>
                  <li className="nav-item" onClick={openMenu}>
                    <a
                      href={"#contact"}
                      className="nav-link"
                      onClick={ContactClick}
                    >
                      Контакты
                    </a>
                  </li>
                  <li className="nav-item header-contact">
                    <a
                      href="tel:+73472163015"
                      className="phone-number nav-link"
                    >
                      +7 (347) 216-30-15
                    </a>
                  </li>
                  <li className="nav-item header-contact">
                    <a
                      href="mailto:ntp-ecoil@mail.ru"
                      className="email-link nav-link"
                    >
                      e-mail: ntp-ecoil@mail.ru
                    </a>
                  </li>
                </ul>
              </nav>
              <div className={"header-search "}>
                <div className="form-control">
                  <button className="search-btn">
                    <img src={search} alt="" />
                  </button>
                  <input
                    type="search"
                    placeholder="Поиск по сайту"
                    className="form-input"
                  />
                </div>
              </div>
              <button className="burger-btn" onClick={openBar}>
                <a href="#">
                  <img src={burger} alt="" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
      <ContactModal isOpen={isOpen} close={() => setModal(false)} />
    </div>
  );
};

export default Header;
