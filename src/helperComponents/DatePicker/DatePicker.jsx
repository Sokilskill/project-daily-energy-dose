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
  birthday,
}) => {
  const numericMonthFormat = 'dd.MM.yyyy';

  const datePickerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(birthday);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Picked date:", date);
  };

  const openDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <DaySwitchContainer>
      <StyledCalendarContainer>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat={numericMonthFormat}
          minDate={birthday}
          showYearDropdown
          showMonthDropdown
          customInput={
            <CustomDatePickerInput
              className={`profile `}
              $textSize={textSize}
              $textWeight={textWeight}
              $textHeight={textHeight}
              onClick={openDatePicker}
            />
          }
          ref={datePickerRef}
          shouldCloseOnSelect={true}
        />
        <StyledIcon onClick={openDatePicker} stroke={iconColor}>
          <use href={sprite + '#icon-calendar'} />
        </StyledIcon>
      </StyledCalendarContainer>
    </DaySwitchContainer>
  );
};

export default BirthdayPicker;
