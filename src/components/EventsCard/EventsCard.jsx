import React, {useEffect} from 'react';
import './EventsCard.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllEvents} from "../../actions/EventAction";
import {Link} from "react-router-dom";

const EventsCard = () => {

    const dispatch = useDispatch();
    const {events} = useSelector((state) => state.eventReducer)

    useEffect(() => {
        dispatch(getAllEvents())
    }, [dispatch]);


    return (
        <div className={"EventsCard"}>
            <h3>Events</h3>
            {events ? events.content.slice(0, 2).map((foundedEvent) => {
                return (
                    <Link to={`/event/${foundedEvent.eventId}`} style={{color: "#2f3e46", textDecoration: "none"}}>
                        <div className={"EventC-item"}>
                            <span>{foundedEvent.name}</span>
                            <span>{foundedEvent.location} | Organizer {foundedEvent.organizer.username}</span>
                        </div>
                    </Link>
                )
            }) : ""}
            <Link to={`/events`} style={{color: "#2f3e46", textDecoration: "none"}}>
                Show more events
            </Link>
        </div>
    );
};

export default EventsCard;
