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
  background: linear-gradient(0deg, #10100f, #10100f),
    linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

  @media screen and (min-width: 768px) {
    width: 430px;
    padding: 64px 0
  }
`;
export const Close = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  background-color: rgba(0,0,0,0);
  color: var(--white);
  height: 22px;
  padding: 0;
`
// export const Div = styled.div`
//   text-align: center;

  
// `;
export const Image = styled.img`
  display: inline-block;
  width: 123px;
  height: 97px;
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
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
  margin-bottom: 24px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--border);
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
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

export const Button = styled.button`
  
  margin-bottom: 16px;
  padding: 14px 32px;
  border-radius: 12px;
  background: #E6533C;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
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
  color: var(--border);
`

export const IconAdd = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--input-border);
  margin-left: 8px;
`;