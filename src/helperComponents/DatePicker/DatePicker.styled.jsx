import styled from '@emotion/styled';
import '../../index.css'

export const DaySwitchContainer = styled.div`
  display: flex;
  align-items: center;
 
`;

export const CustomDatePickerInput = styled.input`
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid var(--border, #efede84d);
  border-radius: 12px;
  padding: 14px;
  background-color: inherit;
  color: var(--white, #efede8);
  font-size: 16px;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
  border-color: var(--error-color, #d80027);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  
  &.profile {
    width: 161px;
    height: 52px;
    margin: 4px 0 0 0;
    border: 1px solid var(--border, #efede84d);

    &:hover,
    &:focus {
      border-color: rgba(230, 83, 60, 1);
    }

    @media screen and (min-width: 768px) {
      width: 187px;
    }

    &::placeholder {
      color: var(--white, #efede8);
    }
  }

  &:error {
    border-color: var(--error-color, #d80027);

  }
`;

CustomDatePickerInput.defaultProps = {
  placeholder: '00.00.0000',
};
export const StyledCalendarContainer = styled.div`
  position: relative;
  .react-datepicker {
    background: #ef8964;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
    display: inline-flex;
align-items: flex-start;

  }

  .react-datepicker {
    font-family: 'Roboto', sans-serif;;
    font-size: 14px;
    border: 1px solid var(--white, #efede8);
    color: var(--white, #efede8);
  
    
  }
  .react-datepicker__current-month {
    color: var(--white, #efede8);
  }

  .react-datepicker__day {
    color: var(--white, #efede8);
  }

  .react-datepicker__day-name {
    color: var(--secondary-text-color, #efede866);
  }

  .react-datepicker__time {
    color: var(--white, #efede8);
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__header {
    background-color: var(--orange-1, #ef8964);
    border-bottom: 1px solid var(--calendar-button-border, rgba(239, 237, 232, 0.20));
  }

  .react-datepicker__input-container input {
    caret-color: transparent;
    pointer-events: auto;
    cursor: pointer;
  }

  .react-datepicker__day--selected {
    color: var(--white, #efede8);
    background-color: var(--black, #040404);
    border-radius: 50%;
  }

  .react-datepicker__day:hover {
    color: var(--white, #efede8);
    background-color: var(--black, #040404);
    border-radius: 50%;
  }

  .react-datepicker__year-read-view--selected-year {
    color: var(--white, #efede8);
    font-size: 16px;
  }
  .react-datepicker__year-dropdown {
    background-color: var(--orange-1, #ef8964);
    border: none;
    color: var(--white, #efede8);
    font-size: 16px;
   
    overflow-y: scroll;
  }

  .react-datepicker__month-read-view--selected-month {
    color: var(--white, #efede8);
    font-size: 16px;
  }
  .react-datepicker__month-dropdown {
    background-color: var(--orange-1, #ef8964);
    border: none;
    color: var(--white, #efede8);
    font-size: 16px;
  }

.react-datepicker__year-option:hover, 
.react-datepicker__month-option:hover, 
.react-datepicker__month-year-option:hover {
    background-color: #efede899;
  }

  .react-datepicker__year-option--selected, 
  .react-datepicker__month-option--selected, 
  .react-datepicker__month-year-option--selected {
    position: absolute;
    left: 15px;
    color: var(--white);
}

.react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
  border-radius: 50%;
  background-color: #040404;
}
.react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
  border-color: var( --calendar-arrows, rgba(239, 237, 232, 0.40));
  border-style: solid;
  border-width: 1.5px 1.5px 0 0;
  content: "";
  display: block;
  height: 8px;
  position: absolute;
  top: 6px;
  width: 8px;
}

.react-datepicker__year-read-view--down-arrow:hover,
.react-datepicker__month-read-view--down-arrow:hover,
.react-datepicker__month-year-read-view--down-arrow:hover,
.react-datepicker__navigation-icon:hover::before {
  border-color: var(--white, #efede8); 
}
.iLEqx .react-datepicker__current-month {
  color: var(--white, #efede8);
}


.react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
  margin-top: 0;
  color: var(--white, #efede8);
  ;
font-size: 16px;
;
font-weight: 500;
line-height: normal;
letter-spacing: -0.32px;
}



`;

export const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--white);
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 10px;

  &:hover,
  &:focus {
    & > path {
      stroke: var(--orange-1, #ef8964);
    }
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 18px;
    top: 18px;
  }
`;


export const StyledArrow = styled.div`
  display: flex;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 26px;
  }
`;
