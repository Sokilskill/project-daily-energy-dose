export const selectCategory = (state) => state.exercises.categories.category;
export const selectListCategories = (state) => state.exercises.categories.items;
export const selectPageCategories = (state) => state.exercises.categories.page;
export const selectTotalCategories = (state) =>
  state.exercises.categories.total;
export const selectExercises = (state) => state.exercises.exercises.items;
export const selectPageExercises = (state) => state.exercises.exercises.page;
export const selectTotalExercises = (state) => state.exercises.exercises.total;
