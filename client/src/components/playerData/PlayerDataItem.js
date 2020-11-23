import React, { useEffect } from "react";
import classiChallenge from "../../assets/cc.png";
import grandChallenge from "../../assets/gc.png";

const PlayerDataItem = ({ playerData }) => {
  return (
    <div>
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
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            Highest tropies{" "}
            <span className="right-align">{playerData.bestTrophies}</span>
          </li>
          <li className="list-group-item">
            War day wins{" "}
            <span className="right-align">{playerData.warDayWins}</span>
          </li>
          <li className="list-group-item">
            Lifetime donations{" "}
            <span className="right-align">{playerData.totalDonations}</span>
          </li>
          <li className="list-group-item">
            Clan cards collected{" "}
            <span className="right-align">{playerData.clanCardsCollected}</span>
          </li>
          <li className="list-group-item">
            Wins <span className="right-align">{playerData.wins}</span>
          </li>
          <li className="list-group-item">
            Losses <span className="right-align">{playerData.losses}</span>
          </li>
          <li className="list-group-item">
            Three crown wins{" "}
            <span className="right-align">{playerData.threeCrownWins}</span>
          </li>
        </ul>
      </div>

      <div className="card my-5">
        <div className="card-body center">
          <h4>League Stats</h4>
        </div>
        <div className="card-body center">
          <p className="card-text">Best Season</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            Trophies{" "}
            <span className="right-align">
              {playerData.bestSeason.trophies}
            </span>
          </li>
          <li className="list-group-item">
            Season{" "}
            <span className="right-align">{playerData.bestSeason.id}</span>
          </li>
        </ul>

        <div className="card-body center">
          <p className="card-text">Previous Season</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            Trophies{" "}
            <span className="right-align">
              {playerData.previousSeason.trophies}
            </span>
          </li>
          <li className="list-group-item">
            Season{" "}
            <span className="right-align">{playerData.previousSeason.id}</span>
          </li>
        </ul>

        <div className="card-body center">
          <p className="card-text">Current Season</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            Trophies{" "}
            <span className="right-align">
              {playerData.currentSeason.trophies}
            </span>
          </li>
          <li className="list-group-item">
            Season highest{" "}
            <span className="right-align">
              {playerData.currentSeason.bestTrophies}
            </span>
          </li>
        </ul>
      </div>

      <div className="card my-5">
        <div className="card-body center">
          <h4>Challenge Stats</h4>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            Challenge Wins{" "}
            <span className="right-align">{playerData.challengeMaxWins}</span>
          </li>
          <li className="list-group-item">
            Challenge cards won{" "}
            <span className="right-align">{playerData.challengeCardsWon}</span>
          </li>

          {playerData.challenges.map((item, i) => (
            <li className="list-group-item" key={i}>
              {item.name === "Classic12Wins"
                ? "Classic challenge wins"
                : item.name === "Grand12Wins"
                ? "Grand challenge wins"
                : ""}
              <span className="right-align">{item.progress}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card my-5">
        <div className="card-body center">
          <p className="card-text">Battle Stats</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            Highest tropies{" "}
            <span className="right-align">{playerData.bestTrophies}</span>
          </li>
          <li className="list-group-item">
            War day wins{" "}
            <span className="right-align">{playerData.warDayWins}</span>
          </li>
          <li className="list-group-item">
            Lifetime donations{" "}
            <span className="right-align">{playerData.totalDonations}</span>
          </li>
          <li className="list-group-item">
            Clan cards collected{" "}
            <span className="right-align">{playerData.clanCardsCollected}</span>
          </li>
          <li className="list-group-item">
            Wins <span className="right-align">{playerData.wins}</span>
          </li>
          <li className="list-group-item">
            Losses <span className="right-align">{playerData.losses}</span>
          </li>
          <li className="list-group-item">
            Three crown wins{" "}
            <span className="right-align">{playerData.threeCrownWins}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerDataItem;
