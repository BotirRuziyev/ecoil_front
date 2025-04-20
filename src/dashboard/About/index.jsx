import React from "react";
import upload from "@/assets/img/icons/upload.svg";
import "../Home/css/home.css";

const DashboardAbout = () => {
  return (
    <div className="dashboard-page">
      <div className="main-container">
        <form action="#" className="dashboard-form">
          <div className="form-control">
            <label htmlFor="#" className="label">
              добавить название
            </label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-control">
            <label htmlFor="#" className="label">
              фавикон
            </label>
            <label htmlFor="upload-img" className="upload-img">
              <img src={upload} alt="" />
            </label>
            <input type="file" id="upload-img" className="upload-img__input" />
          </div>
          <div className="form-control">
            <label htmlFor="#" className="label">
              заголовок
            </label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-control">
            <label htmlFor="annotation" className="label">
              описание
            </label>
            <div className="textarea-wrapper">
              <div className="textarea-head"></div>
              <textarea
                name="annotation"
                id="annotation"
                rows={5}
                className="form-textarea"
              ></textarea>
            </div>
          </div>
          <div className="form-control">
            <button className="save-btn">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardAbout;
