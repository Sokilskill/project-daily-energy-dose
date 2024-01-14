export const selectUserProfile = state => state.profile;
export const selectUserIsLoading = state => state.profile.isLoading;
export const selectUserError = state => state.profile.error;
export const selectUserIsAuth = state => state.profile.isAuth;