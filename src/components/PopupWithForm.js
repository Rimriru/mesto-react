import React from 'react';

export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <h2 className={`popup__heading ${props.isConfirmPopup && "popup__heading_type_confirm"}`}>{props.title}</h2>
          <form
            className={`popup__form popup__form_type_${props.name}`}
            method="get"
            name={`popup-form-${props.name}`}
            noValidate
            onSubmit={props.onSubmit}
          >
            {props.children}
            <button className={`popup__submit-button ${props.isConfirmPopup && "popup__submit-button_type_confirm"}`} type="submit">{props.textSubmitButton || 'Сохранить'}</button>
          </form>
          <button className="popup__close-button" onClick={props.onClose}></button>
        </div>
      </div>
  ) 
}