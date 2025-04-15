import React, { useState } from "react";
import Button from "../../components/Button";
import YandexMap from "../../components/YandexMap";
import ContactForm from "../../components/ContactForm";
import "./css/home.css";
import productquality from "@/assets/img/icons/product-quality-icon.svg";
import developments from "@/assets/img/icons/developments.svg";
import piggybank from "@/assets/img/icons/piggy-bank.svg";
import about from "@/assets/img/about.png";
import lukoyl from "@/assets/img/icons/lukoyl.svg";
import tatneft from "@/assets/img/icons/tatneft.svg";
import sinergiya from "@/assets/img/icons/sinergiya.svg";
import chemical from "@/assets/img/icons/chemical.svg";
import gazprom1 from "@/assets/img/icons/gazprom1.svg";
import bashneft from "@/assets/img/icons/bashneft.svg";
import megion from "@/assets/img/icons/megion.svg";
import gazprom from "@/assets/img/icons/gazprom.svg";
import ContactModal from "../../components/ContactModal";

const Home = () => {
  const [isOpen, setModal] = useState(false);
  const partners = [
    lukoyl,
    tatneft,
    sinergiya,
    chemical,
    gazprom1,
    bashneft,
    megion,
    gazprom,
  ];

  return (
    <div className="home-page">
      <section className="home-section">
        <div className="main-container">
          <div className="home-content">
            <h1 className="home-title">РАЗРАБОТКА ХИМИЧЕСКОЙ ПРОДУКЦИИ</h1>
            <div className="home-right">
              <p className="home-description">
                Разработка новых химреагентов и технологий для ТЭК с
                экологическими требованиями и нанотехнологиями для снижения
                расходов и повышения эффективности.
              </p>
              <button
                className="submit-request__btn"
                onClick={() => setModal(true)}
              >
                <span>Оставить заявку</span>
                <span className="arrow-icon">
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2439 9.03133C18.6344 8.6408 18.6344 8.00764 18.2439 7.61711L11.88 1.25315C11.4894 0.862628 10.8563 0.862628 10.4657 1.25315C10.0752 1.64368 10.0752 2.27684 10.4657 2.66737L16.1226 8.32422L10.4657 13.9811C10.0752 14.3716 10.0752 15.0048 10.4657 15.3953C10.8563 15.7858 11.4894 15.7858 11.88 15.3953L18.2439 9.03133ZM0.0913085 9.32422L17.5368 9.32422L17.5368 7.32422L0.0913087 7.32422L0.0913085 9.32422Z"
                      fill="#94D227"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-company">
        <div className="main-container">
          <div className="about-company__in">
            <ul className="about-company__cards">
              <li className="card-item">
                <div className="icon">
                  <img src={productquality} alt="" />
                </div>
                <h3 className="card-title">Высокое качество продукции</h3>
              </li>
              <li className="card-item">
                <div className="icon">
                  <img src={developments} alt="" />
                </div>
                <h3 className="card-title">Собственные разработки</h3>
              </li>
              <li className="card-item">
                <div className="icon">
                  <img src={piggybank} alt="" />
                </div>
                <h3 className="card-title">Гибкие цены</h3>
              </li>
            </ul>
            <div className="about-info">
              <div className="about-img">
                <img src={about} alt="" />
              </div>
              <div className="about-info__body">
                <h2 className="about-title">О компании</h2>
                <p className="about-description">
                  Наше предприятие ведет работы по созданию новых технологий и
                  реагентов для добычи, подготовки и транспорта углеводородов.
                  Коллектив предприятия состоит из специалистов имеющих высокую
                  квалификацию и ученые степени, с большим опытом работы в ТЭК.
                </p>
                <ul className="about-list">
                  <p className="list-head">
                    Основными ориентирами нашей компании являются:
                  </p>
                  <li className="list-item">
                    Использование природных сырьевых компонентов при
                    производстве.
                  </li>
                  <li className="list-item">Применение нанотехнологий.</li>
                  <li className="list-item">
                    Снижение химической нагрузки на окружающую среду за счет
                    сокращения расходных норм и повышения эффективности
                    применяемых химических реагентов.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="product-and-partners">
        <div className="main-container">
          <section className="product">
            <div className="blur">blur</div>
            <h1 className="product-title">продукция</h1>
            <ul className="product-card">
              <li className="card-item">
                <h3 className="card-title">Реагенты для добычи нефти и газа</h3>
                <p className="card-description">
                  РП-ПС-1 (марки-А1, А2, А3) <br /> РП-ПС-1 (марка-Б) <br />{" "}
                  РП-ПС-1 (марки-В1, В2, В3, В4, В5) <br /> ПАВ М100 (марки-А и
                  Б) <br /> РП-ЭСК-1К
                </p>
                <Button text="Смотреть все" to="/product" />
              </li>
              <li className="card-item">
                <h3 className="card-title">
                  Реагенты для подготовки нефти и газа
                </h3>
                <p className="card-description">
                  РП-НСС-1 (марки-А, Б, В, Г, Д, Е, С) <br />
                  РП-ИК-1 (марка-А)
                  <br />
                  РП-ИК-1 (марка-Б)
                  <br />
                  РП-ИСО-1 (марка-А)
                  <br />
                  РП-ИСО-1 (марка-Б)
                  <br />
                  РП-ИНПАР-1 (марка-А)
                  <br />
                  РП-ИНПАР-1 (марка-Б)
                  <br />
                </p>
                <Button text="Смотреть все" to="/product" />
              </li>
              <li className="card-item">
                <h3 className="card-title">Буровые реагенты</h3>
                <p className="card-description">РП-ПС-1 (марка-А1)</p>
                <Button text="Смотреть все" to="/product" />
              </li>
            </ul>
          </section>
          <section className="partners">
            <h2 className="partners-title">партнеры</h2>
            <ul className="partners-list">
              {partners.map((scr, i) => {
                return (
                  i < 4 && (
                    <li key={i} className="partner-item">
                      <img src={scr} alt={scr} />
                    </li>
                  )
                );
              })}
            </ul>
            <ul className="partners-list">
              {partners.map((scr, i) => {
                return (
                  i > 3 && (
                    <li key={i} className="partner-item">
                      <img src={scr} alt={scr} />
                    </li>
                  )
                );
              })}
            </ul>
          </section>
        </div>
      </div>
      <section id="contact" className="contact">
        <div className="main-container">
          <h2 className="contact-title">контакты</h2>
          <div className="contact-in">
            <div className="left-block">
              <p>
                ООО НТП «ЭКОЙЛ» <br /> Генеральный директор <br /> Хамидуллин
                Эльдар Наилевич
              </p>
              <br />
              <br />
              <p>Адрес: 450071, г. Уфа, ул. Менделеева, 219, оф. 208</p>
              <p>
                Телефон: <a href="tel:+73472163015">+7 (347) 216-30-15</a>{" "}
              </p>
              <p>Офис работает с 9:00 до 18:00 пн-пт</p>
              <p>
                Электронная почта:{" "}
                <a href="mailto:ntp-ecoil@mail.ru">ntp-ecoil@mail.ru</a>
              </p>
              <br />
              <br />
              <p>
                Регистрационные данные: <br />
                ОГРН: 1040202381482 <br />
                ИНН: 0253015777
              </p>
            </div>
            <div className="right-block">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <YandexMap />
      <ContactModal isOpen={isOpen} close={() => setModal(false)} />
    </div>
  );
};

export default Home;
