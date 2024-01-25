import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages.jsx';

axios.defaults.baseURL = 'https://power-pulse-6-backend.onrender.com/api';

export const getExercisesByCategories = createAsyncThunk(
  '/exercises/categories',
  async (credentials, thunkAPI) => {
    const { limit = '', page = 1, category } = credentials;
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
