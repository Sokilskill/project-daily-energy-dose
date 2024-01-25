export const selectProfileName = (state) => {

  return state.profile.profile.owner.name;
};
export const selectProfileEmail = (state) => state.profile.profile.owner.email;
export const selectUserProfile = (state) => state.profile.profile;
export const selectorUserId = (state) => state.profile.profile.owner._id;
export const selectUserIsLoading = (state) => state.profile.isLoading;
export const selectUserError = (state) => state.profile.error;
