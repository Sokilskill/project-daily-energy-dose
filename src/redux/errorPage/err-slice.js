import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isErrorPage: false,
};

const errorSlice = createSlice({
  name: 'errorPage',
  initialState,
  reducers: {
    setErrorPage: (state, action) => {
      state.isErrorPage = action.payload;
    },
  },
});

export const { setErrorPage } = errorSlice.actions;
export const errorPageReducer = errorSlice.reducer;
