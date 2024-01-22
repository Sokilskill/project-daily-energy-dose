import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { profileReducer } from './profileSettings/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import msgpack from 'msgpack-lite';

import { exercisesSliceReducer } from './exercises/exercisesSlice';
import { productsReducer } from './products/sliceProducts';
import { statisticsSliceReducer } from './statistics/statisticsSlice';
import { diarySliceReducer } from './diary/diarySlice';
// import { commonExercisesReducer } from './exercises/commonExercisesReducer';
import { errorPageReducer } from './errorPage/err-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const productsPersistConfig = {
  key: 'products',
  storage,
  whitelist: ['list'],
  transforms: [
    {
      in: (state) => {
        return msgpack.encode(state);
      },
      out: (state) => {
        return msgpack.decode(state);
      },
    },
  ],
  stateReconciler: autoMergeLevel2,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    diary: diarySliceReducer,
    exercises: exercisesSliceReducer,
    products: persistReducer(productsPersistConfig, productsReducer),
    statistics: statisticsSliceReducer,
    profile: persistReducer(authPersistConfig, profileReducer),
    error: errorPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
