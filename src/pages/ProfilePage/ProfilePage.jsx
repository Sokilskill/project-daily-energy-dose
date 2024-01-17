import React from "react";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { UserCard } from "../../components/UserCard/UserCard";
import { ProfileContainer } from "./ProfilePage.styled";
import { UserForm } from "../../components/UserForm/UserForm";

const ProfilePage = () => {
    return (
        <ProfileContainer>
            <TitlePage text="Profile Settings" />
            <UserCard/>
            <UserForm/>
        </ProfileContainer>
    )
};

export default ProfilePage;
