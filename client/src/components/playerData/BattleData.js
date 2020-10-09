import React from "react";
import { Fragment } from "react";
import Moment from "react-moment";
import * as uuid from "uuid";

const BattleData = ({ battleData }) => {
  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn collapsed btn-lg btn-block btn-primary"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Battles
          </button>
        </h5>
      </div>
      <div
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body center">
          {battleData.battles === null
            ? ""
            : battleData.battles.map((battle) => (
                <div className="card my-5" key={uuid.v4()}>
                  <div className="card-body center">
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
                        </div>
                      ))}
                    </div>
                    <span>
                      <Moment fromNow>{battle.battleTime}</Moment>
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default BattleData;
