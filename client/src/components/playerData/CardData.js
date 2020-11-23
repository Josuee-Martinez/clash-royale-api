import React from "react";

const CardData = ({ playerData }) => {
  return (
    <div className="card mb-2">
      <button
        className="btn btn-dark"
        type="button"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Cards
      </button>

      <div id="collapseTwo" className="collapse">
        <div className="card-body center">
          <h4 className="card-text">Cards Found</h4>
          <p>{playerData.cards.length}</p>
          {playerData.cards === null
            ? ""
            : playerData.cards
                .sort((a, b) => {
                  return a.maxLevel - a.level - (b.maxLevel - b.level);
                })
                .map((card) => (
                  <figure className="deck" key={card.id}>
                    <img src={card.iconUrls.medium} alt="deck-cards" />
                    <p>
                      Lvl{" "}
                      {card.maxLevel === 8
                        ? card.level + 5
                        : card.maxLevel === 11
                        ? card.level + 2
                        : card.maxLevel === 5
                        ? card.level + 8
                        : card.level}
                    </p>
                  </figure>
                ))}
        </div>
      </div>
    </div>
  );
};

export default CardData;
