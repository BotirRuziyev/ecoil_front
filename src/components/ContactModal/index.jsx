import React, { useEffect } from "react";
import ContactForm from "../ContactForm";
import "./css/contact-modal.css";
import CloseIcon from "@/assets/img/icons/close.svg";

const ContactModal = ({ isOpen, close }) => {
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
    <div className={"contact-modal " + (isOpen ? "show" : "")}>
      <div className="modal-content">
        <button className="close-btn" onClick={close}>
          <img src={CloseIcon} alt="" />
        </button>
        <div className="modal-content__in">
          <div className="modal-header">
            <h2 className="modal-title">
              мы перезвоним и ответим на ваши вопросы
            </h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
