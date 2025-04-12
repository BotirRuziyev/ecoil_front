import React from "react";
import "./css/news.css";
import upload from "@/assets/img/icons/upload.svg";
import add from "@/assets/img/icons/add.svg";

const DashboardNews = () => {
  return (
    <div className="dashboard-news">
      <div className="main-container">
        <div className="dashboard-news__head">
          <button className="article-btn">Статья</button>
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
              <span className="check-icon">✅</span>
            </div>
            <div className="form-control">
              <label htmlFor="#" className="label">
                Активность
              </label>
              <span className="check-icon">✅</span>
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
              <label htmlFor="upload-img" className="upload-img">
                <img src={upload} alt="" />
              </label>
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

export default DashboardNews;
