import axios from "axios";
import { PLAYER_DATA, PLAYER_ERROR } from "./types";

export const getPlayerData = tag => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3001/api/player/${tag}`);

    dispatch({ type: PLAYER_DATA, payload: res.data });
  } catch (error) {
    dispatch({
      type: PLAYER_ERROR,
      payload: { error }
    });
  }
};
