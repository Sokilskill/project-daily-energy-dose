import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://power-pulse-6-backend.onrender.com/api-docs/';
const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', body);
      setToken(data.token);
      //   toast.success('Registration is successful!', { position: 'top-right' });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', body);
      setToken(data.token);
      //   toast.success('Login is successful!', { position: 'top-right' });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      setToken(persistToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      unsetToken();
      //   toast.success('Logout is successful!', { position: 'top-right' });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
