import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  return (
    <PopupWithForm
        name="avatar"
        title="Обновить&nbsp;аватар"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <input
          id="avatar"
          className="popup__person"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error avatar-error">#</span>
      </PopupWithForm>
  );
}