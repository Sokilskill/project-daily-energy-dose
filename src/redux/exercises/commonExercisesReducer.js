import { combineReducers } from 'redux';
import { categoriesReduser } from './categories/categoriesSlice';
import { exercisesReducer } from './exercises/exercisesSlice';

export const commonExercisesReducer = combineReducers({
  categories: categoriesReduser,
  exercises: exercisesReducer,
});
