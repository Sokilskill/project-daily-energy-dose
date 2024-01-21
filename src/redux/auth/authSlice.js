import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshThunk,
  registerThunk,
} from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrl: null,
    bodyParams: {
      dailyIntakeCalories: null,
      dailyNormOfSport: null,
      height: null,
      currentWeight: null,
      desiredWeight: null,
      birthday: null,
      blood: null,
      sex: null,
      levelActivity: null,
    },
  },
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
  isRefreshing: false,
  error: null,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.error.message || 'Registration failed';
      })
      .addCase(logInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logInThunk.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logOutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        return {
          ...state.initialstate,
          user: { name: null, email: null, avatarUrl: null },
          token: null,
          isLoggedIn: false,
          isLoading: false,
        };
      })

      .addCase(logOutThunk.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

// state.user = { name: null, email: null };
// state.token = null;
// state.isLoggedIn = false;
// state.isLoading = false;
