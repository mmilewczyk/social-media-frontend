import React, {useState} from 'react';
import './LeftSide.css'
import GroupsCard from "../GroupsCard/GroupsCard";
import ShareModal from "../../modals/ShareModal/ShareModal";
import EventsCard from "../EventsCard/EventsCard";

const LeftSide = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className={"LeftSide"}>
            <GroupsCard/>
            <button className={"button l-button"}
                    onClick={() => setModalOpened(true)}>
                Share Post
            </button>
            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
            <EventsCard/>
        </div>
    );
};

export default LeftSide;
