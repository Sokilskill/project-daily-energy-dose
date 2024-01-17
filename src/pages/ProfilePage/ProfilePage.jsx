import React from "react";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { UserCard } from "../../components/UserCard/UserCard";
import { ProfileContainer } from "./ProfilePage.styled";

const ProfilePage = () => {
    return (
        <ProfileContainer>
            <TitlePage text="Profile Settings" />
            <UserCard/>
        </ProfileContainer>
    )
};

export default ProfilePage;
