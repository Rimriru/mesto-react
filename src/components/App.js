import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <h2 className="popup__heading">Редактировать&nbsp;профиль</h2>
          <form
            className="popup__form popup__form_type_profile"
            method="get"
            name="popup-form"
            novalidate
          >
            <input
              id="name"
              className="popup__person"
              type="text"
              name="name"
              placeholder="Введите имя профиля"
              required
              minlength="2"
              maxlength="40"
            />
            <span className="popup__error name-error">#</span>
            <input
              id="description"
              className="popup__person"
              type="text"
              name="about"
              placeholder="Введите описание профиля"
              required
              minlength="2"
              maxlength="200"
            />
            <span className="popup__error description-error">#</span>
            <button className="popup__submit-button" type="submit">
              Сохранить
            </button>
          </form>
          <button className="popup__close-button"></button>
        </div>
      </div>
      <div className="popup popup_type_new-card">
        <div className="popup__container">
          <h2 className="popup__heading">Новое&nbsp;место</h2>
          <form
            className="popup__form popup__form_type_new-card"
            method="get"
            name="popup-form"
            novalidate
          >
            <input
              id="card-name"
              className="popup__person popup__person_input_name"
              type="text"
              name="name"
              placeholder="Название"
              required
              minlength="2"
              maxlength="30"
            />
            <span className="popup__error card-name-error">#</span>
            <input
              id="card-link"
              className="popup__person popup__person_input_description"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error card-link-error">#</span>
            <button className="popup__submit-button" type="submit">
              Создать
            </button>
          </form>
          <button className="popup__close-button"></button>
        </div>
      </div>
      <div className="popup popup_type_card-image">
        <figure className="popup__image-container">
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__image-caption"></figcaption>
          <button className="popup__close-button"></button>
        </figure>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h2 className="popup__heading">Обновить&nbsp;аватар</h2>
          <form
            className="popup__form popup__form_type_avatar"
            method="get"
            name="popup-form"
            novalidate
          >
            <input
              id="avatar"
              className="popup__person"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error avatar-error">#</span>
            <button className="popup__submit-button" type="submit">
              Сохранить
            </button>
          </form>
          <button className="popup__close-button"></button>
        </div>
      </div>
      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <h2 className="popup__heading popup__heading_type_confirm">
            Вы&nbsp;уверены?
          </h2>
          <button
            className="popup__submit-button popup__submit-button_type_confirm"
            type="button"
          >
            Да
          </button>
          <button className="popup__close-button"></button>
        </div>
      </div>
      <template id="card">
        <article className="element">
          <img className="element__image" src="#" alt="" />
          <div className="element__container">
            <h2 className="element__name"></h2>
            <div className="element__like-container">
              <button className="element__like-button" type="button"></button>
              <p className="element__likes-counter">0</p>
            </div>
          </div>
          <button className="element__remove-button" type="button"></button>
        </article>
      </template>
    </>
  );
}

export default App;
