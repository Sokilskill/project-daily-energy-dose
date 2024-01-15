import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { IconWrapper } from './UserBar.styled';

export const UserBar = () => {
  return (
    <>
      <Link to="/profile">
        <IconWrapper stroke="rgba(239, 237, 232, 0.3)">
          <use href={`${sprite}#icon-settings-01`}></use>
        </IconWrapper>
      </Link>
      <Link to="/profile">
        <IconWrapper fill="blue">
          <use href={`${sprite}#icon-settings-01`}></use>
        </IconWrapper>
      </Link>
    </>
  );
};
