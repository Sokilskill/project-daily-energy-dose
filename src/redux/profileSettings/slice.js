import { createSlice } from '@reduxjs/toolkit';
import {
  addUserData,
  updateUserName,
  updatedUserAvatar,
  getUserProfile,
} from './operations';

const initialState = {
  profile: {
    avatarURL: '',
    height: null,
    currentWeight: null,
    desiredWeight: null,
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

const handleAddUserDataFulfilled = (state, action) => {
  console.log('Data sent to backend (Update User Name):', action.payload);
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

const handleGetUserProfileFulfilled = (state, action) => {
  state.profile = { ...action.payload };
  state.token = action.payload.token;
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
    setBirthday: (state, action) => {
      state.profile.birthday = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserData.pending, handlePending)
      .addCase(addUserData.rejected, handleRejected)
      .addCase(addUserData.fulfilled, handleAddUserDataFulfilled)
      .addCase(updateUserName.pending, handlePending)
      .addCase(updateUserName.rejected, handleRejected)
      .addCase(updateUserName.fulfilled, handleUpdateUserNameFulfilled)
      .addCase(updatedUserAvatar.pending, handlePending)
      .addCase(updatedUserAvatar.rejected, handleRejected)
      .addCase(updatedUserAvatar.fulfilled, handleUpdateAvatarFulfilled)
      .addCase(getUserProfile.pending, handlePending)
      .addCase(getUserProfile.rejected, handleRejected)
      .addCase(getUserProfile.fulfilled, handleGetUserProfileFulfilled);
  },
});

export const { setAvatarURL, setBirthday } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
