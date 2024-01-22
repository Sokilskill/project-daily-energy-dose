import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isErrorPage: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // інші екшени...

    setErrorPage: (state, action) => {
      state.isErrorPage = action.payload;
    },
  },
});

export const { setErrorPage } = authSlice.actions;
export const errorPageReducer = authSlice.reducer;
