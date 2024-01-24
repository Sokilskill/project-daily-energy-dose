export const getDiary = (state) => state.diary.data;
export const getIsLoading = (state) => state.diary.isLoading;
export const getIsError = (state) => state.diary.error;
export const selectUserProfile = (state) => state.profile.profile;


const diarySelectors = {
  getDiary,
  getIsLoading,
  getIsError,
  selectUserProfile,
};

export default diarySelectors;