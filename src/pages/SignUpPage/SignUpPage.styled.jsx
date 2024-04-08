import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SignUpPart = styled.div`
  background: linear-gradient(
    330deg,
    rgba(4, 4, 4, 0) 8%,
    rgba(0, 0, 0, 0.8) 40%
  );

  @media (min-width: 768px) {
    background: none;
  }
`;

export const TextBox = styled.div`
  max-width: 335px;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    min-width: 496px;
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  color: var(--white, #efede8);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  color: var(--border, #efede84d);
  font-size: 14px;
  line-height: 1.28;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const OptionText = styled.p`
  margin-top: 12px;
  color: var(--secondary-text-color-1, #efede899);
  font-size: 12px;
  line-height: 1.5;
`;

export const SignInLink = styled(Link)`
  color: var(--white, #efede8);
  text-decoration-line: underline;
`;
