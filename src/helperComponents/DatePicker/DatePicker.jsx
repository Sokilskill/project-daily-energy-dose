
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

  handlerDate,
}) => {
  const numericMonthFormat = 'dd.MM.yyyy';

  const datePickerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(birthday);

  const handleDateChange = (date) => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  
    setSelectedDate(date);
    handlerDate(date);
    console.log("Picked date:", date);
  
    
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
          scrollableYearDropdown
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
