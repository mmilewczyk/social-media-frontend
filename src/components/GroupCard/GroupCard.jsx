import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPostToGroup, getGroupById, joinToGroup, leaveGroup} from "../../actions/GroupAction";
import {Link, useParams} from "react-router-dom";
import Events from "../Events/Events";
import "./GroupCard.css"
import GroupMembersModal from "../../modals/GroupMembersModal/GroupMembersModal";
import EditGroupModal from "../../modals/EditGroupModal/EditGroupModal";
import GroupBackground from "../../img/group-selfie.svg"
import PostShare from "../PostShare/PostShare";
import Post from "../Post/Post";

const GroupCard = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const [MembersModalOpened, setMembersModalOpened] = useState(false);
    const [EditGroupModalOpened, setEditGroupModalOpened] = useState(false);
    const {group, loading} = useSelector((state) => state.groupReducer)
    const {authData} = useSelector((state) => state.authReducer)

    useEffect(() => {
        dispatch(getGroupById(params.groupId))
    }, [dispatch, params.groupId]);

    const setOption = () => {
        return isMemberOfTheGroup() ? "Leave" : "Join"
    }

    const handleJoinOrLeaveGroup = () => {
        isMemberOfTheGroup()
            ? dispatch(leaveGroup(params.groupId))
            : dispatch(joinToGroup(params.groupId))
    }

    const isMemberOfTheGroup = () => {
        if (group === null) return false;
        const memberIds = group.members.map(member => member.userId)
        return memberIds.includes(authData.id);
    }

    const isGroupAdminOrModerator = () => {
        if (group === null) return false;
        const moderatorIds = group.moderators.map(moderator => moderator.userId);
        const authorId = group.author.userId;
        return moderatorIds.includes(authData.id) || authorId === authData.id;
    }

    const handleOpenMembers = () => {
        if (group === null) return;
        group.members.length > 0 ? setMembersModalOpened(true) : setMembersModalOpened(false)
    }

    const handlePostSubmit = (newPost) => {
        dispatch(addPostToGroup(group.groupId, newPost))
    }

    return (
        <div className={"GroupCard"}>
            <div className={"GroupBackground"}>
                <img src={GroupBackground} alt={""}/>
            </div>
            <div className={"GroupName"}>
                <span style={{fontSize: "55px"}}>{group ? `${group.groupName}` : "groupName"}</span>
                <span>{group ? `${group.description}` : "description"}</span>
            </div>
            <div className={"GroupStatus"}>
                <hr/>
                <div>
                    <div className={"g-stat"}>
                        <span>{group ? `${group.posts.length}` : "0"}</span>
                        <span>Posts</span>
                    </div>
                    <div className={"vl"}/>
                    <div className={"g-stat"} onClick={handleOpenMembers} style={{cursor: "pointer"}}>
                        <span>{group ? `${group.members.length}` : "0"}</span>
                        <span>Members</span>
                        <GroupMembersModal modalOpened={MembersModalOpened}
                                           setModalOpened={setMembersModalOpened} data={group}/>
                    </div>
                    <div className={"vl"}>
                    </div>
                    <div className={"g-stat"}>
                        <span>{group ? `${group.events.length}` : "0"}</span>
                        <span>Events</span>
                    </div>
                </div>
                <hr/>
            </div>
            <div className={"g-options"}>
                {isGroupAdminOrModerator() &&
                    <button className={"button cs-button"} onClick={() => setEditGroupModalOpened(true)}>Edit</button>}
                <EditGroupModal modalOpened={EditGroupModalOpened}
                                setModalOpened={setEditGroupModalOpened} data={group}/>
                <button className={"button cs-button"} onClick={handleJoinOrLeaveGroup}>{setOption()}</button>
                <button className={"button cs-button"}>Invite user</button>
            </div>

            {group && group.events && group.events.length > 0 ?
                <Events data={group.events}/> : ""
            }

            <div className={"g-people"}>
                {group &&
                    <div className={"g-author"}>
                        <span>Author</span>
                        <Link to={`/profile/${group.author.userId}`} style={{
                            color: "var(--gray)",
                            textDecoration: "none",
                            fontSize: "20px"
                        }}>
                            <span>{group ? group.author.username : "username"}</span>
                        </Link>
                    </div>
                }

                <div className={"g-moderators"}>
                    {
                        group && group.moderators.map((moderator, id) => {
                            return <div className={"g-author"}>
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

            <div className={"g-PostShare"}>
                <PostShare externalHandleSubmit={handlePostSubmit}/>
            </div>
            <div className={"Posts g-posts"}>
                {loading ? "Fetching Posts..." : group && group.posts && group.posts.length > 0 ?
                    group.posts.map((post, id) => {
                        return <Post data={post} key={id}/>
                    }) : "No posts"}
            </div>
        < /div>
    )
};

export default GroupCard;
