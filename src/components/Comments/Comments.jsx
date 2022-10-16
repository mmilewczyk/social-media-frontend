import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCommentsOfThePost} from "../../actions/CommentAction";
import Comment from "../Comment/Comment";
import "../Comment/Comment.css"

const Comments = ({postId}) => {

    const dispatch = useDispatch()
    let {comments, loading} = useSelector((state) => state.commentReducer)

    useEffect(() => {
        console.log("Retrieving comments of the post " + postId)
        dispatch(getAllCommentsOfThePost(postId))
    }, [postId, dispatch]);

    return (
        <div>
            <div className={"Comments"}>
                {loading ? "Fetching comments..." : comments && comments.totalElements > 0 ?
                    comments.content.map((comment, id) => {
                        return <Comment data={comment} key={id}/>
                    }) : "No comments"}
            </div>
        </div>
    );
};

export default Comments;
