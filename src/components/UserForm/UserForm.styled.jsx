import styled from '@emotion/styled';
import {  Field, Form } from 'formik';

export const ErrorMessageStyled = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--error-color, #d80027);
  margin: 0 0 0 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;

`;



export const FormContainer = styled(Form)`
 
  

  @media (min-width: 768px) {
    width: 696px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    margin: 0 64px 0 0;
  }
`;

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 19px 0 0 0;
  gap: 14px;
  @media (min-width: 768px) {
    width: 696px;
    margin: 38px 0 0 0;
    flex-direction: row;
    gap: 14px;
  }
`;
export const NameEmailWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;

@media (min-width: 768px) {
 width: 341px;
}
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 1.3;
  color: var(--secondary-color-text, rgba(239, 237, 232, 0.5));
`;



export const UserField = styled.input`
  width: 100%;
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
    // margin: 8px 0 0 0;
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
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
  @media (min-width: 768px) {
    width: 140px;
  }
`;
export const HeightField = styled(Field)`
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
    // margin: 8px 0 14px 0;
  }
`;

export const CurrentWeightWrapper = styled.div`
width: 161px;
`;

export const CurrentWeightField = styled(Field)`
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
    // margin: 8px 0 14px 0;
  }
`;

export const HeightWrapper = styled.div`
width: 160px;

@media (min-width: 768px) {
  width: 168px;
 
 
}
`;
export const DesiredWeightWrapper = styled.div`
@media (min-width: 768px) {
  width: 140px;

}

`;
export const DesiredWeightField = styled(Field)`
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
  @media (min-width: 1440px){
   margin: 48px 0 0 0;
  
  
  }

`;



export const ProfileCalendarInput = styled.div`
  position: relative;
  // margin-bottom: 20px;
  border: 1px solid var(--border, #efede84d);
  border-radius: 12px;
  height: 52px;
  margin-top: 3px;
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
 
  
  @media screen and (min-width: 768px) {
    width: 187px;
  }
`;

export const BirthdayPickerField = styled(Field)`

`;

export const RadioContainer = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
  `;

  export const WrapperRadio = styled.div`
width: 100%;
display: flex;
margin: 5px 0 0 0;
gap: 21px;
@media (min-width: 768px) {
  gap: 20px;
}

`;

export const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 5px 0 0 0;
gap: 9px;
@media (min-width: 768px) {
  gap: 8px;
}

`;

export const BloodWrapper = styled.div`
  width: 100%;
  display: flex;
gap: 8px;
  @media (min-width: 768px) {
    gap: 32px;
    width: 379px;
  }
 
`;

export const RadioLabel = styled.label`
display: flex;
align-items: center;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
gap: 8px;
color: var(--white, #efede8);
@media (min-width: 768px) {
  font-size: 16px;
}
`;

export const ActivField = styled(Field)`
  appearance: none;

  min-width: 20px;
  min-height: 20px;

  font: inherit;
  color: var( --white, #efede8) ;
  background-color: black;

  border: 2px solid var(--border, #efede84d);
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      var(--orange-1, #ef8964) 40%,
      transparent 50%
    );
    border: 2px solid var(--orange-1, #ef8964);
  }
  @media (min-width: 768px) {
    min-width: 18px;
    min-height: 18px;
  }

`;

export const LevelWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 42px 0 0 0;
gap: 9px;
@media (min-width: 768px) {
  gap: 8px;
  margin: 32px 0 0 0;
}
`;