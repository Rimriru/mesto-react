import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
  const nameRef = React.useRef(null);
  const linkRef = React.useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    });
  }

  return (
    <PopupWithForm
        name="new-card"
        title="Новое&nbsp;место"
        textSubmitButton="Создать"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
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
          ref={nameRef}
        />
        <span className="popup__error card-name-error">#</span>
        <input
          id="card-link"
          className="popup__person"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          ref={linkRef}
        />
        <span className="popup__error card-link-error">#</span>
      </PopupWithForm>
  );
}