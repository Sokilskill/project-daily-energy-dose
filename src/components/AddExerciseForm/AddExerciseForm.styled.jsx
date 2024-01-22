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
  
  border-radius: 12px;
  border: 1px;
  background: linear-gradient(0deg, #10100F, #10100F),
  linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

  @media (min-width: 768px) {
    width: 694px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`
export const Container = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }

`;
export const Flex = styled.div`
  @media (min-width: 768px) {
    displey:flex;
    flex-wrap: wrap;
  }
  
`;
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

export const ButtonDiv = styled.div`

text-align: center;
`;

export const Text = styled.p`
margin-bottom: 4px;
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0px;
text-align: left;
color: var(--secondary-text-color);
text-align: center;
`;

export const StyledList = styled.ul`
  margin-top: 40px;
  list-style: none;
  displey:flex;
  flex-wrap: wrap;
  align-content: space-between;

  @media (min-width: 768px) {
    margin-top: 0;
  }
}
`;

export const StyledListItem = styled.li`
  margin:8px;
  display: inline-block;
  border: 1px solid var(--border);
  width: 40%;

  padding: 10px;
  border-radius: 12px;
  gap: 32px;
  background: linear-gradient(0deg, rgba(239, 237, 232, 0.05), rgba(239, 237, 232, 0.05));
`;

export const Workout = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--secondary-text-color);
  
`
export const WorkoutName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--whiter);
`
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

