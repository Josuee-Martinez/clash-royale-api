import { combineReducers } from "redux";

import clanData from "./clanData";
import playerData from "./playerData";
import chestData from "./chestData";
import battleData from "./battleData";
import riverRaceData from "./riverRaceData";

export default combineReducers({
  clanData,
  playerData,
  chestData,
  battleData,
  riverRaceData,
});
