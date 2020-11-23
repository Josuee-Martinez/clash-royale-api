import React from "react";
import { Fragment } from "react";
import Moment from "react-moment";
import * as uuid from "uuid";

const BattleData = ({ battleData }) => {
  return (
    <div className="card mb-2">
      <button
        class="btn btn-dark"
        type="button"
        data-toggle="collapse"
        data-target="#collapseBattle"
        aria-expanded="false"
        aria-controls="collapseBattle"
      >
        Battles
      </button>
      <div class="collapse" id="collapseBattle">
        <div className="card-body center">
          {battleData.battles === null
            ? ""
            : battleData.battles.map((battle) => (
                <div key={uuid.v4()}>
                  <div>
                    <h6>
                      {battle.type === "PvP"
                        ? "Ladder"
                        : battle.type === "boatBattle"
                        ? "Boat Battle"
                        : battle.type}
                    </h6>
                    <span>{battle.team[0].crowns}</span>
                    <span>-</span>
                    <span>{battle.opponent[0].crowns}</span>

                    <div className="row">
                      {battle.team.map((team) => (
                        <div className="col-6" key={uuid.v4()}>
                          <p>{team.name}</p>
                          {team.cards.map((card) => (
                            <figure className="battleDeck" key={uuid.v4()}>
                              <img
                                src={
                                  card.name === null ? "" : card.iconUrls.medium
                                }
                                alt=""
                              />
                            </figure>
                          ))}
                          <p>
                            {team.trophyChange > 0
                              ? `+ ${team.trophyChange} 🏆`
                              : team.trophyChange < 0
                              ? `${team.trophyChange} 🏆`
                              : ""}
                          </p>
                        </div>
                      ))}
                      {battle.opponent.map((opponent) => (
                        <div className="col-6" key={uuid.v4()}>
                          <p>{opponent.name}</p>
                          {opponent.cards.map((card) => (
                            <figure className="battleDeck" key={uuid.v4()}>
                              <img
                                src={
                                  card.name === null ? "" : card.iconUrls.medium
                                }
                                alt=""
                              />
                            </figure>
                          ))}
                          <p>
                            {opponent.trophyChange > 0
                              ? `+ ${opponent.trophyChange} 🏆`
                              : opponent.trophyChange < 0
                              ? `${opponent.trophyChange} 🏆`
                              : ""}
                          </p>
                        </div>
                      ))}
                    </div>
                    <span>
                      <Moment fromNow>{battle.battleTime}</Moment>
                    </span>
                  </div>
                  <hr></hr>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default BattleData;
