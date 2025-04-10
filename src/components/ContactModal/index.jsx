import React from "react";
import ContactForm from "../ContactForm";
import "./css/contact-modal.css";
import CloseIcon from "@/assets/img/icons/close.svg";

const ContactModal = ({ isOpen, close }) => {
  return (
    <div className={"contact-modal " + (isOpen ? "show" : "")}>
      <div className="modal-content">
        <button className="close-btn" onClick={close}>
          <img src={CloseIcon} alt="" />
        </button>
        <div className="modal-header">
          <h2 className="modal-title">
            мы перезвоним и ответим на ваши вопросы
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
