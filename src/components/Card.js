import React from "react";

export default function Card(props) {
  const {name, link, likes} = props.card;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <img className="element__image" src={link} alt={name} onClick={handleClick}/>
      <div className="element__container">
        <h2 className="element__name">{name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button"></button>
          <p className="element__likes-counter">{likes.length}</p>
        </div>
      </div>
      <button className="element__remove-button" type="button"></button>
    </article>
  );
}
