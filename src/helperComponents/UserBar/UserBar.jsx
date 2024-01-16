import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { IconWrapper, ProfileLink } from './UserBar.styled';

export const UserBar = () => {
  return (
    <>
      <Link to="/profile">
        <IconWrapper>
          <use href={`${sprite}#icon-settings-01`}></use>
        </IconWrapper>
      </Link>
      <ProfileLink to="/profile">
        <IconWrapper size="24px">
          <use href={`${sprite}#icon-gridicons_user`}></use>
        </IconWrapper>
      </ProfileLink>
    </>
  );
};
