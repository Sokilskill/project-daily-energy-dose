import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

const getDiary = createAsyncThunk(
  'diary/getDiary',
  async (credentials, thunkAPI) => {
    try {
      console.log('credentials', credentials);
      const date = credentials;
      const { data } = await axios.get(`/diary/${date}`);
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postDiaryProduct = createAsyncThunk(
  'diary/postDiaryProduct',
  async (credentials, thunkAPI) => {
    try {
      const { userId, date, productData } = credentials;
      const { data } = await axios.post(
        `/${userId}/${date}/addproduct`,
        productData
      );
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteDiaryProduct = createAsyncThunk(
  '/diary/deleteProduct',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.delete('/diary/deleteproduct', {
        data: credentials,
      });
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postDiaryExercise = createAsyncThunk(
  'diary/postDiaryExercise',
  async (credentials, thunkAPI) => {
    try {
      const { userId, date, exerciseData } = credentials;
      const { data } = await axios.post(
        `/${userId}/${date}/addexercise`,
        exerciseData
      );
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteDiaryExercise = createAsyncThunk(
  '/diary/deleteExercise',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.delete('/diary/deleteexercise', {
        data: credentials,
      });
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const diaryOperations = {
  getDiary,
  postDiaryProduct,
  deleteDiaryProduct,
  postDiaryExercise,
  deleteDiaryExercise,
};

export default diaryOperations;
