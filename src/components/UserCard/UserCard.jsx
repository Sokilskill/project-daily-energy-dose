import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedUserAvatar } from '../../redux/profileSettings/operations';
import sprite from '../../assets/sprite.svg';
import { selectUserProfile } from '../../redux/profileSettings/selectors';

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
  LogoutLink,
  LogoutText,
  NameUserWrapper,
  NewAvatar,
  ParamsSvg,
  ProfileContainer,
  Span,
  SpanIntake,
  Text,
  TextCalorie,
  UserNameDescription,
  UserParamsWrapper,
  WrapperAvatar,
  WrapperIntake,
  WrapperIntakeFood,
} from './UserCard.styled';

export const UserCard = ({ bmr, time }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);
  const [avatarPreviewURL, setAvatarPreviewURL] = useState(
    userProfile.avatarURL
  );
  const [showPreview, setShowPreview] = useState(true);
  const [previewStyle, setPreviewStyle] = useState({});
  const [avatarStyle, setAvatarStyle] = useState({});
  // const user = useSelector(selectCurrentUser)
  //don't forget to write logout logic

  const handleAvatarChange = async (e) => {
    const newAvatarFile = e.target.files[0];

    if (newAvatarFile) {
      try {
        const blob = new Blob([newAvatarFile]);
        const objectURL = URL.createObjectURL(blob);
        setAvatarPreviewURL(objectURL);

        const data = await dispatch(updatedUserAvatar(newAvatarFile));
        console.log(newAvatarFile);
        e.target.form.reset();
      } catch (error) {
        console.error('Failed to create object URL:', error);
      }
    }
  };

  useEffect(() => {
    if (showPreview) {
      setPreviewStyle({ borderRadius: '50%', width: '100%', height: '100%' });
      setShowPreview(false);
    }
  }, [showPreview]);

  useEffect(() => {
    if (!showPreview) {
      setAvatarStyle({ width: '90px', height: '90px' });
    }
  }, [showPreview]);
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
            <use href={sprite + '#icon-check-mark-1'} />
          </AvatarPickerSvg>
        </Label>
        <div>
          {avatarPreviewURL ? (
            <NewAvatar src={avatarPreviewURL} alt="Preview" />
          ) : (
            <div>
              {!userProfile.avatarURL && (
                <DefaultAvatarSvg>
                  <use href={sprite + '#icon-gridicons_user-1'} />
                </DefaultAvatarSvg>
              )}
            </div>
          )}
        </div>
      </WrapperAvatar>
      <NameUserWrapper>
        {/* <UserName>{user.name}</UserName> */}
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
          {/* <Span>{Math.round(bmr)}</Span> */}
          <SpanIntake>0</SpanIntake>
        </CalorieShower>
        <ActivityShower>
          <WrapperIntake>
             <ParamsSvg>
            <use
              href={sprite + '#icon-dumbbell'}
            />
          </ParamsSvg>
          <Text>Daily physical activity</Text> 
          </WrapperIntake>
          <Span>{time}0 min</Span>
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
       
         <LogoutLink to="/welcome"> 
            <LogoutText>Logout</LogoutText>
        <svg style={{ width: '20px', height: '20px' }}>
          <use
            href={sprite + '#icon-log-out-01-2'}
            style={{
              fill: 'rgba(230, 83, 60, 1)',
              width: '100%',
              height: '100%',
            }}
          />
        </svg>
      </LogoutLink>
        
        
     
    </ProfileContainer>
  );
};
