import React from "react";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { UserCard } from "../../components/UserCard/UserCard";

const ProfilePage = () => {
    return (
        <div>
            <TitlePage text="Profile Settings" />
            <UserCard/>
        </div>
    )
};

export default ProfilePage;
