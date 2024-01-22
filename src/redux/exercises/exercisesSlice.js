import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import exercisesOperations from './exercisesOperations';
import {
  handleFulfilledFilterExercisesBody,
  handleFulfilledFilterExercisesEquipment,
  handleFulfilledFilterExercisesMuscles,
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
        exercisesOperations.getExercisesByBodyParts[STATUS.FULFILLED],
        handleFulfilledFilterExercisesBody
      )
      .addCase(
        exercisesOperations.getExercisesByEquipment[STATUS.FULFILLED],
        handleFulfilledFilterExercisesEquipment
      )
      .addCase(
        exercisesOperations.getExercisesByMuscles[STATUS.FULFILLED],
        handleFulfilledFilterExercisesMuscles
      )
      .addMatcher(
        isAnyOf(
          exercisesOperations.getExercisesByBodyParts[STATUS.PENDING],
          exercisesOperations.getExercisesByEquipment[STATUS.PENDING],
          exercisesOperations.getExercisesByMuscles[STATUS.PENDING]
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          exercisesOperations.getExercisesByBodyParts[STATUS.REJECTED],
          exercisesOperations.getExercisesByEquipment[STATUS.REJECTED],
          exercisesOperations.getExercisesByMuscles[STATUS.REJECTED]
        ),
        handleRejected
      );
  },
});

export const exercisesSliceReducer = exercisesSlice.reducer;
