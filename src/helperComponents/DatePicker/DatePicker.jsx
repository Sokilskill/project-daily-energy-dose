import { useRef } from 'react';
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
  textHeight,
  birthday,
  currentDate,
  setSelectedDate,
  error,
}) => {
  const numericMonthFormat = 'dd.MM.yyyy';

  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    const currentDate = new Date(date);
    setSelectedDate(currentDate);
  };

  return (
    <DaySwitchContainer>
      <StyledCalendarContainer>
        <DatePicker
          selected={currentDate}
          onChange={handleDateChange}
          dateFormat={numericMonthFormat}
          minDate={birthday}
          showYearDropdown
          yearDropdownItemNumber={100}
          scrollableYearDropdown
          showMonthDropdown
          customInput={
            <CustomDatePickerInput
              className={`profile ${error ? 'error' : ''}`}
              $textSize={textSize}
              $textWeight={textWeight}
              $textHeight={textHeight}
              error={
                error && error.birthday !== undefined ? error.birthday : null
              }
            />
          }
          ref={datePickerRef}
          shouldCloseOnSelect={true}
        />
        <StyledIcon onClick={() => datePickerRef.current.setOpen(true)}>
          <use href={`${sprite}#icon-calendar`} />
        </StyledIcon>
      </StyledCalendarContainer>
    </DaySwitchContainer>
  );
};

export default BirthdayPicker;
