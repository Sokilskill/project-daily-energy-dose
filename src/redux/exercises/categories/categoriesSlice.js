// import { createSlice } from '@reduxjs/toolkit';
// import exercisesOperations from '../exercisesOperations';
// import {
//   handleFulfilledExercisesCategories,
//   handlePending,
//   handleRejected,
// } from '../../../components/services/services';

// const STATUS = {
//   PENDING: 'pending',
//   REJECTED: 'rejected',
//   FULFILLED: 'fulfilled',
// };

// const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState: {
//     category: 'bodyPart',
//     items: [],
//     total: 0,
//     page: 0,
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     setCategory(state, action) {
//       // console.log(action.payload);
//       state.category = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(exercisesOperations.getCategories[STATUS.PENDING], handlePending)
//       .addCase(
//         exercisesOperations.getCategories[STATUS.FULFILLED],
//         handleFulfilledExercisesCategories
//       )
//       .addCase(
//         exercisesOperations.getCategories[STATUS.REJECTED],
//         handleRejected
//       );
//   },
// });
// export const categoriesReduser = categoriesSlice.reducer;
// export const { setCategory } = categoriesSlice.actions;
