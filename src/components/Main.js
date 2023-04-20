import React from "react";
import avatarPath from "../images/default-avatar.png";

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <button className="profile__avatar">
            <img
              className="profile__avatar-image"
              src={avatarPath}
              alt="Аватар пользователя"
            />
            <div className="profile__avatar-overlay">
              <div className="profile__avatar-icon"></div>
            </div>
          </button>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name"></h1>
              <button className="profile__edit-button" type="button"></button>
            </div>
            <p className="profile__description"></p>
          </div>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="elements" aria-label="Карточки"></section>
    </main>
  );
}
