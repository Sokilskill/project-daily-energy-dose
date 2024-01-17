export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

// Diary
const getUserMetricData = (state) => state.auth.user.bodyParams;

const authSelectors = {
  getUserMetricData,
};

export default authSelectors;
