import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IconWrapper = styled.svg`
  display: inline-block;
  width: ${(props) => props.size || '28px'};
  height: ${(props) => props.size || '28px'};
  fill: ${(props) => props.color || 'currentColor'};
  stroke: ${(props) => props.stroke || 'rgba(239, 237, 232, 0.3)'};
  transition: stroke 250ms linear;

  &:hover,
  &:focus {
    fill: ${(props) => props.hoverColor || 'unset'};
    stroke: ${(props) => props.hoverStroke || '#e6533c'};
  }
`;

export const ProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid #e6533c;
  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0.3);
`;
