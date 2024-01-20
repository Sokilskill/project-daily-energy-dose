export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsToken = (state) => state.auth.token;
export const selectUserBodyParams = (state) => state.auth.user.bodyParams;

export const selectIsParamsData = ({ profile }) => {
  // console.log('STATE AUTH', state);

  if (!profile.profile.levelActivity) {
    return false;
  }
  return true;
};

// Diary
const getUserMetricData = (state) => state.auth.user.bodyParams;

const authSelectors = {
  getUserMetricData,
};

export default authSelectors;
