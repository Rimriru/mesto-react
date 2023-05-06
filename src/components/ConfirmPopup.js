import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function ConfirmPopup(props) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onConfirm(props.cardId);
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы&nbsp;уверены?"
      textSubmitButton="Да"
      isConfirmPopup={true}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}
