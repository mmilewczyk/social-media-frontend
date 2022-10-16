import React, {useRef} from 'react';
import ProfileImage from "../../img/profile.png"
import "./PostShare.css"
import {useDispatch, useSelector} from "react-redux";
import {createNewPost} from "../../actions/PostAction";

const PostShare = ({externalHandleSubmit}) => {
    const loading = useSelector((state) => state.postReducer.uploading)
    const dispatch = useDispatch()
    const title = useRef();
    const body = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            title: title.current.value,
            body: body.current.value
        }
        if (externalHandleSubmit !== null) {
            externalHandleSubmit(newPost)
        } else {
            dispatch(createNewPost(newPost))
        }
        resetShare()
    }

    const resetShare = () => {
        title.current.value = "";
        body.current.value = "";
    };

    return (
        <div className={"PostShare"}>
            <img src={ProfileImage} alt={""}/>
            <div>
                <input type={"text"} placeholder={"Heading"} ref={title} required/>
                <input type={"text"} placeholder={"What's happening?"} ref={body} required/>
                    <button className={"button ps-button"} onClick={handleSubmit} disabled={loading}>
                        {loading ? "Uploading..." : "Share"}
                    </button>
            </div>
        </div>
    );
};

export default PostShare;
