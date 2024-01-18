
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../index.css';

export const StyledDatepicker = styled(DatePicker)`
  width: 161px;
  height: 52px;
  display: flex;
  padding: 14px;
  margin: 4px 0 0 0;
  align-items: center;
  // gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  & input::placeholder {
    color: var(--white, #efede8);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
 
  @media screen and (min-width: 768px) {
    margin: 8px 0 0 0;
    width: 168px;
  }
`;

export const CustomDatePickerInput = styled.div`
  position: relative;
  width: 100%;
  
  input {
    display: flex;
    align-items: center;
    background: transparent;
    width: 100%;
    border: 1px solid var(--white);
    border-radius: 12px;
    padding: 14px;
    background-color: inherit;
    color: var(--white);
    font-size: 16px;
    line-height: 1.5;
    outline: none;
    cursor: pointer;
 
    
  
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }

    &:hover,
    &:focus {
      border-color: rgba(230, 83, 60, 1);
    }

    &.profile {
      width: 135px;
      border: none;
  }
  }
`;

export const StyledIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${(props) => props.stroke || 'white'};
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 10px;
  &:hover {
    use {
      fill: #ef8964;
    }
  }
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 14px;
  }
`;
