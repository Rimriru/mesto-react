import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

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
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map(c => (c._id === card._id ? newCard : c)));
    });
  };

  const handleCardRemove = (cardId) => {
    api.removeCard(cardId).then(() => {
      let updatedCards = cards.filter(card => card._id !== cardId);
      setCards(updatedCards);
    });
  };

  const handleUpdateUser = ({name, about}) => {
    api.editUserInfo({name, about})
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handlerEditAvatarClick}
        onEditProfile={handlerEditProfileClick}
        onAddPlace={handlerAddPlaceClick}
        onCardClick={handleCardClick}
        onLikeClick={handleCardLike}
        onRemoveClick={handleCardRemove}
        cards={cards}
        setCards={setCards}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
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
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm
        name="confirm"
        title="Вы&nbsp;уверены?"
        textSubmitButton="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
        isOpen={isImagePopupOpen}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
