import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./css/product.css";
import Button from "../../components/Button";

import bezymyannyy from "@/assets/img/bezymyannyy.webp";
import emulgator from "@/assets/img/emulgator.webp";
import ikk from "@/assets/img/ikk.webp";
import inparr from "@/assets/img/inparr.webp";
import ContactModal from "../../components/ContactModal";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom"; // ✅ faqat shu kerak
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const Product = () => {
  const [isOpen, setModal] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const products = [
    {
      id: 1,
      title: "Реагенты для добычи нефти и газа",
      to: "/product/oil-gas-extraction-reagents",
      productLinks: [
        {
          _id: 1,
          to: "product",
          text: "Водоизолирующие -",
        },
        {
          _id: 2,
          to: "product",
          text: "водонерастворимые",
        },
        {
          _id: 3,
          to: "product",
          text: " РП-ПС-1 (марки-А1, А2, А3)",
        },
        {
          _id: 4,
          to: "product",
          text: " РП-ПС-1 (марка-Б)",
        },
        {
          _id: 5,
          to: "product",
          text: " РП-ПС-1 (марки-В1, В2, В3, В4, В5)",
        },
        {
          _id: 6,
          to: "product",
          text: "Самоэмульгирующаяся система",
        },
        {
          _id: 7,
          to: "product",
          text: " РП-ЭСК-1 марки (А,Б,В,Г,К,С)",
        },
        {
          _id: 8,
          to: "product",
          text: "Моющий диспергирующий состав",
        },
        {
          _id: 9,
          to: "product",
          text: " ПАВ М100 (марки-А и Б)",
        },
      ],
    },
    {
      id: 2,
      title: "Реагенты для подготовки нефти и газа",
      to: "/product/oil-gas-preparation-reagents",
      productLinks: [
        {
          _id: 1,
          to: "product",
          text: "Нейтрализаторы сероводорода",
        },
        {
          _id: 2,
          to: "product",
          text: " РП-НСС-1 (марки-А, Б, В, Г, Д, Е, С)",
        },
        {
          _id: 3,
          to: "product",
          text: " Ингибиторы коррозии",
        },
        {
          _id: 4,
          to: "product",
          text: " РП-ИК-1 (марка-А)",
        },
        {
          _id: 5,
          to: "product",
          text: " РП-ИК-1 (марка-Б)",
        },
        {
          _id: 6,
          to: "product",
          text: "Ингибиторы солеотложений",
        },
        {
          _id: 7,
          to: "product",
          text: " РП-ИСО-1 (марка-А)",
        },
        {
          _id: 8,
          to: "product",
          text: " РП-ИСО-1 (марка-Б)",
        },
        {
          _id: 9,
          to: "product",
          text: "Ингибиторы АСПО",
        },
        {
          _id: 10,
          to: "product",
          text: "  РП-ИНПАР-1 (марка-А)",
        },
        {
          _id: 11,
          to: "product",
          text: " РП-ИНПАР-1 (марка-Б)",
        },
      ],
    },
    {
      id: 3,
      title: "Реализуемая продукция компаний партнеров",
      to: "/product/partner-companies-products",
      productLinks: [
        {
          _id: 1,
          to: "product",
          text: "Натр едкий технический марки ",
        },
        {
          _id: 2,
          to: "product",
          text: "ТР ГОСТ 55064-2012",
        },
        {
          _id: 3,
          to: "product",
          text: " Соль техническая",
        },
        {
          _id: 4,
          to: "product",
          text: "Соль техническая концентрат",
        },
        {
          _id: 5,
          to: "product",
          text: 'минеральный "Галит" марка С',
        },
        {
          _id: 6,
          to: "product",
          text: "Лимонная кислота (моногидрат)",
        },
      ],
    },
  ];

  const certificates = [
    { id: 1, img: bezymyannyy },
    { id: 2, img: emulgator },
    { id: 3, img: ikk },
    { id: 4, img: inparr },
    { id: 5, img: emulgator },
  ];

  const slides = certificates.map((item) => ({
    src: item.img,
  }));

  return (
    <div className="product-page">
      <div className="page-head">
        <Link to={"/"} className="page-head__link">
          Главная
        </Link>{" "}
        / <p className="text">Услуги</p>
      </div>

      <div className="product-page__header">
        <h1 className="page-title">Продукция</h1>
      </div>

      <div className="product-wrapper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoHeight={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            450: { slidesPerView: 1.5, spaceBetween: 14 },
            650: { slidesPerView: 2.2, spaceBetween: 20 },
            1025: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="product-list"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="card-item">
              <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <ul className="product-links">
                  {product.productLinks.map((link) => (
                    <li key={link._id} className="link-item">
                      <Link to={link.to} className="product-link">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Button text="подробнее" to={product.to} />
            </SwiperSlide>
          ))}
        </Swiper>

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
      </div>

      <div className="certificates">
        <h2 className="certificates-title">сертификаты</h2>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoHeight={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1.5, spaceBetween: 15 },
              450: { slidesPerView: 2.5, spaceBetween: 15 },
              776: { slidesPerView: 3.7, spaceBetween: 18 },
              1025: { slidesPerView: 4, spaceBetween: 18 },
            }}
            loop={true}
            className="certificates-slider"
          >
            {certificates.map((item, index) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.img}
                  alt=""
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next">
            <svg
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.87061 19.4736L9.92844 11.148"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M2.87061 2.82373L9.92844 11.1493"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Download, Zoom, Fullscreen]}
      />

      <ContactModal isOpen={isOpen} close={() => setModal(false)} />
    </div>
  );
};

export default Product;
