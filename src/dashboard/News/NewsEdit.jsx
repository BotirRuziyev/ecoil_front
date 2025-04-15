import React from "react";
import "./css/news.css";
import { Link } from "react-router-dom";
import add from "@/assets/img/icons/add.svg";
import uploadImg from "@/assets/img/upload-img.png";
import check from "@/assets/img/icons/check-mark.png";

const DashboardNewsEdit = () => {
  return (
    <div className="dashboard-news__edit">
      <div className="main-container">
        <div className="dashboard-news__head">
          <button className="article-edit__btn">Редактирование статьи</button>
          <Link to={"#"} className="back-list__link">
            Вернуться к списку
          </Link>
        </div>
        <div className="dashboard-news__form">
          <form action="#" className="form">
            <div className="form-control">
              <label htmlFor="#" className="label">
                Заголовок статьи
              </label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-control">
              <label htmlFor="#" className="label">
                Отображать на главной странице
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
                Аннотация
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
              <label htmlFor="текст" className="label">
                текст
              </label>
              <div className="textarea-wrapper">
                <div className="textarea-head"></div>
                <textarea
                  name="текст"
                  id="текст"
                  rows={19}
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
              <input
                type="file"
                id="upload-img"
                className="upload-img__input"
              />
              <button className="add-btn">
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
    </div>
  );
};

export default DashboardNewsEdit;
