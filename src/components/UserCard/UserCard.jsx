import { useDispatch, useSelector } from 'react-redux';

import sprite from '../../assets/sprite.svg';
import {
  ActivityShower,
  AvatarContainer,
  AvatarInput,
  AvatarPickerSvg,
  CalorieShower,
  DefaultAvatarSvg,
  Desc,
  DescWrapper,
  ExcellMarkIcon,
  FoodSvg,
  Label,
  NameUserWrapper,
  NewAvatar,
  ParamsSvg,
  ProfileContainer,
  Span,
  Text,
  TextCalorie,
  UserName,
  UserNameDescription,
  UserParamsWrapper,
  WrapperAvatar,
  WrapperIntake,
  WrapperIntakeFood,
  WrapperLogOut,
} from './UserCard.styled';
import { LogOutBtn } from '../../helperComponents/LogOutBtn/LogOutBtn';
import { selectUserLargeAvatar } from '../../redux/auth/auth-selectors';
import {
  selectProfileName,
  selectUserProfile,
} from '../../redux/profileSettings/selectors';
import { updatedUserAvatar } from '../../redux/profileSettings/operations';
import { useState } from 'react';
import MyLoader from '../Loader/DiaryLoader';

export const UserCard = () => {
  const dispatch = useDispatch();
  const avatar = useSelector(selectUserLargeAvatar);
  const ownerProfile = useSelector(selectUserProfile);
  const currentName = useSelector(selectProfileName);

  const [loading, setLoading] = useState(false);

  const handleAvatarChange = async (e) => {
    const newAvatarFile = e.target.files[0];

    if (newAvatarFile) {
      setLoading(true);
      await dispatch(updatedUserAvatar(newAvatarFile));

      setLoading(false);
    }
  };

  return (
    <ProfileContainer>
      <WrapperAvatar>
        <AvatarContainer>
          <AvatarInput
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </AvatarContainer>
        <Label htmlFor="file-input">
          <AvatarPickerSvg>
            <use href={`${sprite}#icon-check-mark-1`} />
          </AvatarPickerSvg>
        </Label>
        <div>
          {loading ? (
            <MyLoader />
          ) : avatar ? (
            <NewAvatar src={avatar} alt="Preview" />
          ) : (
            <div>
              {
                <DefaultAvatarSvg>
                  <use href={sprite + '#icon-gridicons_user'} />
                </DefaultAvatarSvg>
              }
            </div>
          )}
        </div>
      </WrapperAvatar>
      <NameUserWrapper>
        <UserName>{currentName}</UserName>
        <UserNameDescription>User</UserNameDescription>
      </NameUserWrapper>

      <UserParamsWrapper>
        <CalorieShower>
          <WrapperIntakeFood>
            <FoodSvg>
              <use href={sprite + '#icon-fluent_food-24-filled'} />
            </FoodSvg>
            <TextCalorie>Daily calorie intake</TextCalorie>
          </WrapperIntakeFood>
          <Span>{Math.round(ownerProfile.bmr)}</Span>
        </CalorieShower>
        <ActivityShower>
          <WrapperIntake>
            <ParamsSvg>
              <use href={sprite + '#icon-dumbbell'} />
            </ParamsSvg>
            <Text>Daily physical activity</Text>
          </WrapperIntake>
          <Span>{ownerProfile.time} min</Span>
        </ActivityShower>
      </UserParamsWrapper>
      <DescWrapper>
        <div>
          <ExcellMarkIcon>
            <use
              href={sprite + '#icon-Ellipse-1'}
              style={{
                fill: 'rgba(239, 160, 130, 1)',
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            />
            <use
              href={sprite + '#icon-tabler_exclamation-mark'}
              style={{
                fill: 'rgba(239, 237, 232, 1)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
              }}
            />
          </ExcellMarkIcon>
        </div>
        <Desc>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </Desc>
      </DescWrapper>
      <WrapperLogOut>
        <LogOutBtn />
      </WrapperLogOut>
    </ProfileContainer>
  );
};
