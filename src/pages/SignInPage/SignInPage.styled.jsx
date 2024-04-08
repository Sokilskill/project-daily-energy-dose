import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SignInPart = styled.div`
  padding-bottom: 74px;
  background: linear-gradient(
    330deg,
    rgba(4, 4, 4, 0) 8%,
    rgba(0, 0, 0, 0.8) 40%
  );
`;

export const TextBox = styled.div`
  max-width: 335px;
  margin-bottom: 28px;
`;

export const Title = styled.h2`
  color: var(--white, #efede8);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;
  margin-bottom: 14px;
`;

export const SignInText = styled.p`
  color: var(--border, #efede84d);
  font-size: 14px;
  line-height: 1.28;
`;

export const OptionText = styled.p`
  margin-top: 12px;
  color: var(--secondary-text-color-1, #efede899);
  font-size: 12px;
  line-height: 1.5;
`;

export const SignUpLink = styled(Link)`
  color: var(--white, #efede8);
  text-decoration-line: underline;
`;
