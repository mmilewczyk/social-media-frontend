import React, {useEffect, useState} from 'react';
import "./InfoCard.css"
import {UilPen} from "@iconscout/react-unicons";
import ProfileModal from "../../modals/ProfileModal/ProfileModal";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getLoggedInUser, getUserById} from "../../actions/UserAction";

const InfoCard = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.userReducer)
    const {authData} = useSelector((state) => state.authReducer)
    const [modalOpened, setModalOpened] = useState(false);
    const params = useParams()

    useEffect(() => {
        if (params.id !== null && params.id !== undefined) {
            dispatch(getUserById(params.id))
        } else {
            dispatch(getLoggedInUser())
        }
    }, [dispatch, params.id]);

    return (
        <div className={"InfoCard"}>
            <div className={"InfoHead"}>
                <h4>Profile Information</h4>
                { params.id == authData.id ? (
                    <div>
                        <UilPen width={'2rem'} height={'1.2rem'} onClick={() => setModalOpened(true)}/>
                        <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data = {user}/>
                    </div>
                    ) : ("")
                }
            </div>

            <div className={"Info"}>
                <span>Age: </span>
                <span>{user.age}</span>
            </div>
            <div className={"Info"}>
                <span>Current City: </span>
                <span>{user.currentCity}</span>
            </div>
            <div className={"Info"}>
                <span>Home Town: </span>
                <span>{user.homeTown}</span>
            </div>
            <div className={"Info"}>
                <span>Languages I Speak: </span>
                {user.speaks ? user.speaks.map((language) => {
                    return <span>{language.languageName.toLowerCase()} ({language.level}) </span>
                }) : ""}
            </div>
            <div className={"Info"}>
                <span>Languages I'm Learning: </span>
                {user.learn ? user.learn.map((language) => {
                    return <span>{language.languageName.toLowerCase()} ({language.level})</span>
                }) : ""}
            </div>
            <div className={"Info"}>
                <span>Looking for: </span>
                {user.lookingFor ? user.lookingFor.map((lfoor) => {
                    return <span>{lfoor.toLowerCase()}</span>
                }) : ""}
            </div>
            <div className={"Info"}>
                <span>Education: </span>
                <span>{user.education && user.education.educationLevel !== 'NOT_SPECIFIED' ? user.education.educationLevel.toLowerCase() : ""}</span>
            </div>
            <div className={"Info"}>
                <span>Rank: </span>
                <span>{user.rank ? user.rank.toLowerCase() : ""}</span>
            </div>
            <div className={"Info"}>
                <span>Relationship Status: </span>
                <span>{user.relationshipStatus && user.relationshipStatus !== 'NOT_SPECIFIED' ? user.relationshipStatus : ""}</span>
            </div>
        </div>
    );
};

export default InfoCard;
