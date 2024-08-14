import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
  lives: 3,
  counter: 0,
  questionType: "country",
  displayDialog: false,
  countries: [], // Du kannst diese Liste initialisieren, wie du möchtest
  currentCountry: {}, // Du kannst diese Struktur initialisieren, wie du möchtest
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
    setCurrentCountry: (state, action) => {
      state.currentCountry = action.payload;
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
} = gameSlice.actions;

export default gameSlice.reducer;
