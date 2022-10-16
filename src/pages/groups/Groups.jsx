import LeftSide from "../../components/leftSide/LeftSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import React, {useEffect, useState} from "react";
import "./Groups.css"
import {useDispatch, useSelector} from "react-redux";
import {getAllGroups} from "../../actions/GroupAction";
import {Link} from "react-router-dom";
import {getUserById} from "../../actions/UserAction";
import CreateGroupModal from "../../modals/CreateGroupModal/CreateGroupModal";

const Groups = () => {

    const dispatch = useDispatch()
    const {groups} = useSelector((state) => state.groupReducer)
    const {authData} = useSelector((state) => state.authReducer)
    const [modalOpened, setModalOpened] = useState(false);

    useEffect(() => {
        dispatch(getAllGroups())
        dispatch(getUserById(authData.id))
    }, [authData.id, dispatch]);

    return (
        <div className={"Groups"}>
            <LeftSide/>
            <div className={"GroupList"}>
                <button className={"button fc-button"} onClick={() => setModalOpened(true)}>Create group</button>
                <CreateGroupModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
                {groups && groups.content.map((group) => {
                    return (
                        <Link to={`/group/${group.groupId}`} style={{color: "#2f3e46", textDecoration: "none"}}>
                            <div className={"GroupList-item"}>
                                <span>{group.groupName}</span>
                                <span>{group.membersAmount} members | {group.postsAmount} posts</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <ProfileSide/>
        </div>
    )
}

export default Groups