import React from "react";
import avatarPath from "../images/default-avatar.png";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <button className="profile__avatar" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar-image"
              src={currentUser.avatar ? currentUser.avatar : avatarPath}
              alt="Аватар пользователя"
            />
            <div className="profile__avatar-overlay">
              <div className="profile__avatar-icon"></div>
            </div>
          </button>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements" aria-label="Карточки">
        {props.cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onLikeClick={props.onLikeClick}
              onRemoveClick={props.onRemoveClick}
            />
          );
        })}
      </section>
    </main>
  );
}
