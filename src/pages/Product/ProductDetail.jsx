import React, { useState } from "react";
import "./css/product.css";
import ContactModal from "../../components/ContactModal";

const ProductDetail = () => {
  const [isOpen, setModal] = useState(false);
  const products = [
    {
      id: 1,
      title: "Натр едкий",
      description:
        "Натр едкий технический марки ТР ГОСТ 55064-2012  (гидроксид натрия, гидроокись натрия, каустическую соду, каустик, едкую щелочь), предназначенный для химической, нефтехимической. нефтеперерабатывающей, целлюлозно-бумажной, горнодобывающей, текстильной, пищевой (для обезжиривания и обработки технологического оборудования и тары) промышленности, цветной металлургии. энергетики, микроэлектроники и других отраслей.",
      grade: "Натр едкий технический марки ТР ГОСТ 55064-2012",
    },
    {
      id: 2,
      title: "Соль техническая",
    },
    {
      id: 3,
      title: "Лимонная кислота (моногидрат)",
    },
    {
      id: 4,
      title: "Концентрат минеральный галит",
    },
    {
      id: 5,
      title: "Ксантановая камедь",
    },
    {
      id: 6,
      title: "Толуол нефтяной, высший сорт",
    },
    {
      id: 7,
      title: "Лигносульфонат (жидкая и сухая форма)",
    },
    {
      id: 8,
      title: "Этиленгликоль",
    },
    {
      id: 9,
      title: "Триэтиленгликоль",
    },
    {
      id: 10,
      title: "Ортокслилол",
    },
    {
      id: 11,
      title: "Калий хлористый",
    },
    {
      id: 12,
      title: "Изопропиловый спирт абсолютированный",
    },
    {
      id: 13,
      title: "Солевыесоставыдляглушенияскважинплотностью от 1100-2350г/см3",
    },
    {
      id: 14,
      title: "Флокулянты",
    },
  ];
  return (
    <div className="product-detail">
      <div className="product-detail__header">
        <h1 className="page-title">Реализуемая продукция компаний партнеров</h1>
      </div>
      <ul className="product-info">
        {products.map((product) => {
          return (
            <li key={product.id} className="product-info__item">
              <h3 className="product-title">{product.title}</h3>
              {product.description || product.grade ? (
                <div className="product-info__body">
                  <div className="product-info__body-in">
                    <p className="product-description">{product.description}</p>
                    <h4 className="product-grade">{product.grade}</h4>
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
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

export default ProductDetail;
