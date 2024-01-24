import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

axios.defaults.baseURL = 'https://power-pulse-6-backend.onrender.com/api';

export const getExercisesByCategories = createAsyncThunk(
  '/exercises/categories/Muscles',
  async (credentials, thunkAPI) => {
    const { limit = 10, page = 1, category } = credentials;
    try {
      const { data } = await axios.get(
        `/exercises/categories?category=${category}&page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const exercisesOperations = {
  getExercisesByCategories,
};

export default exercisesOperations;
