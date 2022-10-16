import React, {useEffect, useState} from 'react';
import Cover from '../../img/cover.png'
import Profile from '../../img/profile.png'
import './ProfileCard.css'
import {useDispatch, useSelector} from "react-redux";
import {getLoggedInUser} from "../../actions/UserAction";
import {Link, useParams} from "react-router-dom";
import FollowedModal from "../../modals/FollowedModal/FollowedModal";
import FollowersModal from "../../modals/FollowersModal/FollowersModal";
import {
    followOtherUserById,
    getFollowedUsersOfUserByUserId,
    unfollowOtherUserById
} from "../../actions/FollowshipAction";

const ProfileCard = ({location}) => {

    const dispatch = useDispatch()
    const params = useParams();
    const {user} = useSelector((state) => state.userReducer)
    const {posts} = useSelector((state) => state.postReducer)
    const {followed} = useSelector((state) => state.followshipReducer)
    const {authData} = useSelector((state) => state.authReducer)

    const [FollowedModalOpened, setFollowedModalOpened] = useState(false);
    const [FollowersModalOpened, setFollowersModalOpened] = useState(false);


    useEffect(() => {
        dispatch(getLoggedInUser())
        dispatch(getFollowedUsersOfUserByUserId(user.userId))
    }, [dispatch]);

    const handleOpenFollowedModal = () => {
        if (user === null) return;
        user.followed ? setFollowedModalOpened(true) : setFollowedModalOpened(false)
    }

    const handleOpenFollowersModal = () => {
        if (user === null) return;
        user.followers ? setFollowersModalOpened(true) : setFollowersModalOpened(false)
    }

    const handleFollowship = () => {
        if (isFollowed()) {
            dispatch(unfollowOtherUserById(user.userId))
        } else {
            dispatch(followOtherUserById(user.userId))
        }
    }

    const isFollowed = () => {
        const followedIds = followed && followed.content ? followed.content.map(u => u.userId) : []
        return followedIds.includes(user.userId)
    }

    return (
        <div className={"ProfileCard"}>
            <div className={"ProfileImages"}>
                <img src={Cover} alt={""}/>
                <img src={Profile} alt={""}/>
            </div>
            <div className={"ProfileName"}>
                {user &&
                    <>
                        <span>{user.firstName} ({user.username})</span>
                        <span>{user.currentCity}</span>
                        <span>{user.aboutMe}</span>
                        {location === 'profilePage' && params.id != authData.id &&
                            <button className={"button fc-button"}
                                    onClick={handleFollowship}>
                                {isFollowed ? "Unfollow" : "Follow"}</button>
                        }

                    </>
                }
            </div>
            <div className={"FollowStatus"}>
                <hr/>
                <div>
                    <div className={"Follow"} onClick={handleOpenFollowedModal}>
                        {user &&
                            <span>{user.followed ? `${user.followed}` : "0"} </span>
                        }
                        <span>Followings</span>
                    </div>
                    <FollowedModal modalOpened={FollowedModalOpened}
                                   setModalOpened={setFollowedModalOpened} data={user}/>
                    <div className={"vl"}/>
                    <div className={"Follow"} onClick={handleOpenFollowersModal}>
                        {user &&
                            <span>{user.followers ? `${user.followers}` : "0"} </span>
                        }
                        <span>Followers</span>
                    </div>
                    <FollowersModal modalOpened={FollowersModalOpened}
                                    setModalOpened={setFollowersModalOpened} data={user}/>

                    {location === 'profilePage' && (
                        <>
                            <div className={"vl"}></div>
                            <div className={"Follow"}>
                                <span>{posts ? posts.content.filter((content) => content.authorUsername === user.username).length : ""}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr/>
            </div>
            {location === 'profilePage' ? '' : <span>
                {user &&
                    <Link
                        style={{textDecoration: "none", color: "inherit"}}
                        to={`/profile/${user.userId}`}>
                        My profile
                    </Link>
                }
            </span>}
        </div>
    );
};

export default ProfileCard;
