import { Field, Form } from 'formik';
import styled from '@emotion/styled'



export const RadioContainer = styled.div`
  width: 100%;
  margin: 20px 0 0 0;

  @media (min-width: 768px) {
    // width: 704px;
margin: 16px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
  }
  @media (min-width: 1440px) {
    // width: 696px;
    // display: flex;
    // align-items: flex-start;
  }
`;

export const Wrapper = styled.div`
width: 100%;
display: flex;
margin: 5px 0 0 0;
gap: 9px;
@media (min-width: 768px) {
  gap: 8px;
}

`;

export const BloodWrapper = styled.div`
  width: 100%;
  display: flex;
gap: 21px;
  @media (min-width: 768px) {
    gap: 32px;
    width: 379px;
  }
 
`;

export const Text = styled.p`
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.3;
margin: 20px 0 0 0;
color: var( --secondary-text-color, #efede866);
@media (min-width: 768px) {
  margin: 18px 0 0 0;
}
`;

export const Label = styled.label`
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


// export const ActivLabel = styled.label`
//   font-size: 14px;
//   line-height: 1.43;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   justify-content: flex-start;
//   @media (min-width: 834px) {

//     letter-spacing: 0.01em;
//   }
// `;

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


export const ErrorMessageStyled = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin: 4px 0 0 0;
  color: var(--error-color, #d80027);
`;
