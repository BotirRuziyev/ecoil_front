import React from "react";
import "./css/contact.css";

const DashboardContact = () => {
  return (
    <div className="dashboard-contact">
      <div className="main-container">
        <form action="#" className="contact-form">
          <div className="form-control">
            <label htmlFor="#" className="label">
              номер телефона
            </label>
            <input type="text" className="form-input" required />
          </div>
          <div className="form-control">
            <label htmlFor="#" className="label">
              почту
            </label>
            <input type="email" className="form-input" required />
          </div>
          <div className="form-control">
            <button className="save-btn">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardContact;
