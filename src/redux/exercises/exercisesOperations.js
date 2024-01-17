import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

axios.defaults.baseURL = 'https://power-pulse-6-backend.onrender.com/api';

export const getExercises = createAsyncThunk(
  '/exercises',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/exercises');
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercisesByBodyParts = createAsyncThunk(
  '/exercises/categories/Body_parts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        '/exercises/categories?category=Body_parts'
      );
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getExercisesByBodyParts = createAsyncThunk(
//   '/exercises/bodyParts',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/exercises/bodyparts');
//       return data;
//     } catch (error) {
//       messageNotification(error.response.status);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getExercisesByEquipment = createAsyncThunk(
  '/exercises/categories/Equipment',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        '/exercises/categories?category=Equipment'
      );
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getExercisesByEquipment = createAsyncThunk(
//   '/exercises/equipment',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/exercises/equipment');
//       return data;
//     } catch (error) {
//       messageNotification(error.response.status);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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

// export const getExercisesByMuscles = createAsyncThunk(
//   '/exercises/muscles',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/exercises/muscles');
//       return data;
//     } catch (error) {
//       messageNotification(error.response.status);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

const exercisesOperations = {
  getExercises,
  getExercisesByBodyParts,
  getExercisesByEquipment,
  getExercisesByMuscles,
};

export default exercisesOperations;
