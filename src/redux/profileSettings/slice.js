import { createSlice } from '@reduxjs/toolkit';
import {
  addUserData,
  updateUserName,
  updatedUserAvatar,
  getUserProfile,
} from './operations';
import { refreshThunk } from '../auth/auth-operations';

const initialState = {
  profile: {
    avatarURL: '',
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    levelActivity: null,
    bmr: 0,
    owner: {
      id: '',
      name: '',
      email: '',
      avatarURL: '',
    },
  },
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAddUserDataFulfilled = (state, action) => {
  // console.log('actionUPDATE++++++++', action.payload);
  // state = { ...state, ...action.payload.profile };
  state.isLoading = false;
  state.error = null;
};

const handleUpdateUserNameFulfilled = (state, action) => {
  // console.log('actionUPDATE NAMEEE++++++++', action);
  // state.profile.owner.name = action.payload.name;
  state.isLoading = false;
  state.error = null;
};

const handleUpdateAvatarFulfilled = (state, action) => {
  state.profile.avatarURL = action.payload.avatarURL;
  state.isLoading = false;
  state.error = null;
};

const handleGetUserProfileFulfilled = (state, action) => {
  // console.log('action.payload.result', action.payload.result);
  state.profile = { ...state, ...action.payload.result };
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
      .addCase(refreshThunk.pending, handlePending)
      .addCase(refreshThunk.rejected, handleRejected)
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
