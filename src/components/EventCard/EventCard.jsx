import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import "./EventCard.css"
import EditEventModal from "../../modals/EditEventModal/EditEventModal";
import EventBackground from "../../img/social-event.svg"
import PostShare from "../PostShare/PostShare";
import Post from "../Post/Post";
import {addPostToEvent, getEventById, joinToEvent, leaveEvent} from "../../actions/EventAction";
import EventAttendeesModal from "../../modals/EventAttendeesModal/EventAttendeesModal";

const EventCard = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const [AttendeesModalOpened, setAttendeesModalOpened] = useState(false);
    const [EditEventModalOpened, setEditEventModalOpened] = useState(false);
    const {event, loading} = useSelector((state) => state.eventReducer)
    const {authData} = useSelector((state) => state.authReducer)

    useEffect(() => {
        dispatch(getEventById(params.eventId))
    }, [dispatch, params.eventId]);

    const setOption = () => {
        return isMemberOfTheEvent() ? "Leave" : "Join"
    }

    const handleJoinOrLeaveEvent = () => {
        isMemberOfTheEvent()
            ? dispatch(leaveEvent(params.eventId))
            : dispatch(joinToEvent(params.eventId))
    }

    const isMemberOfTheEvent = () => {
        if (event === null) return false;
        const memberIds = event.attendees ? event.attendees.map(member => member.userId) : []
        return memberIds.includes(authData.id);
    }

    const isEventAdminOrModerator = () => {
        if (event === null) return false;
        const moderatorIds = event.moderators ? event.moderators.map(moderator => moderator.userId) : []
        const organizerId = event.organizer.userId;
        return moderatorIds.includes(authData.id) || organizerId === authData.id;
    }

    const handleOpenAttendees = () => {
        if (event === null) return;
        event.attendees.length > 0 ? setAttendeesModalOpened(true) : setAttendeesModalOpened(false)
    }

    const handlePostSubmit = (newPost) => {
        dispatch(addPostToEvent(event.eventId, newPost))
    }

    return (
        <div className={"EventCard"}>
            <div className={"EventBackground"}>
                <img src={EventBackground} alt={""}/>
            </div>
            <div className={"EventName"}>
                <span style={{fontSize: "55px"}}>{event ? `${event.name}` : "eventName"}</span>
                <span>{event ? `${event.description}` : "description"}</span>
                <span>{event ? `Start at ${event.startAt} | End at ${event.endAt}` : "date"}</span>
            </div>
            <div className={"EventStatus"}>
                <hr/>
                <div>
                    <div className={"e-stat"}>
                        <span>{event && event.posts ? `${event.posts.length}` : "0"}</span>
                        <span>Posts</span>
                    </div>
                    <div className={"vl"}/>
                    <div className={"e-stat"} onClick={handleOpenAttendees} style={{cursor: "pointer"}}>
                        <span>{event && event.attendees ? `${event.attendees.length}` : "0"}</span>
                        <span>Attendees</span>
                        <EventAttendeesModal modalOpened={AttendeesModalOpened}
                                           setModalOpened={setAttendeesModalOpened} data={event}/>
                    </div>
                    <div className={"vl"}>
                    </div>
                    <div className={"e-stat"}>
                        <span>{event ? `${event.location}` : "location"}</span>
                        <span>Location</span>
                    </div>
                </div>
                <hr/>
            </div>
            <div className={"e-options"}>
                {isEventAdminOrModerator() &&
                    <button className={"button cs-button"} onClick={() => setEditEventModalOpened(true)}>Edit</button>}
                <EditEventModal modalOpened={EditEventModalOpened}
                                setModalOpened={setEditEventModalOpened} data={event}/>
                <button className={"button cs-button"} onClick={handleJoinOrLeaveEvent}>{setOption()}</button>
                <button className={"button cs-button"}>Invite user</button>
            </div>
            <div className={"e-people"}>
                { event &&
                    <div className={"e-organizer"}>
                        <span>Organizer</span>
                        <Link to={`/profile/${event.organizer.userId}`} style={{
                            color: "var(--gray)",
                            textDecoration: "none",
                            fontSize: "20px"
                        }}>
                            <span>{event ? event.organizer.username : "username"}</span>
                        </Link>
                    </div>
                }

                <div className={"e-moderators"}>
                    {
                        event && event.moderators && event.moderators.map((moderator, id) => {
                            return <div className={"e-organizer"}>
                                <span>Moderator</span>
                                <Link to={`/profile/${moderator.userId}`} style={{
                                    color: "var(--gray)",
                                    textDecoration: "none",
                                    fontSize: "20px"
                                }}>
                                    <span>{moderator.username}</span>
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className={"e-PostShare"}>
                <PostShare externalHandleSubmit={handlePostSubmit}/>
            </div>
            <div className={"Posts e-posts"}>
                {loading ? "Fetching Posts..." : event && event.posts && event.posts.length > 0 ?
                    event.posts.map((post, id) => {
                        return <Post data={post} key={id}/>
                    }) : "No posts"}
            </div>
        < /div>
    )
};

export default EventCard;
