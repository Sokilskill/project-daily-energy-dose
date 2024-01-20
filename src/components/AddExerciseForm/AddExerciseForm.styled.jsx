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
  padding: 48px 32px;
  text-align: center;
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
export const Div = styled.div`
  text-align: center;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  display: inline-block;
  width: 270px;
  height: 226px;
  top: 48px;
  left: 32px;
  padding: 45px, 105px, 45px, 105px;
  border-radius: 12px;
  border: 1px;
  gap: 32px;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TimerButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;
  color: #fff;
  border-radius: 1px;

  background-color: #E6533C;
  &:hover {
    background-color: #D6432C;
  }
`;

export const Text = styled.p`
margin-bottom: 4px;
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0px;
text-align: left;
color: #EFEDE84D;
text-align: center;
`;
export const StyledList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`;

export const StyledListItem = styled.li`
margin-bottom: 10px;
padding: 10px;
background-color: #3498db;
color: #fff;
`;
export const Button = styled.button`
width: 157px;
height: 42px;
margin-top: 24px;
margin-bottom: 16px;
padding: 12px, 32px, 12px, 32px;
border-radius: 12px;
gap: 10px;
background: #E6533C;
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

