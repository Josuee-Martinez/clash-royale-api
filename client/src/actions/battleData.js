import axios from "axios";
import { BATTLE_DATA, BATTLE_ERROR } from "./types";

export const getBattleData = tag => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3001/api/battle/${tag}`);

    dispatch({ type: BATTLE_DATA, payload: res.data });
  } catch (error) {
    dispatch({
      type: BATTLE_ERROR,
      payload: { error }
    });
  }
};
