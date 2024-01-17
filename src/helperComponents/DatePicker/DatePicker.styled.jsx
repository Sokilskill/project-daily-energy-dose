import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledDatepicker = styled(DatePicker)`
  width: 187px;
  height: 52px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid var(--input-border, rgba(239, 237, 232, 0.3));
  padding: 14px;
  outline: none;
  color: var(--white, #efede8);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  &::placeholder {
    color: var(--white, #efede8);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }

  .react-datepicker__header {
    background-color: #3498db;
    color: #fff;
  }

  .react-datepicker__day--selected {
    background-color: #3498db;
    color: #fff;
  }

  .react-datepicker__day:hover {
    background-color: #eee;
    color: #333;
  }

  .react-datepicker-popper {
    .react-datepicker__current-month,
    .react-datepicker-time__header {
      background-color: #3498db;
      color: #fff;
    }

    .react-datepicker__day-names {
      .react-datepicker__day-name {
        color: rgba(239, 237, 232, 0.50);
      }
    }

    .react-datepicker__month-container {
      border-radius: 8px;
      background-color: #3498db;
      width: 217px;
      height: 236px;
    }

    .react-datepicker__day {
      color: var(--white, #efede8);
    }

    .react-datepicker__day:hover {
      background-color: #eee;
      border-radius: 50px;
      transition: all 150ms linear;
    }

    .react-datepicker__day--selected {
      border-radius: 50px;
      background-color: black;
    }

    .react-datepicker__year-option {
      background-color: #e6533c;
      color: var(--white, #efede8);
    }
  }
`;
