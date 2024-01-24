export const getDiary = (state) => state.diary.data;
export const getIsLoading = (state) => state.diary.isLoading;
export const getIsError = (state) => state.diary.error;
export const selectUser = (state) => state.auth.user;


const diarySelectors = {
  getDiary,
  getIsLoading,
  getIsError,
  selectUser,
};

export default diarySelectors;