import axios from "axios";
import { CHEST_DATA, CHEST_ERROR } from "./types";

export const getChestData = tag => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3001/api/chest/${tag}`);

    dispatch({ type: CHEST_DATA, payload: res.data });
  } catch (error) {
    dispatch({
      type: CHEST_ERROR,
      payload: { error }
    });
  }
};
