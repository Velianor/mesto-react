import React from "react";

function PopupWithForm({ isOpen, onClose,  title, children, buttonText }) {
  return (
    <>
      <div
        className={`popup  ${isOpen ? `popup_opened` : ""}`}
      >
        <div className="popup__container">
          <button
            type="button"
            className="popup__button-close"
            onClick={onClose}
            aria-label="Зыкрыть форму"
          />
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" name="nameForm">
            {children}
            <button
              type="submit"
              className="popup__button-save"
              aria-label="Сохранение данных"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
