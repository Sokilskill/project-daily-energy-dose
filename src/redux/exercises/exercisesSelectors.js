// import { createSelector } from '@reduxjs/toolkit';

export const selectAllExercises = (state) => state.exercises.data;

export const selectExercisesByBodyParts = (state) =>
  state.exercises.filter.body.data;

export const selectExercisesByMuscles = (state) =>
  state.exercises.filter.muscles.data;

export const selectExercisesByEquipment = (state) =>
  state.exercises.filter.equipment.data;

// export const selectFilter = (state) => state.exercises.filter;

// export const selectVisibleExercises = createSelector(
//   [
//     selectExercisesByBodyParts,
//     selectExercisesByMuscles,
//     selectExercisesByEquipment,
//     selectFilter,
//   ],
//   (exercises, filter) =>
//     exercises.filter((exercises) =>
//       exercises.filter.toLowerCase().includes(filter.toLowerCase())
//     )
// );
