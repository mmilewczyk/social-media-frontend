import React from "react";
import './Home.css'
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/postSide/PostSide";
import LeftSide from "../../components/leftSide/LeftSide";

const Home = () => {
    return (
        <div className={"Home"}>
            <LeftSide/>
            <PostSide/>
            <ProfileSide/>
        </div>
    )
}

export default Home