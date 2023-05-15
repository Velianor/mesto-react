import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />
      <Main
        onEditPopup={handleEditProfileClick}
        onAddPopup={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        onClose={closeAllPopups}
      >
        <input
          id="username-input"
          type="text"
          name="username"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          minLength={2}
          maxLength={40}
          required
        />
        <span className="popup__error username-input-error"></span>

        <input
          id="description-input"
          type="text"
          name="info"
          className="popup__input popup__input_type_description"
          placeholder="О себе"
          minLength={2}
          maxLength={200}
          required
        />
        <span className="popup__error description-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name="card"
        title="Новое место"
        buttonText="Создать"
        onClose={closeAllPopups}
      >
        <input
          id="name-input"
          type="text"
          name="name"
          className="popup__input popup__input_type_title"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required
        />
        <span className="popup__error name-input-error"></span>
        <input
          id="url-input"
          type="url"
          name="link"
          className="popup__input popup__input_type_image"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error url-input-error"></span>
      </PopupWithForm>

      <ImagePopup
        isOpen={selectedCard}
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        button="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        onClose={closeAllPopups}
      >
        <input
          id="input-avatar"
          type="url"
          name="avatar"
          className="popup__input popup__input_avatar_link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error input-avatar-error"></span>
      </PopupWithForm>
    </>
  );
}

export default App;
