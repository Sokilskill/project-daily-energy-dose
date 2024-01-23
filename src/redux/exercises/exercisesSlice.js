import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import exercisesOperations from './exercisesOperations';
import {
  handleFulfilledFilterExercisesBody,
  handlePending,
  handleRejected,
} from '../../components/services/services';

const initialState = {
  filter: {
    body: null,
    equipment: null,
    muscles: null,
  },
  isLoading: false,
  error: '',
};

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        exercisesOperations.getExercisesByCategories[STATUS.FULFILLED],
        handleFulfilledFilterExercisesBody
      )
      .addMatcher(
        isAnyOf(exercisesOperations.getExercisesByCategories[STATUS.PENDING]),
        handlePending
      )
      .addMatcher(
        isAnyOf(exercisesOperations.getExercisesByCategories[STATUS.REJECTED]),
        handleRejected
      );
  },
});

export const exercisesSliceReducer = exercisesSlice.reducer;
