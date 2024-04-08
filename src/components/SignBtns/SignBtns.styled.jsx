import styled from '@emotion/styled';

export const Buttons = styled.div`
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;
export const SignButton = styled.button`
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white, #efede8);
  border: 1px solid var(--border, #efede84d);
  transition:
    border-color 250ms linear,
    background-color 250ms linear;
  background-color: ${(props) =>
    props.orange ? 'var(--orange, #e6533c);' : 'transparent'};
  &:hover,
  &:focus {
    ${(props) =>
      props.orange
        ? 'background-color: var(--orange-1, #ef8964)'
        : 'border-color: var(--orange, #e6533c)'}
  }

  @media (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
