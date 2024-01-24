import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { updatedUserAvatar } from '../../redux/profileSettings/operations';
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
} from "./UserCard.styled";
import { LogOutBtn } from "../../helperComponents/LogOutBtn/LogOutBtn";
import { selectUser } from "../../redux/auth/auth-selectors";
import { selectProfileName, selectUserProfile } from "../../redux/profileSettings/selectors";
import { setAvatarURL } from "../../redux/profileSettings/slice";

export const UserCard = () => {
  const dispatch = useDispatch();
  // const userProfile = useSelector(selectUser);

  const ownerProfile = useSelector(selectUserProfile);
  const currentName = useSelector(selectProfileName);
  const [avatarPreviewURL, setAvatarPreviewURL] = useState(null);


  const [loading, setLoading] = useState(false);
  // const currentName = userName ? userName : userProfile.name;

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const blob = new Blob([file]);
        const newAvatarFile = URL.createObjectURL(blob);
        setAvatarPreviewURL(newAvatarFile);

        const data = await dispatch(updatedUserAvatar(newAvatarFile));
        console.log("newAvatar ProfilePage", newAvatarFile);
        console.log("data", data);
      } catch (error) {
        console.error("Failed to create object URL:", error);
        toast.error("Failed to update avatar");
      } finally {
        setLoading(false);
        // e.target.form.reset();
      }
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
            onChange={(e) => handleAvatarChange(e)}
          />
        </AvatarContainer>
        <Label htmlFor="file-input">
          <AvatarPickerSvg>
            <use href={`${sprite}#icon-check-mark-1`} />
          </AvatarPickerSvg>
        </Label>
        <div>
          {avatarPreviewURL ? (
            <NewAvatar src={avatarPreviewURL} alt="Preview" />
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
              <use href={sprite + '#icon-fluenit_food-24-filled'} />
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
          <Span>{ownerProfile.sportTime} min</Span>
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
