import React from "react";

function ImagePopup({ card, onClose }) {
  return (
      <div
        className={`popup popup_type_image-popup ${card ? "popup_opened" : ""}`}
      >
        <div className="popup__image-container ">
          <button
            type="button"
            className="popup__button-close"
            onClick={onClose}
            aria-label="Зыкрыть форму"
          />
          <img
            src={card ? card.link : ""}
            alt={card ? card.name : ""}
            className="popup__image"
          />
          <h2 className="popup__image-title">{card ? card.name : ""}</h2>
        </div>
      </div>
  );
}

export default ImagePopup;
