import React from 'react';
import LittleEventCard from "../LittleEventCard/LittleEventCard";

const Events = ({data}) => {
    return (
        <div className={"EventCards"}>
            {data && data.content.length > 0 ?
                data.content.map((event, id) => {
                    return <LittleEventCard data={event} key={id}/>
                }) : ""}
        </div>
    );
};

export default Events;
