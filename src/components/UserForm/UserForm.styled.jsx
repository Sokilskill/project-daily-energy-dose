import styled from '@emotion/styled';
import {  Form } from 'formik';

export const ErrorMessageStyled = styled.div`


  font-size: 12px;
  font-weight: 400;
  color: var(--error-color, #d80027);
  margin: 0 0 0 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UserContainer = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  margin: 19px 0 0 0;
  @media (min-width: 768px) {
    width: 696px;

    margin: 38px 0 0 0;
    flex-direction: row;
    gap: 14px;
  }
`;

export const MainFormContainer = styled(Form)`
 
  

  @media (min-width: 768px) {
    width: 696px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    margin: 0 64px 0 0;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 1.3;
  color: var(--secondary-color-text, rgba(239, 237, 232, 0.5));
`;
export const EmailWrapper = styled.div`
margin: 14px 0 0 0;
`;
export const UserInput = styled.input`
  width: 335px;
  height: 46px;
  border-radius: 12px;
  margin: 4px 0 0 0;
  padding: 14px;
  display: inline-flex;
  background: transparent;
  outline: none;
  border: 1px solid var(--input-border, rgba(239, 237, 232, 0.3));
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: var(--white, #efede8);
&:hover{
  border-color: var(--orange, #e6533c);
}

}
  @media (min-width: 768px) {
    width: 341px;
    height: 52px;
    margin: 8px 0 0 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    // justify-content: space-between
  }
`;

export const ProfileWrapper = styled.div`
  width: 335px;
  display: flex;
  gap: 14px;
  margin: 14px 0 0 0;
`;

export const ProfileCalendarWrapper = styled.div`
  width: 335px;
  display: flex;
  gap: 14px;
  margin: 14px 0 0 0;

  @media (min-width: 768px) {
    margin: 14px 0 0 6px;
  }
`;

export const DesiredWeight = styled.div`
width: 160px;
@media (min-width: 768px){
  width: 140px;
}
`;
export const HeightInput = styled.input`
  width: 160px;
  height: 46px;
  border-radius: 12px;
  margin: 4px 0 0 0;
  padding: 14px;
  display: inline-flex;
  background: transparent;
  outline: none;
  border: 1px solid var(--input-border, rgba(239, 237, 232, 0.3));
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: var(--white, #efede8);
  &:hover{
    border-color: var(--orange, #e6533c);
  }
  @media (min-width: 768px) {
    width: 168px;
    height: 52px;
    margin: 8px 0 14px 0;
  }
`;

export const CurrentWeightInput = styled.input`
  width: 161px;
  height: 46px;
  border-radius: 12px;
  margin: 4px 0 0 0;
  padding: 14px;
  display: inline-flex;
  background: transparent;
  outline: none;
  border: 1px solid var(--input-border, rgba(239, 237, 232, 0.3));
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: var(--white, #efede8);
  &:hover{
    border-color: var(--orange, #e6533c);
  }
  @media (min-width: 768px) {
    width: 159px;
    height: 52px;
    margin: 8px 0 14px 0;
  }
`;

export const DesiredWeightInput = styled.input`
width: 160px;
height: 52px;
border-radius: 12px;
margin: 4px 0 0 0 ;
padding: 14px;
display: inline-flex;
background: transparent;
outline: none;
border: 1px solid var( --input-border, rgba(239, 237, 232, 0.30));
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.3;
color: var( --white, #efede8);
&:hover{
  border-color: var(--orange, #e6533c);
}
@media (min-width: 768px){
  width: 140px;

  margin: 8px 0 0 0;
}
`;


export const SaveButton = styled.button`
  display: inline-block;
  min-width: 115px;
  height: 42px;
  padding: 12px;
  margin: 40px 0 0 0;
  border-radius: 12px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;
  color: var(--white, #efede8);
  background-color: var(--orange, #e6533c);
  &:hover,
  &:focus {
    background-color: var(--orange-1, #ef8964);
  
  }
`;



export const ProfileCalendarInput = styled.div`
  position: relative;
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid var(--input-border-color, #ced4da);
    border-radius: 12px;
    outline: none;
    &:hover{
      border-color: var(--orange, #e6533c);
    }
  }

  .error-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
  }

  .error-message {
    color: var(--error-color, #d80027);
    font-size: 12px;
    margin-top: 4px;
  }
`;

