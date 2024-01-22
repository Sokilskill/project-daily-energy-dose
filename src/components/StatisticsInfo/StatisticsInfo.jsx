import VideoBox from '../VideoBox/VideoBox';
import CalBox from '../CalBox/CalBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getStatistics from '../../redux/statistics/statisticsOperations';
import {
  selectBurnedCaloriesSum,
  selectVideoCount,
} from '../../redux/statistics/statisticsSecectors';

const StatisticsInfo = () => {
  const videoCount = useSelector(selectVideoCount);
  const burnedCaloriesSum = useSelector(selectBurnedCaloriesSum);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!videoCount || !burnedCaloriesSum) {
      dispatch(getStatistics());
    }
  }, []);

  return (
    <>
      <VideoBox />
      <CalBox />
    </>
  );
};
export default StatisticsInfo;
