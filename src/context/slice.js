import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
  lives: 3,
  counter: 0,
  questionType: "country",
  displayDialog: false,
  countries: [], // Du kannst diese Liste initialisieren, wie du möchtest
  leaderboard: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    incrementPoints: (state) => {
      state.points += 1;
    },
    decrementLives: (state) => {
      state.lives -= 1;
    },
    incrementCounter: (state) => {
      state.counter += 1;
    },
    setQuestionType: (state, action) => {
      state.questionType = action.payload;
    },
    setDisplayDialog: (state, action) => {
      state.displayDialog = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },

    setLeaderBoard: (state, action) => {
      state.leaderboard = action.payload;
    },
  },
});

export const {
  incrementPoints,
  decrementLives,
  incrementCounter,
  setQuestionType,
  setDisplayDialog,
  setCountries,
  setCurrentCountry,
  setLeaderBoard,
} = gameSlice.actions;

export default gameSlice.reducer;
