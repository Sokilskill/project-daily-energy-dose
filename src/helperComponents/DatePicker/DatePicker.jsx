import React, { useState, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledDatepicker } from './DatePicker.styled';

const BirthdayPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [popUpOpen, setPopUpOpen] = useState(true);
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    console.log('Selected date:', selectedDate);
    
    // Close the date picker pop-up using the ref
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(false);
    }

    setPopUpOpen(false);
  };

  return (
    <div>
      <StyledDatepicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        placeholderText="00.00.0000"
        showYearDropdown
        showMonthDropdown
        onSelect={handleSubmit}
        popperModifiers={{
          offset: {
            enabled: true,
            offset: '5px, 10px',
          },
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'viewport',
          },
        }}
      />
    </div>
  );
};

export default BirthdayPicker;
