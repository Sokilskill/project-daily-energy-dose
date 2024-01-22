import { createSlice } from '@reduxjs/toolkit';
import exercisesOperations from '../exercisesOperations';
import {
  handlePending,
  handleRejected,
  handlefulfilledExercises,
} from '../../../components/services/services';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    items: [],
    total: 0,
    page: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(exercisesOperations.getExercises[STATUS.PENDING], handlePending)
      .addCase(
        exercisesOperations.getExercises[STATUS.FULFILLED],
        handlefulfilledExercises
      )
      .addCase(
        exercisesOperations.getExercises[STATUS.REJECTED],
        handleRejected
      );
  },
});
export const exercisesReducer = exercisesSlice.reducer;
