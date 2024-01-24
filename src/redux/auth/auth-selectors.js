export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectisError = (state) => state.auth.error;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectIsToken = (state) => state.auth.token;
export const selectUserBodyParams = (state) => state.auth.user.bodyParams;
export const selectUserLargeAvatar = (state) => state.auth.user.avatarLargeURL;

export const selectIsParamsData = (state) => state.auth.user.isParams;

// Diary
const getUserMetricData = (state) => state.auth.user.bodyParams;

const authSelectors = {
  getUserMetricData,
};

export default authSelectors;
