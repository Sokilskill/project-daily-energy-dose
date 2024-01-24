import React, { useRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DaySwitchContainer,
  CustomDatePickerInput,
  StyledCalendarContainer,
  StyledIcon,
} from './DatePicker.styled';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { date } from 'yup';

const BirthdayPicker = ({
  textSize,
  textWeight,
  setFieldValue, 
  textHeight,
  birthday,
}) => {
  const numericMonthFormat = 'dd.MM.yyyy';
  const datePickerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(birthday);


  // Використовуємо useEffect для відстеження змін у властивості birthday
  useEffect(() => {
    setSelectedDate(birthday);
  }, [ birthday]);

  const handleDateChange = (date) => {
    try {
      if (!date) {
        throw new Error('Selected date is not defined');
      } else {
        setFieldValue('birthday', date); // Use the provided date directly
        setSelectedDate(date);
      }
    } catch (error) {
      console.error('Error setting field value:', error);
    }
  };

  const onClick = () => {
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
          minDate={date}
          showYearDropdown
          showMonthDropdown
          customInput={
            <CustomDatePickerInput
              className={'profile'}
              $textSize={textSize}
              $textWeight={textWeight}
              $textHeight={textHeight}
            />
          }
          ref={datePickerRef}
          shouldCloseOnSelect={true}
        />
        <StyledIcon onClick={onClick} >
          <use href={`${sprite}#icon-calendar`} />
        </StyledIcon>
      </StyledCalendarContainer>
    </DaySwitchContainer>
  );
};

export default BirthdayPicker;
