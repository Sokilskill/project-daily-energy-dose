export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectisError = (state) => state.auth.error;
export const selectIsToken = (state) => state.auth.token;
export const selectUserBodyParams = (state) => state.auth.user.bodyParams;

export const selectIsParamsData = (state) => {
  const user = state.auth.user;
  if (!user || !user.bodyParams) {
    return false;
  }
  const isAnyValues = Object.values(user.bodyParams).filter(
    (value) => value !== null
  );
  return isAnyValues.length > 0;
};

// Diary
const getUserMetricData = (state) => state.auth.user.bodyParams;

const authSelectors = {
  getUserMetricData,
};

export default authSelectors;
