// const getDiary = (state) => state.diary.data.diary;

const getDiary = (state) => {
  console.log('stateDiarySEle', state.diary.data);
  return state.diary.data.diary;
};
const getIsLoading = (state) => {
  state.diary.isLoading;
};
const getIsError = (state) => state.diary.error;

const diarySelectors = {
  getDiary,
  getIsLoading,
  getIsError,
};

export default diarySelectors;
