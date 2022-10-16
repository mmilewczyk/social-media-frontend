import React from 'react';
import "./Event.css"
import EventCard from "../../components/EventCard/EventCard";
import ProfileSide from "../../components/profileSide/ProfileSide";

const Event = () => {
    return (
        <div className={"Event"}>
            <EventCard/>
            <ProfileSide/>
        </div>
    );
};

export default Event;
