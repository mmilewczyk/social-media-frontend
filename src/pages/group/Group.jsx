import React from 'react';
import "./Group.css"
import GroupCard from "../../components/GroupCard/GroupCard";
import ProfileSide from "../../components/profileSide/ProfileSide";

const Group = () => {
    return (
        <div className={"Group"}>
            <GroupCard/>
            <ProfileSide/>
        </div>
    );
};

export default Group;
