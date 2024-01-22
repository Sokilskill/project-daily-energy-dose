import { createSlice } from '@reduxjs/toolkit';
import {
  handleStatisticsFulfilled,
  handlePending,
  handleRejected,
} from '../../components/services/services';
import getStatistics from './statisticsOperations';

const initialState = {
  userCount: null,
  workoutCount: null,
  burnedCaloriesSum: null,
  workoutsTimeSum: null,
  videoCount: null,
};

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStatistics[STATUS.FULFILLED], handleStatisticsFulfilled)
      .addCase(getStatistics[STATUS.PENDING], handlePending)
      .addCase(getStatistics[STATUS.REJECTED], handleRejected);
  },
});

export const statisticsSliceReducer = statisticsSlice.reducer;
