import styled from '@emotion/styled';
import '../../index.css';

export const DaySwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

export const CustomDatePickerInput = styled.input`
  font-family: Roboto;
  font-weight: bold;
  background: transparent;
  border: 0;
  padding: 0;
  margin-right: 8px;
  box-sizing: border-box;
  background-color: inherit;
  color: var(--white);
  font-size: 18px;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
  width: 96px;

  @media screen and (min-width: 768px) {
    width: 129px;
    height: 32px;
    font-size: 24px;
    line-height: 1.5;
  }
`;

export const StyledCalendarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .react-datepicker {
    background: #ef8964;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }

  .react-datepicker__current-month {
    color: white;
  }

  .react-datepicker__day {
    color: white;
  }

  .react-datepicker__day-name {
    color: white;
  }

  .react-datepicker__time {
    color: white;
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__header {
    background-color: #ef8964;
  }

  .react-datepicker__input-container input {
    caret-color: transparent;
    pointer-events: auto;
    cursor: pointer;
  }

  .react-datepicker__day--selected {
    color: white;
    background-color: black;
    border-radius: 50%;
  }

  .react-datepicker__day:hover {
    color: white;
    background-color: black;
    border-radius: 50%;
  }

  .react-datepicker__year-read-view--selected-year {
    color: #efede8;
    font-size: 16px;
  }
  .react-datepicker__year-dropdown {
    background-color: #ef8964;
    border: none;
    color: #efede8;
    font-size: 16px;
  }

  .react-datepicker__close-icon {
    margin-left: 8px; /* Этот margin компенсирует смещение из-за gap */
  }
`;

export const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--white);
  cursor: pointer;
  transition: stroke 0.3s ease;

  &:hover,
  &:focus {
    stroke: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledArrow = styled.div`
  display: flex;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;
