import { BATTLE_DATA, BATTLE_ERROR } from "../actions/types";

const initialState = {
  battles: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BATTLE_DATA:
      console.log(payload);
      return {
        ...state,
        battles: payload,
      };
    case BATTLE_ERROR:
      console.log(payload.error.message);
      return {
        ...state,
        errorMessage: payload.error.message,
      };
    default:
      return state;
  }
}
