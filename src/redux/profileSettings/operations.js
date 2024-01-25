import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages.jsx';

export const getUserProfile = createAsyncThunk(
  'profile/getUserProfile',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('/profiles');
      if (res.data.result === null) {
        return thunkApi.rejectWithValue('not data');
      }
      return res.data;
    } catch (error) {
      const status = error.response.status;
      messageNotification(status);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserName = createAsyncThunk(
  'users/updateUserName',
  async (userData, thunkApi) => {
    try {
      const res = await axios.patch('/users', userData);
      return res.data;
    } catch (error) {
      const status = error.response.status;
      messageNotification(status);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updatedUserAvatar = createAsyncThunk(
  'user/avatar',
  async (file, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      const res = await axios.patch('/users/avatars', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      const status = error.response.status;
      messageNotification(status);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addUserData = createAsyncThunk(
  'profile/addUserData',
  async (data, thunkApi) => {
    try {
      const res = await axios.put('/profiles', data);
      return res.data;
    } catch (error) {
      const status = error.response.status;
      messageNotification(status);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
