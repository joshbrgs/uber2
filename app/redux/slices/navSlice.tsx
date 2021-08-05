import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTime: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state: { origin: any }, action: { payload: any }) => {
      state.origin = action.payload;
    },
    setDestination: (state: { destination: any }, action: { payload: any }) => {
      state.destination = action.payload;
    },
    setTravelTime: (state: { travelTime: any }, action: { payload: any }) => {
      state.travelTime = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTime } = navSlice.actions;

//Selectors
export const selectOrigin = (state: { nav: { origin: any } }) =>
  state.nav.origin;
export const selectDestination = (state: { nav: { destination: any } }) =>
  state.nav.destination;
export const selectTravelTime = (state: { nav: { travelTime: any } }) =>
  state.nav.travelTime;

export default navSlice.reducer;
