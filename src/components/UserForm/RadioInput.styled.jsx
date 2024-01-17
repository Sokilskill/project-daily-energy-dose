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
gap: 32px;
`;

export const BloodWrapper = styled.div`
  width: 100%;
gap: 8px;
  @media (min-width: 768px) {
    width: 380px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin: 120px auto 0 auto;
  }
`;

// export const RadioForm = styled(Form)`
//   display: flex;
//   gap: 20px;
//   flex-direction: column;
//   margin: 24px 0 0 0;
//   @media (min-width: 834px) {
//     width: 380px;

//     margin: 24px auto 0 auto;
//   }
//   @media (min-width: 1440px) {
//     width: 212px;
//     margin: 24px 0 0 0;
//   }
// `;

export const BloodLabel = styled.label`
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var( --white, #efede8;)
`;

export const RadioFieldStyled = styled(Field)`
  appearance: none;

  min-width: 10px;
  min-height: 10px;

  font: inherit;
  color: var (--orange-1, #ef8964);
  background-color: var( --black, #040404);

  border: 0.11em solid $var(--secondary-text-color, #efede866;);
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      var (--orange-1, #ef8964); 40%,
      // transparent 50%
    );
  }
`;


export const ErrorMessageStyled = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin: 4px 0 0 0;
  color: var(--error-color, #d80027);
`;
