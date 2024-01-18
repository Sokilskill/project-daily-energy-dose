
import React, { useState, useRef, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledDatepicker, CustomDatePickerInput, StyledIcon} from './DatePicker.styled';
import sprite from '../../assets/sprite.svg';

const BirthdayPicker = ({
  textSize,
  textWeight,
  iconColor,
  textHeight,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [popUpOpen, setPopUpOpen] = useState(true);
  const datePickerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setPopUpOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    console.log('Selected date:', selectedDate);

    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }

    setPopUpOpen(false);
  };

  return (
    <div
    ref={(node) => {
      wrapperRef.current = node;
    }}
    style={{ position: 'relative' }}
  >
    <StyledDatepicker
      ref={datePickerRef}
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd.MM.yyyy"
      placeholderText="00.00.0000"
      showYearDropdown
      onSelect={handleSubmit}
      required
      customInput={
        <CustomDatePickerInput className="profile"
        >
          <StyledIcon
            onClick={handleSubmit}
            stroke={iconColor}
            style={{ position: 'absolute', right: '10px', top: '14px' }}
          >
            <use href={`${sprite}#icon-calendar`}></use>
          </StyledIcon>
        </CustomDatePickerInput>
      }
    />
  </div>
  );
};

export default BirthdayPicker;
