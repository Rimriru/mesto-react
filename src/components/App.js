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
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
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
    setSelectedCard(null);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map(c => (c._id === card._id ? newCard : c)));
    })
    .catch(err => console.log(err));
  };

  const handleCardRemove = (cardId) => {
    api.removeCard(cardId).then(() => {
      let updatedCards = cards.filter(card => card._id !== cardId);
      setCards(updatedCards);
    })
    .catch(err => console.log(err));
  };

  const handleUpdateUser = ({name, about}) => {
    api.editUserInfo({name, about})
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(err => console.log(err));
  }

  const handleUpdateAvatar = ({avatar}) => {
    api.changeUserAvatar({avatar})
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
  }

  const handleAddPlaceSubmit = ({name, link}) => {
    api.addNewCard({name, link})
    .then(newCard => {
      setCards([newCard, ...cards]);
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
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <PopupWithForm
        name="confirm"
        title="Вы&nbsp;уверены?"
        textSubmitButton="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
