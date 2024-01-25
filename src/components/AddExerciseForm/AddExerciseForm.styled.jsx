import styled from '@emotion/styled';


export const Backdrop  = styled.div`;
  z-index: 999;
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
  background: linear-gradient(0deg, #10100f, #10100f),
    linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerBtn = styled.div`
  @media screen and (min-width: 768px) {
    width: 345px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const Flex = styled.div`
  @media screen and (min-width: 768px) {
    
    display: flex;
    justify-content: space-between;
  }
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

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 4px;
`;

export const TimerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 8px;
  background-color: var(--orange);
  margin: 14px 0 8px 0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d6432c;
  }
`;

export const Accent = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--orange);
  text-align: center;
`;

export const Text = styled.p`

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
  display:flex; 
  flex-wrap: wrap;
  gap: 8px;
  
  
  list-style: none;
  @media screen and (min-width: 768px) {
    width: 345px;
  }
}
`;

export const StyledListItem = styled.li`
  border: 1px solid var(--calendar-button-border);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 12px 18px;
  width: calc((100% / 2) - 8px);
  @media screen and (min-width: 768px) {
    width: calc((100% / 2) - 4px);
  }
`;

export const Workout = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    line-height: 1.5;
    margin-bottom: 4px;
  }
`;
export const WorkoutName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--whiter);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  }
`;
export const Button = styled.button`
  
  margin-top: 24px;

  padding: 12px 32px 12px 32px;
  border-radius: 12px;

  background: #e6533c;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white);

  &:hover {
    background-color: #e6533c;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #e6533c;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 14px 32px;
    line-height: 1.5; 
  }
`;

