import styled from '@emotion/styled';

export const Backdrop  = styled.div`;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 335px;
  padding: 48px 24px;
  border-radius: 12px;
  border: 1px;
  background: linear-gradient(0deg, #10100f, #10100f),
    linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

  @media screen and (min-width: 768px) {
    width: 479px;
  }
`;

export const Close = styled.button`
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  color: var(--white);
  padding: 0px;
  width: 22px;
  height: 22px;
`;

export const Text = styled.p`
  
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;
  text-align: left;
  color: var(--calendar-arrows);

`;

export const Accent = styled.span`
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  color: var(--white);
  font-size: 12px;
  line-height: 1.5;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 64px;
  }
`; 

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 34px;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid var(--orange);
  background: rgba(0, 0, 0, 0);
  color: var(--white);
  outline: none;

  :hover,
  :focus {
    border: 1px solid var(--orange-1);
  }
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`; ; 

export const InputContainer = styled.div`
 
  
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`;

export const Placeholder = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  position: absolute;
  top: 8px;
  right: 10px;
  pointer-events: none;
  color: var(--calendar-arrows);

  @media screen and (min-width: 768px) {
    top:11px;
    right: 14px;
  }
`;

export const Buttons = styled.div`
  display: flex;
`
export const Button1 = styled.button`
  padding: 12px 32px 12px 32px;
  border-radius: 12px;
  background: var(--orange);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white);
  margin-right: 14px;

  &:hover,
  :focus {
    background-color: var(--orange-1);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5; 
  }
`;
export const Button2 = styled.button`
  padding: 11px 35px 11px 35px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white);
  border: 1px solid var(--border);

  &:hover,
  :focus {
    border: 1px solid var(--orange);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 39px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const ImitationInput = styled.div`
    width: 287px;
    height: 34px;
    border-radius: 12px;
    border: 1px solid var(--orange);
    background-color: rgba(0,0,0,0);
    padding: 8px 14px;
    

    @media screen and (min-width: 768px){
    width: 244px;
    height: 40px;
  }

`
export const TextInInput = styled.p`
color: var(--input-border);

font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28;

@media screen and (min-width: 768px){
    font-size: 16px;
    line-height: 1.5;
  }
`