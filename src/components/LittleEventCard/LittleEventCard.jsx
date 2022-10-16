import React from 'react';
import {UilMapPin} from "@iconscout/react-unicons";
import "./LittleEventCard.css"

const LittleEventCard = ({data}) => {
    return (
        <div className={"EventCard"}>
            <img src={""} alt={""}/>
            <div className={"e-info"}>
                <span>{data ? `${data.startAt}` : "Date"}</span>
                <span>{data ? `${data.name}` : "Event name"}</span>
                <span><UilMapPin/>{data ? `${data.location}` : "Location"}</span>
            </div>
            <div className={"e-options"}>
                <button className={"button cs-button"}>Join</button>
            </div>
        </div>
    );
};

export default LittleEventCard;
