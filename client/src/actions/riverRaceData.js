import axios from "axios";
import { WAR_DATA, WAR_ERROR } from "./types";

export const getRiverRaceData = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/api/war`);

    dispatch({ type: WAR_DATA, payload: res.data });
  } catch (error) {
    dispatch({
      type: WAR_ERROR,
      payload: { error },
    });
  }
};
