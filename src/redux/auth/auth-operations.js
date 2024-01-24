import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages.jsx';

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
      if (!data || data.token === null) {
        throw new Error('No data!');
      }
      setToken(data.token);
      return data;
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        messageNotification(status);
        throw new Error(`Failed with status ${status}`);
      } else {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', body);
      if (!data || data.token === null) {
        throw new Error('No data!');
      }
      setToken(data.token);
      return data;
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        messageNotification(status);
        throw new Error(`Failed with status ${status}`);
      } else {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    console.log('persistToken', persistToken);
    if (persistToken === null || persistToken === '') {
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
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export async function getProducts(options) {
  const data = await axios.get(`/food`, options);
  return data;
}

export async function getAllCategories() {
  const data = await axios.get('/food/categories');
  return data;
}

export async function addEntry(body) {
  return await axios.post(`/diary/add-entry`, body);
}
