import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

axios.defaults.baseURL = 'https://power-pulse-6-backend.onrender.com/api';

// export const getExercisesByBodyParts = createAsyncThunk(
//   '/exercises/categories/Body_parts',
//   async (credentials, thunkAPI) => {
//     const { limit = 10, page = 1 } = credentials;
//     try {
//       const { data } = await axios.get(
//         `/exercises/categories?category=Body%20parts&page=${page}&limit=${limit}`
//         // '/exercises/categories?category=Body%20parts'
//       );
//       return data;
//     } catch (error) {
//       messageNotification(error.response.status);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getExercisesByEquipment = createAsyncThunk(
//   '/exercises/categories/Equipment',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get(
//         '/exercises/categories?category=equipment'
//       );
//       return data;
//     } catch (error) {
//       messageNotification(error.response.status);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getExercisesByMuscles = createAsyncThunk(
//   '/exercises/categories/Muscles',
//   async (credentials, thunkAPI) => {
//     const { limit = 10, page = 1, category } = credentials;
//     try {
//       const { data } = await axios.get(
//         `/exercises/categories?category=${category}&page=${page}&limit=${limit}`
//         // {
//         //   params: {
//         //     category: category,
//         //     page: page,
//         //     limit: limit,
//         //   },
//         // }
//         // '/exercises/categories?category=Muscles'
//       );
//       return data;
//     } catch (error) {
//       messageNotification(error.response.status);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getExercisesByBodyParts = createAsyncThunk(
  '/exercises/categories/Muscles',
  async (credentials, thunkAPI) => {
    const { limit = 10, page = 1, category } = credentials;
    try {
      const { data } = await axios.get(
        `/exercises/categories?category=${category}&page=${page}&limit=${limit}`
        // {
        //   params: {
        //     category: category,
        //     page: page,
        //     limit: limit,
        //   },
        // }
        // '/exercises/categories?category=Muscles'
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
  // getExercisesByEquipment,
  // getExercisesByMuscles,
};

export default exercisesOperations;
