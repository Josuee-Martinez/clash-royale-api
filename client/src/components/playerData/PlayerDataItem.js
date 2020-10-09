import React from "react";
import classiChallenge from "../../assets/cc.png";
import grandChallenge from "../../assets/gc.png";

const PlayerDataItem = ({ playerData }) => {
  return (
    <div className="card my-5">
      <div className="card-body center">
        <p className="card-text">{playerData.name}'s Current Deck</p>
        <div>
          {playerData.currentDeck === null
            ? ""
            : playerData.currentDeck.map((card) => (
                <figure className="deck" key={card.id}>
                  <img src={card.iconUrls.medium} alt="deck-cards" />
                </figure>
              ))}
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <p>Trophies</p>
            <p>{playerData.trophies}</p>
          </div>
          <div className="col-6">
            <p>Highest Trophies</p>
            <p>{playerData.bestTrophies}</p>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-6">
            <p>Donations</p>
            <p>{playerData.donations}</p>
          </div>
          <div className="col-6">
            <p>Total Donations</p>
            <p>{playerData.totalDonations}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <p>War Day Wins</p>

            <p>{playerData.warDayWins}</p>
          </div>
          <div className="col-6">
            <p>Challenge Wins</p>
            <p>{playerData.challengeMaxWins}</p>
          </div>
        </div>
        <hr />

        <h5 className="card-text">Badges</h5>

        {playerData.badges === undefined
          ? ""
          : playerData.badges.map((badge) => (
              <figure className="deck">
                <img
                  src={
                    badge.name === "Classic12Wins"
                      ? classiChallenge
                      : badge.name === "Grand12Wins"
                      ? grandChallenge
                      : ""
                  }
                />
              </figure>
            ))}
      </div>
    </div>
  );
};

export default PlayerDataItem;
