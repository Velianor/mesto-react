import React from "react";

function Card({card, onCardClick}) {

   
    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className="element">
            <button type="button" className="element__delete" ></button>
                <img src={card.link} alt={card.name} onClick={handleClick} className="element__img" />
            
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <button type="button" className="element__button" aria-label="Лайк">
                    <p className="element__button-check">{card.likes.length}</p>
                </button>
            </div>
        </div>
    )
};

export default Card;