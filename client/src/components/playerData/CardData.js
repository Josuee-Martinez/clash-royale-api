import React from "react";

const CardData = ({ playerData }) => {
  return (
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button
            className="btn collapsed btn-lg btn-block btn-primary"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Cards
          </button>
        </h5>
      </div>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
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
