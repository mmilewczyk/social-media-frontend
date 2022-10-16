import React from 'react';
import './Profile.css'
import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PostSide from "../../components/postSide/PostSide";
import LeftSide from "../../components/leftSide/LeftSide";

const Profile = () => {
    return (
        <div className={"Profile"}>
            <LeftSide/>
            <div className={"Profile-center"}>
                <ProfileCard location={"profilePage"}/>
                <PostSide/>
            </div>
            <ProfileLeft/>
        </div>

    );
};

export default Profile;
