import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  general: [],
  science: [],
  business: [],
  entertainment: [],
  health: [],
  sports: [],
  technology: [],
  modal: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setGeneral: (state, action) => {
      state.general = action.payload;
    },
    setScience: (state, action) => {
      state.science = action.payload;
    },
    setBusiness: (state, action) => {
      state.business = action.payload;
    },
    setEntertainment: (state, action) => {
      state.entertainment = action.payload;
    },
    setHealth: (state, action) => {
      state.health = action.payload;
    },
    setSports: (state, action) => {
      state.sports = action.payload;
    },
    setTechnology: (state, action) => {
      state.technology = action.payload;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const {
  setGeneral,
  setScience,
  setBusiness,
  setEntertainment,
  setHealth,
  setSports,
  setTechnology,
  setModal,
} = newsSlice.actions;

export default newsSlice.reducer;
