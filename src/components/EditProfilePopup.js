import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onLoading }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = useContext(CurrentUserContext);
  
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about)
}, [currentUser, isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }


  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="profile"
      title="Редактировать профиль"
      buttonText={onLoading ? `Сохранение...` : `Сохранить`}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="username-input"
        required=""
        type="text"
        name="username"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        minLength={2}
        maxLength={40}
        onChange={handleChangeName}
        value={name || ""}
      />
      <span id="username-input-error" className="popup__error" />
      <input
        id="description-input"
        required=""
        type="text"
        name="info"
        className="popup__input popup__input_type_description"
        placeholder="О себе"
        minLength={2}
        maxLength={200}
        onChange={handleChangeDescription}
        value={description || ""}
      />
     <span id="description-input-error" className="popup__error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
