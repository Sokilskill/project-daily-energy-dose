import { TitlePage } from '../../components/TitlePage/TitlePage';
import { UserCard } from '../../components/UserCard/UserCard';
import {
  ProfileContainer,
  ReversDiv,
  TitleContainer,

} from './ProfilePage.styled';
import { UserForm } from '../../components/UserForm/UserForm';

const ProfilePage = () => {
  return (
    <ProfileContainer className="container">
      <TitleContainer>
        <TitlePage text="Profile Settings" />
      </TitleContainer>

      <ReversDiv>

          <UserCard />



          <UserForm />

      </ReversDiv>
    </ProfileContainer>
  );
};

export default ProfilePage;
