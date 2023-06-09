import React from "react";

export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_card-image ${props.card ? "popup_opened" : ''}`}>
      <figure className="popup__image-container">
        <img className="popup__image" src={props.card && props.card.link} alt={props.card && props.card.name} />
        <figcaption className="popup__image-caption">{props.card && props.card.name}</figcaption>
        <button className="popup__close-button" onClick={props.onClose}></button>
      </figure>
    </div>
  );
}
