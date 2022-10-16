import React, {useEffect, useLayoutEffect, useState} from 'react';
import Profile from "../../img/profile.png";
import {Link, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {makeSomeoneAModeratorOfGroup, removeSomeoneAsAModeratorOfGroup, removeSomeoneFromGroup} from "../../actions/GroupAction";
import {makeSomeoneAModeratorOfEvent, removeSomeoneAsAModeratorOfEvent, removeSomeoneFromEvent} from "../../actions/EventAction";
import {
    followOtherUserById,
    getFollowedUsersOfUserByUserId,
    unfollowOtherUserById
} from "../../actions/FollowshipAction";

const User = ({user}) => {

    const location = useLocation();
    const params = useParams();
    const dispatch = useDispatch()
    const [groupSite, setGroupSite] = useState(false);
    const [eventSite, setEventSite] = useState(false);
    const [isModerator, setIsModerator] = useState(false);
    const {group} = useSelector((state) => state.groupReducer)
    const {event} = useSelector((state) => state.eventReducer)
    const {followed} = useSelector((state) => state.followshipReducer)
    const {authData} = useSelector((state) => state.authReducer)

    useEffect(() => {
        if (location.pathname.includes('group/') && isGroupAdminOrModerator(authData.id)) {
            setGroupSite(true);
        } else if (location.pathname.includes('event/') && isEventAdminOrModerator(authData.id)) {
            setEventSite(true);
        }
    }, [location, groupSite, authData]);

    useLayoutEffect(() => {
        if (groupSite && group !== null) {
            const groupModeratorIds = group.moderators ? group.moderators.map(moderator => moderator.userId) : []
            const authorId = group.author.userId;
            setIsModerator(groupModeratorIds.includes(user.userId) || authorId === user.userId);
        } else if (eventSite && event !== null) {
            const eventModeratorIds = event.moderators ? event.moderators.map(moderator => moderator.userId) : []
            const organizerId = event.organizer.userId;
            setIsModerator(eventModeratorIds.includes(authData.id) || organizerId === authData.id)
        }
    }, [authData.id, event, eventSite, group, groupSite, user.userId])

    const isGroupAdminOrModerator = (userId) => {
        if (group === null) return false;
        const moderatorIds = group.moderators ? group.moderators.map(moderator => moderator.userId) : []
        const authorId = group.author.userId;
        return moderatorIds.includes(userId) || authorId === userId;
    }

    const isEventAdminOrModerator = () => {
        if (event === null) return false;
        const moderatorIds = event.moderators ? event.moderators.map(moderator => moderator.userId) : []
        const organizerId = event.organizer.userId;
        return moderatorIds.includes(authData.id) || organizerId === authData.id;
    }

    const isGroupAdmin = () => {
        if (group === null) return false;
        const authorId = group.author.userId;
        return authorId === authData.id;
    }

    const isEventAdmin = () => {
        if (event === null) return false;
        const organizerId = event.organizer.userId;
        return organizerId === authData.id;
    }

    const handleRemoveFromGroup = () => {
        dispatch(removeSomeoneFromGroup(params.groupId, user.userId))
    }

    const handleRemoveFromEvent = () => {
        dispatch(removeSomeoneFromEvent(params.eventId, user.userId))
    }

    const handleFollowship = () => {
        if (isFollowed()) {
            dispatch(unfollowOtherUserById(user.userId))
        } else {
            dispatch(followOtherUserById(user.userId))
        }
    }

    const handleModeratorOfGroup = () => {
        if (isModerator) {
            dispatch(removeSomeoneAsAModeratorOfGroup(params.groupId, user.userId))
        } else {
            dispatch(makeSomeoneAModeratorOfGroup(params.groupId, user.userId))
        }
    }

    const handleModeratorOfEvent = () => {
        if (isModerator) {
            dispatch(removeSomeoneAsAModeratorOfEvent(params.eventId, user.userId))
        } else {
            dispatch(makeSomeoneAModeratorOfEvent(params.eventId, user.userId))
        }
    }

    const isFollowed = () => {
        dispatch(getFollowedUsersOfUserByUserId(authData.id))
        const followedIds = followed && followed.content ? followed.content.map(u => u.userId) : []
        return followedIds.includes(user.userId)
    }

    return (
        <div className={"follower"}>
            <Link to={`/profile/${user.userId}`} style={{textDecoration: "none", color: "var(--black"}}>
                <div>
                    <img src={Profile} alt={""} className={"followerImage"}/>
                    <div className={"name"}>
                        <span>{user.firstName}</span>
                        <span>@{user.username}</span>
                    </div>
                </div>
            </Link>
            <div className={"u-buttons"}>
                {!groupSite && !eventSite && user.userId != authData.id &&
                    <button className={"button fc-button"} onClick={handleFollowship}>{isFollowed ? "Unfollow" : "Follow"}</button>
                }
                {groupSite &&
                    <button className={"button fc-button"} onClick={handleRemoveFromGroup}>Remove</button>
                }
                {groupSite && isGroupAdmin() &&
                    <button className={"button fc-button"}
                            onClick={handleModeratorOfGroup}>{isModerator ? "Remove a moderator" : "Make a moderator"}</button>
                }

                {eventSite &&
                    <button className={"button fc-button"} onClick={handleRemoveFromEvent}>Remove</button>
                }
                {eventSite && isEventAdmin() &&
                    <button className={"button fc-button"}
                            onClick={handleModeratorOfEvent}>{isModerator ? "Remove a moderator" : "Make a moderator"}</button>
                }
            </div>
        </div>
    );
};

export default User;
