import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
  padding: 48px 0;
  text-align: center;
  border-radius: 12px;
  border: 1px;
  background: linear-gradient(0deg, #10100F, #10100F),
  linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

    @media (min-width: 768px) {
      width: 430px;
    }
`;
export const Close = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`
export const Div = styled.div`
  text-align: center;
  margin-bottom: 27px;
`;

export const Image = styled.img`
  display: inline-block;
  width: 118px;
  height: 73px;
  top: 48px;
  left: 109px;
`;

export const Title = styled.p`
  margin-bottom: 16px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--white);
  text-align: center;
`;

export const Text = styled.p`
  margin-right: 9px;
  margin-bottom: 4px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--white);
  text-align: center;
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

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--white);
`

