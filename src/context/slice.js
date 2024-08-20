import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
  lifes: 3,
  counter: 0,
  questionType: "country",
  displayDialog: false,
  countries: [], // Du kannst diese Liste initialisieren, wie du möchtest
  leaderboard: [],
  name: "player 1",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPoints: (state, action) => {
      state.points = action.payload;
    },

    setLifes: (state, action) => {
      state.lifes = action.payload;
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
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLeaderBoard: (state, action) => {
      state.leaderboard = action.payload;
    },
  },
});

export const {
  setPoints,
  setLifes,
  incrementCounter,
  setQuestionType,
  setDisplayDialog,
  setCountries,
  setCurrentCountry,
  setLeaderBoard,
  setName,
} = gameSlice.actions;

export default gameSlice.reducer;
