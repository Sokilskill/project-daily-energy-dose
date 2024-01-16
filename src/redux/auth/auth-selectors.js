export const selectIsLogedIn = (state) => state.auth.isLogedIn;
export const selectUserName = (state) => state.auth.user.name;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

// Diary
const getUserMetricData = (state) => state.auth.user.bodyParams;

const authSelectors = {
  getUserMetricData,
}

export default authSelectors;