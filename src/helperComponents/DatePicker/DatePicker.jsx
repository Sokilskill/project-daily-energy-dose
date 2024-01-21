import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  DaySwitchContainer,
  CustomDatePickerInput,
  StyledCalendarContainer,
  StyledIcon,
} from './DatePicker.styled';
import sprite from '../../assets/sprite.svg';

const BirthdayPicker = ({
  textSize,
  textWeight,
  iconColor,
  textHeight,
  // showError,
  // currentDate,
  // birthdayDate,
}) => {
  const numericMonthFormat = 'dd.MM.yyyy';

  const datePickerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  // const [isUnderage, setIsUnderage] = useState(false);

  // const calculateMinDateFor18Years = () => {
  //   const today = new Date();
  //   today.setFullYear(today.getFullYear() - 18);

  //   return today;
  // };


  const handleDateChange = (date) => {
    setSelectedDate(date);
    // const minDateFor18Years = calculateMinDateFor18Years();
    // const isUnderage = date > minDateFor18Years;
    // setIsUnderage(isUnderage);
  };


  return (
    <DaySwitchContainer>
      <StyledCalendarContainer>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat={numericMonthFormat}
          // minDate={calculateMinDateFor18Years}
          showYearDropdown
          showMonthDropdown
          customInput={
            <CustomDatePickerInput
            className={`profile `}
              $textSize={textSize}
              $textWeight={textWeight}
              $textHeight={textHeight}
            />
          }
          ref={datePickerRef}
          shouldCloseOnSelect={true}
        />
        <StyledIcon onClick={() => datePickerRef.current.setOpen(true)} stroke={iconColor}>
          <use href={sprite + '#icon-calendar'} />
        </StyledIcon>
      </StyledCalendarContainer>
    </DaySwitchContainer>
  );
};

export default BirthdayPicker;
