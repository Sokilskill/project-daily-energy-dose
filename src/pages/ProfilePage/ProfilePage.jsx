import React from 'react';
import { TitlePage } from '../../components/TitlePage/TitlePage';
import { UserCard } from '../../components/UserCard/UserCard';
import {
  ProfileContainer,
  ReversDiv,
  TitleContainer,
  UserCardContainer,
  UserFormContainer,
} from './ProfilePage.styled';
import { UserForm } from '../../components/UserForm/UserForm';

const ProfilePage = () => {
  return (
    
      
      <ProfileContainer>
        <TitleContainer>
        <TitlePage text="Profile Settings" />
      </TitleContainer>
        <ReversDiv>
          <UserCardContainer>
            <UserCard />
          </UserCardContainer>

          <UserFormContainer>
            <UserForm />
          </UserFormContainer>
        </ReversDiv>
      </ProfileContainer>
  );
};

export default ProfilePage;
