import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, onLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="card"
      title="Новое место"
      buttonText={onLoading ? `Создание...` : `Создать`}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        type="text"
        name="name"
        className="popup__input popup__input_type_title"
        placeholder="Название"
        minLength={2}
        maxLength={30}
        required={true}
        value={name}
        onChange={handleChangeName}
      />
      <span id="name-input-error" className="popup__error" />
      <input
        id="input-link"
        required={true}
        type="url"
        name="link"
        className="popup__input popup__input_card_link"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleChangeLink}
      />
      <span id="url-input-error" className="popup__error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
