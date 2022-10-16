import React, {useEffect} from 'react';
import './GroupsCard.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllGroups} from "../../actions/GroupAction";
import {Link} from "react-router-dom";

const GroupsCard = () => {

    const dispatch = useDispatch();
    const {groups} = useSelector((state) => state.groupReducer)

    useEffect(() => {
        dispatch(getAllGroups())
    }, [dispatch]);


    return (
        <div className={"GroupsCard"}>
            <h3>Groups</h3>
            {groups && groups.content.slice(0, 3).map((group) => {
                return (
                    <Link to={`/group/${group.groupId}`} style={{color: "#2f3e46", textDecoration: "none"}}>
                    <div className={"GroupC-item"}>
                        <span>{group.groupName}</span>
                        <span>{group.membersAmount} members | {group.postsAmount} posts</span>
                    </div>
                    </Link>
                )
            })}
            <Link to={`/groups`} style={{color: "#2f3e46", textDecoration: "none"}}>
                Show more groups
            </Link>
        </div>
    );
};

export default GroupsCard;
