import sprite from '../../assets/sprite.svg';
import { AvatarLink, IconWrapper, ProfileLink } from './UserBar.styled';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';

export const UserBar = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <ProfileLink to="/profile">
        <IconWrapper>
          <use href={`${sprite}#icon-settings-01`}></use>
        </IconWrapper>
      </ProfileLink>

      <AvatarLink to="/profile">
        {user.avatarURL ? (
          <img src={user.avatarURL} alt="avatar" width="24" height="24" />
        ) : (
          <IconWrapper size="24px">
            <use href={`${sprite}#icon-gridicons_user`}></use>
          </IconWrapper>
        )}
      </AvatarLink>
    </>
  );
};
