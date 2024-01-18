import styled from '@emotion/styled';


export const Backdrop  = styled.div`;
  z-index: 1;
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
background: linear-gradient(0deg, #10100F, #10100F),
 linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

`;

export const Close = styled.div`
position: absolute;
top: 14px;
left: 299px;
cursor: pointer;
`

export const Text = styled.p`
  margin-bottom: 24px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #EFEDE84D;
`;

export const Form = styled.form`
padding: 24px,48px,25px,48px;
`

export const Input = styled.input`
display: block;
margin-bottom: 16px;
width: 287px;
height: 34px;
padding: 8px, 14px, 8px, 14px;
border-radius: 12px;
border: 1px;
gap: 10px;
border: 1px solid #E6533C;
background: var(--black);
flex: 1;
` 
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;


export const Placeholder = styled.span`
  position: absolute;
  right: 10px; 
  pointer-events: none; 
  color: #EFEDE866;

`;

export const Buttons = styled.div`
display: flex;

`

export const Button = styled.button`

width: 130px;
height: 42px;
margin-right: 14px;
padding: 12px, 32px, 12px, 32px;
border-radius: 12px;
gap: 10px;
background: var(--black) ;
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: center;
color: var(--white);

&:hover {
    background-color: #E6533C;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #E6533C;
  }

`;


