import { CLAN_DATA, CLAN_ERROR } from "../actions/types";

const initialState = {
  description: "",
  name: "",
  members: [],
  tag: "",
  clanWarTrophies: "",
  requiredTrophies: "",
  location: "",
  clanScore: "",
  errorMessage: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CLAN_DATA:
      console.log(payload);
      return {
        ...state,
        description: payload.description,
        name: payload.name,
        members: payload.memberList,
        tag: payload.tag,
        clanWarTrophies: payload.clanWarTrophies,
        requiredTrophies: payload.requiredTrophies,
        location: payload.location.countryCode,
        clanScore: payload.clanScore,
      };
    case CLAN_ERROR:
      console.log(payload.error.message);
      return {
        ...state,
        errorMessage: payload.error.message,
      };
    default:
      return state;
  }
}
