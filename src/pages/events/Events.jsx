import LeftSide from "../../components/leftSide/LeftSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import React, {useEffect, useState} from "react";
import "./Events.css"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getUserById} from "../../actions/UserAction";
import CreateEventModal from "../../modals/CreateEventModal/CreateEventModal";
import {getAllEvents} from "../../actions/EventAction";

const Events = () => {

    const dispatch = useDispatch()
    const {events} = useSelector((state) => state.eventReducer)
    const {authData} = useSelector((state) => state.authReducer)
    const [modalOpened, setModalOpened] = useState(false);

    useEffect(() => {
        dispatch(getAllEvents())
        dispatch(getUserById(authData.id))
    }, [authData.id, dispatch]);

    return (
        <div className={"Events"}>
            <LeftSide/>
            <div className={"EventList"}>
                <button className={"button fc-button"} onClick={() => setModalOpened(true)}>Create event</button>
                <CreateEventModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
                {events && events.content.map((event) => {
                    return (
                        <Link to={`/event/${event.eventId}`} style={{color: "#2f3e46", textDecoration: "none"}}>
                            <div className={"EventList-item"}>
                                <span>{event.name}</span>
                                <span>started At {event.startAt} | {event.location}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <ProfileSide/>
        </div>
    )
}

export default Events