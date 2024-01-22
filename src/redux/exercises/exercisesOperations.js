import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

axios.defaults.baseURL = 'https://power-pulse-6-backend.onrender.com/api';

export const getExercisesByBodyParts = createAsyncThunk(
  '/exercises/categories/Body_parts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        '/exercises/categories?category=Body%20parts'
      );
      console.log(data);
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercisesByEquipment = createAsyncThunk(
  '/exercises/categories/Equipment',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        '/exercises/categories?category=equipment'
      );
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercisesByMuscles = createAsyncThunk(
  '/exercises/categories/Muscles',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        '/exercises/categories?category=Muscles'
      );
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const exercisesOperations = {
  getExercisesByBodyParts,
  getExercisesByEquipment,
  getExercisesByMuscles,
};

export default exercisesOperations;
