import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handlerEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handlerEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handlerAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handlerEditAvatarClick}
        onEditProfile={handlerEditProfileClick}
        onAddPlace={handlerAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать&nbsp;профиль"
        textSubmitButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="name"
          className="popup__person"
          type="text"
          name="name"
          placeholder="Введите имя профиля"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error name-error">#</span>
        <input
          id="description"
          className="popup__person"
          type="text"
          name="about"
          placeholder="Введите описание профиля"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error description-error">#</span>
      </PopupWithForm>
      <PopupWithForm
        name="new-card"
        title="Новое&nbsp;место"
        textSubmitButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="card-name"
          className="popup__person"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__error card-name-error">#</span>
        <input
          id="card-link"
          className="popup__person"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error card-link-error">#</span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить&nbsp;аватар"
        textSubmitButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        title="Вы&nbsp;уверены?"
        textSubmitButton="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup onClose={closeAllPopups} card={selectedCard} isOpen={isImagePopupOpen}/>
    </>
  );
}

export default App;
