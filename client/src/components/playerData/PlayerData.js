import React, { useEffect, Fragment } from "react";
import PlayerDataItem from "./PlayerDataItem";
import BattleData from "./BattleData";
import CardData from "./CardData";
import ChestData from "./ChestData";

import { connect } from "react-redux";
import { getPlayerData } from "../../actions/playerData";
import { getChestData } from "../../actions/chestData";
import { getBattleData } from "../../actions/battleData";

const PlayerData = ({
  playerData,
  getPlayerData,
  chestData,
  getChestData,
  battleData,
  getBattleData,
  match,
}) => {
  useEffect(() => {
    getPlayerData(match.params.tag);
    getChestData(match.params.tag);
    getBattleData(match.params.tag);
  }, [getPlayerData, match]);
  return (
    <div id="accordion">
      <div className="container">
        <PlayerDataItem playerData={playerData} />
        <BattleData battleData={battleData} />
        <CardData playerData={playerData} />
        <ChestData chestData={chestData} />
      </div>
    </div>
  );
};

PlayerData.propTypes = {};

const mapStateToProps = (state) => ({
  playerData: state.playerData,
  chestData: state.chestData,
  battleData: state.battleData,
});

export default connect(mapStateToProps, {
  getPlayerData,
  getChestData,
  getBattleData,
})(PlayerData);
