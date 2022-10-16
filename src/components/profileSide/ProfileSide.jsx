import React from 'react';
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileSide.css"
import FollowersCard from "../FollowersCard/FollowersCard";

const ProfileSide = () => {
    return (
        <div className={"ProfileSide"}>
            <ProfileCard location={"homepage"}/>
            <FollowersCard/>
        </div>
    );
};

export default ProfileSide;
