import styled from 'styled-components';
import '../../index.css'

export const DaySwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const CustomDatePickerInput = styled.input`
font-family: Roboto;
font-weight: bold;
background: transparent;
border: none;
background-color: inherit;
color: var(--white);
font-size: 18px;
line-height: 1.5;
outline: none;
cursor: pointer;
width: 100px;
height: 100%;

@media screen and (min-width: 768px) {
  width: 135px;
  font-size: 24px;
  line-height: 1.5;
}
`;

export const StyledCalendarContainer = styled.div`
  display: flex;
  gap: 8px;
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
`;

export const StyledIcon = styled.svg`
width: 20px;
height: 20px;
stroke: var(--white);
cursor: pointer;
transition: stroke 0.3s ease;

&:hover,
&:focus {
  stroke: #EF8964;
}

@media screen and (min-width: 768px) {
  width: 24px;
  height: 24px;
}
`;

export const StyledArrow = styled.div`
  display: flex;
  margin-left: 26px;
  @media screen and (min-width: 768px) {
    margin-left: 26px;
  }
`;