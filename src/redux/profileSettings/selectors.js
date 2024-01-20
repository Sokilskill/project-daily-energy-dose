export const selectProfileName = (state) => {
  //   console.log('STATE ---PROFILE====', state);
  //   console.log('state.profile-NAME', state.profile.profile.owner);

  return state.profile.profile.owner.name;
};
export const selectProfileEmail = (state) => state.profile.profile.owner.email;
export const selectUserProfile = (state) => state.profile.profile;

export const selectUserIsLoading = (state) => state.profile.isLoading;
export const selectUserError = (state) => state.profile.error;
// export const selectCurrentUser = (state) => state.auth.user;
