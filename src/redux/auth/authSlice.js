import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilledRegister,
  handleFulfilledLogin,
  handleFulfilledLogout,
  handlerejectedRegister,
  handlerejectedLogin,
  handlerejectedLogout,
  handlePending,
} from '../../components/services/services';
import {
  logInThunk,
  logOutThunk,
  refreshThunk,
  registerThunk,
} from './auth-operations';
import { updatedUserAvatar } from '../profileSettings/operations';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    avatarLargeURL: null,
    targetBmr: null,
    targetTime: null,
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
      isParams: false,
    },
  },
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
  isRefreshing: false,
  error: null,
  token: '',
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleUpdateAvatarFulfilled = (state, action) => {
  console.log('action.payload', action.payload);
  state.user.avatarLargeURL = action.payload.avatarLargeURL;
  state.user.avatarURL = action.payload.avatarLargeURL;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsParams: (state) => {
      state.user.isParams = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, handleFulfilledRegister)
      .addCase(registerThunk.rejected, handlerejectedRegister)

      .addCase(logInThunk.pending, handlePending)
      .addCase(logInThunk.fulfilled, handleFulfilledLogin)
      .addCase(logInThunk.rejected, handlerejectedLogin)

      .addCase(logOutThunk.pending, handlePending)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogout)
      .addCase(logOutThunk.rejected, handlerejectedLogout)

      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        console.log('first', action);
        state.user = { ...action.payload };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updatedUserAvatar.pending, handlePending)
      .addCase(updatedUserAvatar.rejected, handleRejected)
      .addCase(updatedUserAvatar.fulfilled, handleUpdateAvatarFulfilled);
  },
});
export const { setIsParams } = authSlice.actions;
export const authReducer = authSlice.reducer;
