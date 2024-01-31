import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const IconWrapper = styled.svg`
  display: inline-block;
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
  fill: ${(props) => props.color || 'currentColor'};
  stroke: ${(props) => props.stroke || 'rgba(239, 237, 232, 0.3)'};
  transition: stroke 250ms linear;

  &:hover,
  &:focus {
    fill: ${(props) => props.hoverColor || 'unset'};
    stroke: ${(props) => props.hoverStroke || '#e6533c'};
  }

  &@media screen and (min-width: 768px) {
    width: ${({ deskWidth }) => deskWidth || '28px'};
    height: ${({ deskHeight }) => deskHeight || '28px'};
  }
`;

export const ProfileLink = styled(Link)`
  display: block;
  width: 24px;
  height: 24px;

  &@media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const AvatarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 37px;
  height: 37px;

  border: 1px solid #e6533c;
  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0.3);

  &@media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
