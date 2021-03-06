import { PLAYER_DATA, PLAYER_ERROR } from "../actions/types";

const initialState = {
  name: "",
  currentDeck: [],
  badges: [],
  expLevel: "",
  wins: "",
  losses: "",
  threeCrownWins: "",
  trophies: "",
  bestTrophies: "",
  challengeCardsWins: "",
  challengeMaxWins: "",
  challengeCardsWon: "",
  role: "",
  donations: "",
  donationsReceived: "",
  totalDonations: "",
  warDayWins: "",
  clanCardsCollected: "",
  arena: "",
  errorMessage: "",
  cards: [],
  bestSeason: {},
  previousSeason: {},
  currentSeason: {},
  challenges: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PLAYER_DATA:
      console.log(payload);
      return {
        ...state,
        name: payload.name,
        currentDeck: payload.currentDeck,
        badges: payload.badges,
        expLevel: payload.expLevel,
        trophies: payload.trophies,
        wins: payload.wins,
        bestTrophies: payload.bestTrophies,
        challengeCardsWins: payload.challengeCardsWins,
        challengeMaxWins: payload.challengeMaxWins,
        role: payload.role,
        donations: payload.donations,
        donationsReceived: payload.donationsReceived,
        totalDonations: payload.totalDonations,
        warDayWins: payload.warDayWins,
        clanCardsCollected: payload.clanCardsCollected,
        arena: payload.arena.name,
        cards: payload.cards,
        losses: payload.losses,
        threeCrownWins: payload.threeCrownWins,
        challengeCardsWon: payload.challengeCardsWon,
        bestSeason: payload.leagueStatistics.bestSeason,
        previousSeason: payload.leagueStatistics.previousSeason,
        currentSeason: payload.leagueStatistics.currentSeason,
        challenges: payload.badges.filter((badge) => {
          return badge.name === "Classic12Wins" || badge.name === "Grand12Wins";
        }),
      };
    case PLAYER_ERROR:
      // console.log(payload.error.message);
      return {
        ...state,
        errorMessage: payload.error.message,
      };
    default:
      return state;
  }
}
