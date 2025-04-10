import React from "react";
import "./css/contact-form.css";
import Input from "../Input";
import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="contact-form__wrapper">
      <form action="#" className="contact-form">
        <Input id="name" type="text" label="Имя*" placeholder="Ваше имя" />
        <Input
          id="phone"
          type="text"
          label="Телефон*"
          placeholder="+7 (___) ___-__-__"
        />
        <Input
          id="email"
          type="email"
          label="E-mail*"
          placeholder="E-mail имя"
        />
        <div className="form-control checkbox-control">
          <input id="checkboxone" type="checkbox" className="form-chechbox" />
          <label htmlFor="checkboxone" className="label">
            Я согласен с Политикой обработки персональных данных
          </label>
        </div>
        <div className="form-control checkbox-control">
          <input id="checkboxtwo" type="checkbox" className="form-chechbox" />
          <label htmlFor="checkboxtwo" className="label">
            Я даю согласие на обработку персональных данных в соответствии с
            политикой обработки персональных данных
          </label>
        </div>
        <Button text="Отправить" />
      </form>
    </div>
  );
};

export default ContactForm;
