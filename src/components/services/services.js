const bodyParamsReset = {
  height: null,
  currentWeight: null,
  desiredWeight: null,
  birthday: null,
  blood: null,
  sex: null,
  levelActivity: null,
};
//-----------------------AUTH
export const handleFulfilledRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

export const handlerejectedRegister = (state, { payload }) => {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = payload.error.message;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.user.bodyParams = {
    ...state.user.bodyParams,
    ...payload.user.bodyParams,
  };
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

export const handlerejectedLogin = (state, { payload }) => {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = payload.error.message;
};

export const handleFulfilledLogout = (state) => {
  (state.user = { name: null, email: null, avatarUrl: null }),
    (state.user.bodyParams = bodyParamsReset);
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};

export const handlerejectedLogout = (state) => {
  state.isLoggedIn = false;
  state.isLoading = false;
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user.name = payload.ResponseBody.name;
  state.user.avatarUrl = payload.ResponseBody.avatarUrl;
  state.user.email = payload.ResponseBody.email;
  state.user.bodyParams = {
    ...state.user.bodyParams,
    ...payload.ResponseBody.bodyParams,
  };
  state.isLoggedIn = true;
  state.isFetchingCurrentUser = false;
  state.isLoading = false;
};

export const handleFulfilledMetricData = (state, { payload }) => {
  state.user.name = payload.data.name;
  state.user.bodyParams = {
    ...state.user.bodyParams,
    ...payload.data.bodyParams,
  };
  state.isLoading = false;
};

export const handleFulfilledAvatarUpdate = (state, { payload }) => {
  state.user.avatarUrl = payload.avatarUrl;
  state.isLoading = false;
};

export const handlePendingCurrentUser = (state) => {
  state.isFetchingCurrentUser = true;
  state.isLoading = true;
};

export const handleRejectedCurrentUser = (state) => {
  state.isFetchingCurrentUser = false;
  state.isLoading = false;
};

export const handleStatisticsFulfilled = (state, { payload }) => {
  state.userCount = payload.userCount;
  state.workoutCount = payload.workoutCount;
  state.burnedCaloriesSum = payload.burnedCaloriesSum;
  state.workoutsTimeSum = payload.workoutsTimeSum;
  state.videoCount = payload.videoCount;
};

//--------------------------DIARY
export const handleFulfilled = (state, { payload }) => {
  state.data = payload;
  state.isLoading = false;
};

export const handleFulfilledAddProduct = (state, { payload }) => {
  state.data.products.push(payload);
  state.isLoading = false;
};
export const handleFulfilledDeleteProduct = (state, { payload }) => {
  state.data.diary.products = state.data.diary.products.filter(
    (el) => el._id !== payload._id
  );
};

export const handleFulfilledAddExercise = (state, { payload }) => {
  state.data.exercises = payload;
  state.isLoading = false;
};

export const handleFulfilledDeleteExercise = (state, { payload }) => {
  state.data.diary.exercises = state.data.diary.exercises.filter(
    (el) => el._id !== payload._id
  );
};

export const handleFulfilledFilterExercisesBody = (state, { payload }) => {
  state.filter.body = payload;
  state.isLoading = false;
};

export const handleFulfilledFilterExercisesEquipment = (state, { payload }) => {
  state.filter.equipment = payload;
  state.isLoading = false;
};

export const handleFulfilledFilterExercisesMuscles = (state, { payload }) => {
  state.filter.muscles = payload;
  state.isLoading = false;
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state) => {
  state.isLoading = false;
};

//--------------Products

export function handleFulfilledProductList(state, { payload }) {
  state.list.push(...payload.products);
  state.total = payload.total;
  state.isLoading = false;
}

// ----------- Exercises

export function handleFulfilledExercisesCategories(state, { payload }) {
  state.items = payload.data;
  state.page = payload.page + 1;
  state.total = payload.total;
  state.isLoading = false;
}
export function handlefulfilledExercises(state, { payload }) {
  state.items = payload.data;
  state.page = payload.page + 1;
  state.total = payload.total;

  state.isLoading = false;
}
