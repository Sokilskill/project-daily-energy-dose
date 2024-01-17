import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// axios.defaults.baseURL = 'https://power-pulse-6-backend.onrender.com';

export const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getCurrentUser = createAsyncThunk(
  'users/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (!persistedToken) {
        toast.info('Unable to get user');
        return thunkAPI.rejectWithValue('Token not available');
      }
      setAuthToken(persistedToken);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserName = createAsyncThunk(
  'users/updateUserInfo',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.patch('/users', userData);
      toast.success('Name updated');
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatedUserAvatar = createAsyncThunk(
  'user/avatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      const res = await axios.patch('/users/avatars', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      toast.success('Avatar updated');
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTarget = createAsyncThunk(
  'profile/getTarget',
  async (_, thunkApi) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (!persistedToken) {
        toast.info('Unable to get user');
        return thunkAPI.rejectWithValue('Token not available');
      }
      setAuthToken(persistedToken);
      const res = await axios.get('profiles/targets');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addUserData = createAsyncThunk(
  'profile/addUserData',
  async (data, thunkAPI) => {
    try {
      const res = await axios.put('/profiles', data);
      toast.success('Your profile updated');
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
