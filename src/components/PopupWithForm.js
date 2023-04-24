import React from 'react';

export default function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ``}`}>
        <div className="popup__container">
          <h2 className="popup__heading">{props.title}</h2>
          <form
            className={`popup__form popup__form_type_${props.name}`}
            method="get"
            name="popup-form"
            noValidate
          >
            {props.children}
            <button className="popup__submit-button" type="submit">{props.textSubmitButton || 'Сохранить'}</button>
          </form>
          <button className="popup__close-button" onClick={props.onClose}></button>
        </div>
      </div>
  ) 
}