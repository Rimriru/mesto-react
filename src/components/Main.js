import React from "react";
import avatarPath from "../images/default-avatar.png";
import { api } from "../utils/api.js";
import Card from "./Card.js";

export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState(avatarPath);
  const [cards, setCards] = React.useState([]);

  React.useEffect((() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });

    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }), []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <button className="profile__avatar" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar-image"
              src={userAvatar}
              alt="Аватар пользователя"
            />
            <div className="profile__avatar-overlay">
              <div className="profile__avatar-icon"></div>
            </div>
          </button>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements" aria-label="Карточки">
        {cards.map(card => {
          return <Card card={card} key={card._id} onCardClick={props.onCardClick} />;
        })}
      </section>
    </main>
  );
}
