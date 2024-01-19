import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://power-pulse-6-backend.onrender.com/api/';
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
      const { data } = await axios.post('/auth/register', body);
      setToken(data.token);
      toast.success('Registration is successful!', { position: 'top-center' });
      console.log(data.token);
      console.log(data);
      return data;
    } catch (error) {
      toast.error('Registration is failed!', { position: 'top-center' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', body);
      setToken(data.token);
      console.log(data.token);
      toast.success('Login is successful!', { position: 'top-right' });
      return data;
    } catch (error) {
      toast.error('Login is failed!', { position: 'top-right' });
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
      const { data } = await axios.get('/auth/current');
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
      await axios.post('/auth/logout');
      unsetToken();
      toast.success('Logout is successful!', { position: 'top-right' });
    } catch (error) {
      toast.error('Logout is failed!', { position: 'top-right' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
