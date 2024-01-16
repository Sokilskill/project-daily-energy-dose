import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  addUserData,
  updateUserName,
  getTarget,
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

const handleUpdateUserNameFulfilled = (state, action) => {
  state.profile.name = { ...action.payload };
  state.isLoading = false;
  state.error = null;
};

const handleUpdateAvatarFulfilled = (state, action) => {
  state.profile.avatarURL = action.payload.avatarURL;
  state.isLoading = false;
  state.error = null;
};

const handleGetTargetFulfilled =(state, action) => {
  state.isLoading = false;
  state.target = action.payload;
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
      .addCase(updateUserName.pending, handlePending)
      .addCase(updateUserName.rejected, handleRejected)
      .addCase(updateUserName.fulfilled, handleUpdateUserNameFulfilled)
      .addCase(updatedUserAvatar.pending, handlePending)
      .addCase(updatedUserAvatar.rejected, handleRejected)
      .addCase(updatedUserAvatar.fulfilled, handleUpdateAvatarFulfilled)
      .addCase(getTarget.pending, handlePending)
      .addCase(getTarget.rejected, handleRejected)
      .addCase(getTarget.fulfilled, handleGetTargetFulfilled)
  },
});

export const { setAvatarURL } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;