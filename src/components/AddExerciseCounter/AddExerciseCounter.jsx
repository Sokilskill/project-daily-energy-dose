import { useState } from 'react';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';
export const Counter = ({
  isTimerRunning,
  time,
  saveBurnedCalories,
  startPauseTimer,
}) => {
  return (
    <CountdownCircleTimer
      isPlaying={isTimerRunning}
      duration={time * 60}
      colors={'#E6533C'}
      colorsTime={[7, 5, 2, 0]}
      strokeWidth={[4]}
      updateInterval={1}
      onComplete={() => {
        startPauseTimer();
      }}
    >
      {({ remainingTime }) => {
        const minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0');
        const seconds = String(remainingTime % 60).padStart(2, '0');

        saveBurnedCalories(remainingTime);

        return `${minutes}:${seconds}`;
      }}
    </CountdownCircleTimer>
  );
};
