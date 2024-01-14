import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  addUserData,
  updateUserInfo,
  updatedUserAvatar,
} from './operations';

const initialState = {
  profile: {
    name: '',
    email: '',
    avatarURL: '',
    height: null,
    currentWeight: null,
    desireWeight: null,
    birthday: null,
    blood: null,
    sex: 'male',
    levelActivity: null,
    bmr: 0,
  },
  token: null,
  isLoading: false,
  error: null,
  isAuth: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleCurrentUserFulfilled = (state, action) => {
  state.profile = { ...action.payload };
  state.token = action.payload.token;
  state.isLoading = false;
  state.error = null;
  state.isAuth = true;
};

const handleAddUserDataFulfilled = (state, action) => {
  state.profile = { ...action.payload };
  state.token = action.payload.token;
  state.isLoading = false;
  state.error = null;
};

const handleUpdateUserInfoFulfilled = (state, action) => {
  state.profile = { ...action.payload };
  state.isLoading = false;
  state.error = null;
};

const handleUpdateAvatarFulfilled = (state, action) => {
  state.profile.avatarURL = action.payload.avatarURL;
  state.isLoading = false;
  state.error = null;
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAvatarURL: (state, action) => {
      state.profile.avatarURL = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, handlePending)
      .addCase(getCurrentUser.rejected, handleRejected)
      .addCase(getCurrentUser.fulfilled, handleCurrentUserFulfilled)
      .addCase(addUserData.pending, handlePending)
      .addCase(addUserData.rejected, handleRejected)
      .addCase(addUserData.fulfilled, handleAddUserDataFulfilled)
      .addCase(updateUserInfo.pending, handlePending)
      .addCase(updateUserInfo.rejected, handleRejected)
      .addCase(updateUserInfo.fulfilled, handleUpdateUserInfoFulfilled)
      .addCase(updatedUserAvatar.pending, handlePending)
      .addCase(updatedUserAvatar.rejected, handleRejected)
      .addCase(updatedUserAvatar.fulfilled, handleUpdateAvatarFulfilled)
  },
});

export const { setAvatarURL } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;