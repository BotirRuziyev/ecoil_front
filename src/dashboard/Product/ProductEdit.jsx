import React from "react";
import "../Home/css/home.css";
import add from "@/assets/img/icons/add.svg";
import uploadImg from "@/assets/img/upload-img.png";
import check from "@/assets/img/icons/check-mark.png";

const DashboardProductEdit = () => {
  return (
    <div className="dashboard-page">
      <div className="main-container">
        <form action="#" className="dashboard-form">
          <div className="form-control">
            <label htmlFor="#" className="label">
              Название
            </label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-control">
            <label htmlFor="#" className="label">
              Отображать на Услуги странице
            </label>
            <label htmlFor="checkbox" className="check-input">
              <input type="checkbox" id="checkbox" />
              <span className="checkbox-icon">
                <img src={check} alt="" />
              </span>
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="#" className="label">
              Активность
            </label>
            <label htmlFor="activity" className="check-input">
              <input type="checkbox" id="activity" />
              <span className="checkbox-icon">
                <img src={check} alt="" />
              </span>
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="#" className="label">
              Категория статьи
            </label>
            <div className="select-container">
              <select
                defaultValue="Анализ меди"
                name="analysis"
                id="analysis"
                className="form-select"
              >
                <option value="Анализ меди">Анализ меди</option>
                <option value="Анализ меди2">Анализ меди2</option>
                <option value="Анализ меди3">Анализ меди3</option>
                <option value="Анализ меди4">Анализ меди4</option>
              </select>
            </div>
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
            <label htmlFor="#" className="label">
              Изображение
            </label>
            <div className="uploaded-image">
              <img src={uploadImg} alt="" />
            </div>
            <input type="file" id="upload-img" className="upload-img__input" />
            <button className="add-btn edit">
              <img src={add} alt="" />
              Добавить еще
            </button>
          </div>
          <div className="form-control">
            <button className="save-btn">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardProductEdit;
