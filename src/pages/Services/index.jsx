import React, { useRef, useState } from "react";
import "./css/services.css";

import Service1 from "@/assets/img/service1.png";
import Service2 from "@/assets/img/service2.png";
import Service3 from "@/assets/img/service3.png";
import Service4 from "@/assets/img/service4.png";
import Service5 from "@/assets/img/service5.png";
import { Link } from "react-router-dom";
import ContactModal from "../../components/ContactModal";

const Services = () => {
  const [isOpen, setModal] = useState(false);
  const [openItems, setOpenItems] = useState([]);
  const bodyRefs = useRef([]);
  const toggleAccordion = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  return (
    <div className="services-page">
      <div className="page-head">
        <Link to={"/"} className="page-head__link">
          Главная
        </Link>
        /<p className="text">Услуги</p>
      </div>
      <div className="services-page__header">
        <h1 className="page-title">Услуги</h1>
        <p className="page-description">
          Разработка новых химических реагентов и технологий для ТЭК, с учётом
          высоких экологических требований
          <span>
            , с применением нанотехнологий, направленных на снижение расхода
            химреагента и повышения их эффективности.
          </span>
        </p>
      </div>
      <div className="services-accordion__wrapper">
        <div className={"accordion " + (openItems.includes(0) ? "show" : "")}>
          <button className="accordion-btn" onClick={() => toggleAccordion(0)}>
            Разработка и производство химреагентов для ТЭК
            <span className="arrow-icon">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 18L22.3253 0.75H0.674683L11.5 18Z"
                  fill="#002269"
                />
              </svg>
            </span>
          </button>
          <div
            className="accordion-body"
            ref={(el) => (bodyRefs.current[0] = el)}
            style={{
              height: openItems.includes(0)
                ? `${bodyRefs.current[0]?.scrollHeight}px`
                : "0",
            }}
          >
            <div className="accordion-body__in">
              <div className="accordion-img">
                <img src={Service1} alt="" />
              </div>
              <div className="accordion-text">
                <p className="body-description">
                  Разрабатываемая линия химреагентов предназначена для добычи,
                  подготовки, транспорта и переработки углеводородного сырья.
                </p>
                <p className="body-description">
                  Перечень химических реагентов включает в себя следующие
                  позиции:
                </p>
                <ul className="body-list">
                  <li className="list-item">
                    реагент для процессов ПНП, ВИР, РИР (водоизолирующие составы
                    и темпонирующие)
                  </li>
                  <li className="list-item">ингибиторы коррозии</li>
                  <li className="list-item">ингибиторы АСПО</li>
                  <li className="list-item">ингибиторы солеотложений</li>
                  <li className="list-item">ингибиторы гидратообразований</li>
                  <li className="list-item">растворители АСПО</li>
                  <li className="list-item">жидкости глушения и их составы</li>
                  <li className="list-item">эмульгаторы</li>
                  <li className="list-item">
                    нейтрализаторы сероводорода и меркаптанов,
                  </li>
                  <li className="list-item">водо-и нефтерастворимые формы</li>
                  <li className="list-item">доотмывающие ПАВ</li>
                  <li className="list-item">
                    удалители вторичных кальматантов
                  </li>
                </ul>
                <p className="body-description">
                  Предлагаемый перечень включает полный пакет разрешительной
                  техдокументации, кроме того осуществляется инжиниринговое
                  сопровождение и выполнение работ по техзаданию заказчика.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"accordion " + (openItems.includes(1) ? "show" : "")}>
          <button className="accordion-btn" onClick={() => toggleAccordion(1)}>
            Разработка инновационных решений для потребностей промышленности
            <span className="arrow-icon">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 18L22.3253 0.75H0.674683L11.5 18Z"
                  fill="#002269"
                />
              </svg>
            </span>
          </button>
          <div
            className="accordion-body"
            ref={(el) => (bodyRefs.current[1] = el)}
            style={{
              height: openItems.includes(1)
                ? `${bodyRefs.current[1]?.scrollHeight}px`
                : "0",
            }}
          >
            <div className="accordion-body__in">
              <div className="accordion-img">
                <img src={Service2} alt="" />
              </div>
              <div className="accordion-text">
                <p className="body-description">
                  На основе коммерческого проекта: Организация производства
                  простых эфиров целлюлозы
                </p>
                <br />
                <p className="body-description">
                  Планируется развить коммерческие подпроекты:
                </p>
                <ul className="body-list">
                  <li className="list-item">
                    Привлечение сельхозпроизводителей для выращивания
                    сельхозкультур с высоким содержанием целлюлозы
                  </li>
                  <li className="list-item">
                    Организация производства сырьевых марок целлюлозы для
                    потребностей медицины (флав-целлюлоза), промышленности -
                    производство химволокон, моющих, космитических средств,
                    компонентов лекарственных препаратов и пищевых добавок,
                    производство химстойких красок для машиностроения и
                    водоэмульсионных красок для системы ЖКХ и т. д.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={"accordion " + (openItems.includes(2) ? "show" : "")}>
          <button className="accordion-btn" onClick={() => toggleAccordion(2)}>
            Разработка инновационных решений для потребностей промышленности
            <span className="arrow-icon">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 18L22.3253 0.75H0.674683L11.5 18Z"
                  fill="#002269"
                />
              </svg>
            </span>
          </button>
          <div
            className="accordion-body"
            ref={(el) => (bodyRefs.current[2] = el)}
            style={{
              height: openItems.includes(2)
                ? `${bodyRefs.current[2]?.scrollHeight}px`
                : "0",
            }}
          >
            <div className="accordion-body__in">
              <div className="accordion-img">
                <img src={Service3} alt="" />
              </div>
              <div className="accordion-text">
                <p className="body-description">
                  В плане создания импортозамещения моющих реагентов ведутся
                  следующие работы:
                </p>
                <ul className="body-list">
                  <li className="list-item">
                    Организация производства простых эфиров целлюлозы
                  </li>
                  <li className="list-item">
                    Организация производства цетанповышающих и моющих присадок
                  </li>
                  <li className="list-item">
                    Организация производства катионных,неионогенных и
                    анионактивных ПАВ из растительного сырья
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={"accordion " + (openItems.includes(3) ? "show" : "")}>
          <button className="accordion-btn" onClick={() => toggleAccordion(3)}>
            Лабораторные исследования и анализы
            <span className="arrow-icon">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 18L22.3253 0.75H0.674683L11.5 18Z"
                  fill="#002269"
                />
              </svg>
            </span>
          </button>
          <div
            className="accordion-body"
            ref={(el) => (bodyRefs.current[3] = el)}
            style={{
              height: openItems.includes(3)
                ? `${bodyRefs.current[3]?.scrollHeight}px`
                : "0",
            }}
          >
            <div className="accordion-body__in">
              <div className="accordion-img">
                <img src={Service4} alt="" />
              </div>
              <div className="accordion-text">
                <p className="body-description">
                  Наличие собственной лаборатории ООО НТП "Экойл" позволяет
                  определять основные физические константы химреагентов для
                  сторонник организаций:
                </p>
                <p className="body-description">
                  <span>для жидких:</span>
                </p>
                <p className="body-description">
                  вязкость, плотность, РНр-ра, температура застывания,
                  температура вспышки,определение фракционного состава,
                  определение кислотного числа, числа омыления, поверхностного
                  натяжения, качественный и количественный анализ по группам
                  катионов и анионов, определение и содержание углеводородов в
                  воде и т.д.
                </p>
                <p className="body-description">
                  <span>для сухих:</span>
                </p>
                <p className="body-description">
                  температура плавления, разложения, растворимость в различных
                  средах, насыпная плотность, слёживаемость и т. д.
                </p>
                <br />
                <div className="doctor-info">
                  <span className="user-name">
                    Махмудияров Гилемдар Адыхамович
                  </span>
                  <span>– заместитель генерального директора по науке</span>
                  <p className="phone-number">
                    Телефон: <a href="tel:+79173686544">+7 917 368-65-44</a>
                  </p>
                  <p className="email">
                    E-mail:{" "}
                    <a href="mailto:g.mahmudiyarov@ntp-ecoil.ru">
                      g.mahmudiyarov@ntp-ecoil.ru
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"accordion " + (openItems.includes(4) ? "show" : "")}>
          <button className="accordion-btn" onClick={() => toggleAccordion(4)}>
            Реализация флокулянтов для интенсификации процессов очистки воды,
            уплотнения и обезвоживания осадков
            <span className="arrow-icon">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 18L22.3253 0.75H0.674683L11.5 18Z"
                  fill="#002269"
                />
              </svg>
            </span>
          </button>
          <div
            className="accordion-body"
            ref={(el) => (bodyRefs.current[4] = el)}
            style={{
              height: openItems.includes(4)
                ? `${bodyRefs.current[4]?.scrollHeight}px`
                : "0",
            }}
          >
            <div className="accordion-body__in">
              <div className="accordion-img">
                <img src={Service5} alt="" />
              </div>
              <div className="accordion-text">
                <p className="body-description">
                  ООО НТП "Экойл" занимается реализацией флокулянтов российских
                  и импортных производителей для обработки сточных вод и
                  обезвоживания осадков сточных вод предприятий машиностроения,
                  металлургии, горнодобывающих, горно-перерабатывающих,
                  целлюлозно-бумажных, включая производства картона и бумаги,
                  нефтяной и химической промышленности
                </p>
                <br />
                <p className="body-description">Химический состав:</p>
                <br />
                <p className="body-description">
                  Высокомолекулярный электролит катионной, анионной или
                  неиногенной активности на основе акриламида
                </p>
                <p className="body-description">
                  Флокулянты для любых применений, включающих разделение твердой
                  и жидкой фазы. (Очистка, осветление, сгущение, обезвоживание).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="contact-us-btn" onClick={() => setModal(true)}>
        <span>Связаться с нами</span>
        <span className="arrow-icon">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM1 9L20 9L20 7L1 7L1 9Z"
              fill="#94D227"
            />
          </svg>
        </span>
      </button>
      <ContactModal isOpen={isOpen} close={() => setModal(false)} />
    </div>
  );
};

export default Services;
