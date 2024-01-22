const emptyList = [];
export const selectExercisesByBodyParts = (state) =>
  state.exercises.filter.body?.data ?? emptyList;

export const selectExercisesByMuscles = (state) =>
  state.exercises.filter.muscles?.data ?? emptyList;

export const selectExercisesByEquipment = (state) =>
  state.exercises.filter.equipment?.data ?? emptyList;

export const selectLoading = (state) => state.exercises.isLoading;
