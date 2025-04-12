import React, { useRef, useState } from "react";
import arrowIcon from "@/assets/img/icons/dropdown-arrow.svg";
import { Link } from "react-router-dom";
import "./css/nav-bar.css";

const NavBar = ({ openBar }) => {
  const [barList, setBarList] = useState([
    {
      id: 1,
      title: "Услуги",
      selected: true,
      urls: [
        {
          _id: 1,
          to: "/services",
          link: "Разработка и производство химреагентов для ТЭК",
        },
        {
          _id: 2,
          to: "/services",
          link: "Разработка инновационных решений для потребностей промышленности",
        },
        {
          _id: 3,
          to: "/services",
          link: "Создание востребованных коммерческих продуктов (импортозамещение), внедрение в промышленное производство",
        },
        {
          _id: 4,
          to: "/services",
          link: "Лабораторные исследования и анализы",
        },
        {
          _id: 5,
          to: "/services",
          link: "Реализация флокулянтов для интенсификации процессов очистки воды, уплотнения и обезвоживания осадков",
        },
      ],
    },
    {
      id: 2,
      title: "Продукция",
      selected: false,
      urls: [
        {
          _id: 1,
          to: "/product",
          link: "Реагенты для добычи нефти и газа",
        },
        {
          _id: 2,
          to: "/product",
          link: "Водоизолирующие - водонерастворимые",
        },
        {
          _id: 3,
          to: "/product",
          link: "РП-ПС-1 (марки-А1, А2, А3)",
        },
        {
          _id: 4,
          to: "/product",
          link: "РП-ПС-1 (марка-Б)",
        },
        {
          _id: 5,
          to: "/product",
          link: "РП-ПС-1 (марки-В1, В2, В3, В4, В5)",
        },
        {
          _id: 6,
          to: "/product",
          link: "Самоэмульгирующаяся система",
        },
        {
          _id: 7,
          to: "/product",
          link: "РП-ЭСК-1 марки (А,Б,В,Г,К,С)",
        },
        {
          _id: 8,
          to: "/product",
          link: "Моющий диспергирующий состав",
        },
        {
          _id: 9,
          to: "/product",
          link: "ПАВ М100 (марки-А и Б)",
        },
        {
          _id: 10,
          to: "/product",
          link: "Реагенты для подготовки нефти и газа",
        },
        {
          _id: 11,
          to: "/product",
          link: "Нейтрализаторы сероводорода",
        },
        {
          _id: 12,
          to: "/product",
          link: "РП-НСС-1 (марки-А, Б, В, Г, Д, Е, С)",
        },
        {
          _id: 13,
          to: "/product",
          link: "Ингибиторы коррозии",
        },
        {
          _id: 14,
          to: "/product",
          link: "РП-ИК-1 (марка-А)",
        },
        {
          _id: 15,
          to: "/product",
          link: "РП-ИК-1 (марка-Б)",
        },
        {
          _id: 16,
          to: "/product",
          link: "Ингибиторы солеотложений",
        },
        {
          _id: 17,
          to: "/product",
          link: "РП-ИСО-1 (марка-А)",
        },
        {
          _id: 18,
          to: "/product",
          link: "РП-ИСО-1 (марка-Б)",
        },
        {
          _id: 19,
          to: "/product",
          link: "Ингибиторы АСПО",
        },
        {
          _id: 20,
          to: "/product",
          link: "РП-ИНПАР-1 (марка-А)",
        },
        {
          _id: 21,
          to: "/product",
          link: "РП-ИНПАР-1 (марка-Б)",
        },
        {
          _id: 22,
          to: "/product",
          link: "Реализуемая продукция компаний партнеров",
        },
        {
          _id: 23,
          to: "/product",
          link: "Натр-едкий",
        },
        {
          _id: 24,
          to: "/product",
          link: "Натр едкий технический марки ТР ГОСТ 55064-2012",
        },
        {
          _id: 25,
          to: "/product",
          link: "Соль техническая",
        },
        {
          _id: 26,
          to: "/product",
          link: 'Соль техническая концентрат минеральный "Галит" марка С',
        },
        {
          _id: 27,
          to: "/product",
          link: "Лимонная кислота (моногидрат)",
        },
      ],
    },
    {
      id: 3,
      title: "Каталические системы",
      to: "#",
    },
    {
      id: 4,
      title: "Документы",
      to: "#",
    },
    {
      id: 5,
      title: "Регистрация",
      to: "#",
    },
    {
      id: 6,
      title: "Контакты",
      to: "#",
    },
  ]);
  const bodyRefs = useRef([]);
  const toggleAccordion = (index) => {
    setBarList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, selected: !item.selected } : item,
      ),
    );
  };
  return (
    <nav className={"nav-bar " + (openBar ? "show" : "")}>
      <ul className="nav-bar__list">
        {barList.map((item, index) => {
          return (
            <li key={item.id} className="list-item">
              <div className="nav-bar__accordion">
                {item.to ? (
                  <Link to={item.to} className="nav-bar__link">
                    {item.title}
                  </Link>
                ) : (
                  <button
                    className={
                      "accordion-btn " + (item.selected ? "active" : "")
                    }
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{item.title}</span>
                    <span className="arrow-icon">
                      <img src={arrowIcon} alt="" />
                    </span>
                  </button>
                )}
                {!item.to ? (
                  <div
                    className={
                      "accordion-body " + (item.selected ? "show" : "")
                    }
                    ref={(el) => (bodyRefs.current[index] = el)}
                    style={{
                      height: item.selected
                        ? `${bodyRefs.current[index]?.scrollHeight}px`
                        : "0px",
                    }}
                  >
                    <ul className="menu-list">
                      {item.urls.map((service) => {
                        return (
                          <li key={service._id} className="menu-list__item">
                            <Link to={service.to} className="nav-bar__link">
                              {service.link}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
