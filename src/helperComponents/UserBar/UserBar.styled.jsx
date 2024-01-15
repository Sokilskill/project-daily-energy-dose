import styled from 'styled-components';

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '28px'};
  height: ${(props) => props.size || '28px'};
  fill: ${(props) => props.color || 'currentColor'};
  stroke: ${(props) => props.stroke || 'rgba(239, 237, 232, 0.3)'};
  display: inline-block;

  &:hover,
  &:focus {
    fill: red;
  }
`;
