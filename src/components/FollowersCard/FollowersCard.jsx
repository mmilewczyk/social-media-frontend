import React, {useEffect, useState} from 'react';
import "./FollowersCard.css"
import User from "../User/User";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getFollowedUsersOfUserByUserId} from "../../actions/FollowshipAction";

const FollowersCard = () => {

    const dispatch = useDispatch();
    let {followed} = useSelector((state) => state.followshipReducer)
    const {authData} = useSelector((state) => state.authReducer)
    const params = useParams();
    const [isSomeonePage, setIsSomeonePage] = useState(false);

    useEffect(() => {
        if (params.id !== null && params.id !== undefined) {
            setIsSomeonePage(true)
            dispatch(getFollowedUsersOfUserByUserId(params.id))
        } else {
            setIsSomeonePage(false)
            dispatch(getFollowedUsersOfUserByUserId(authData.id))
        }
    }, [authData.id, dispatch, params.id]);

    return (
        <div className={"FollowedPersonsCard"}>
            <h3>Followed users</h3>
            {followed && followed.content && followed.size > 0 ? followed.content.slice(0, 5).map((followedPerson, id) => {
                return (
                    <User user={followedPerson} key={id}/>
                )
            }) : isSomeonePage ? "User is not following anyone" : "You're not following anyone yet, discover!"}
        </div>
    );
};

export default FollowersCard;
