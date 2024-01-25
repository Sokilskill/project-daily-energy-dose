import { createSlice } from '@reduxjs/toolkit';
import { addUserData, updateUserName, getUserProfile } from './operations';

const initialState = {
  profile: {
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    levelActivity: null,
    bmr: 0,
    time: 110,
    owner: {
      id: '',
      name: '',
      email: '',
    },
  },
  error: null,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAddUserDataFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleUpdateUserNameFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleGetUserProfileFulfilled = (state, action) => {
  state.profile = { ...state.profile, ...action.payload };
  state.isLoading = false;
  state.error = null;
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setInitialState: () => initialState,

    // setAvatarURL: (state, action) => {
    //   state.profile.avatarURL = action.payload;
    // },
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
      .addCase(getUserProfile.pending, handlePending)
      .addCase(getUserProfile.rejected, handleRejected)
      .addCase(getUserProfile.fulfilled, handleGetUserProfileFulfilled);
  },
});

export const { setAvatarURL, setBirthday, setInitialState } =
  profileSlice.actions;
export const profileReducer = profileSlice.reducer;
