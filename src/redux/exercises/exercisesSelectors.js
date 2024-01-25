const emptyList = [];
export const selectPage = (state) => state.exercises.filter.body?.page;

export const selectExercisesByMuscles = (state) =>
  state.exercises.filter.muscles?.data ?? emptyList;

export const selectExercisesByEquipment = (state) =>
  state.exercises.filter.equipment?.data ?? emptyList;

export const selectLoading = (state) => state.exercises.isLoading;
