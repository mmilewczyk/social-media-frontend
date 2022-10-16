import React, {useEffect, useRef, useState} from 'react';
import "./Post.css"
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import ProfileImage from "../../img/profile.png";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {UilPen, UilX} from "@iconscout/react-unicons";
import PostEditionModal from "../../modals/PostEditionModal/PostEditionModal";
import ConfirmationModal from "../../modals/ConfirmationModal/ConfirmationModal";
import {addNewCommentToThePost} from "../../actions/CommentAction";
import Comments from "../Comments/Comments";

const Post = ({data}) => {
    const [ShowComments, setShowComments] = useState(false);
    const [PostEditionModalOpened, setPostEditionModalOpened] = useState(false);
    const [ConfirmationModalOpened, setConfirmationModalOpened] = useState(false);
    const [NewCommentAddition, setNewCommentAddition] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer.authData)
    const [isAuthor, setIsAuthor] = useState(false);
    const commentBody = useRef();

    useEffect(() => {
        setIsAuthor(data.authorId === user.id);
    }, [data.authorId, user.id]);

    const handleEdit = (event) => {
        event.preventDefault();
        setPostEditionModalOpened(true);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        setConfirmationModalOpened(true);
    }

    const handleNewComment = (event) => {
        event.preventDefault();
        const commentRequest = {
            body: commentBody.current.value
        }
        dispatch(addNewCommentToThePost(data.postId, commentRequest))
        setNewCommentAddition(false)
    }

    return (
        <div className={"Post"}>
            <div className={"a-detail "}>
                <Link to={`/profile/${data.authorId}`}>
                    <img src={ProfileImage} alt={""} style={{cursor: "pointer"}}/>
                    <div className={"author"}>
                        <span style={{cursor: "pointer"}}><b>{data.authorUsername}</b></span>
                        <span>{data.createdAt}</span>
                    </div>
                </Link>
                <div className={"p-options"}>
                    <div onClick={handleEdit}>
                        {isAuthor && <UilPen/>}
                        <PostEditionModal modalOpened={PostEditionModalOpened}
                                          setModalOpened={setPostEditionModalOpened} data={data}/>
                    </div>
                    <div onClick={handleDelete}>
                        {isAuthor && <UilX/>}
                        <ConfirmationModal modalOpened={ConfirmationModalOpened}
                                           setModalOpened={setConfirmationModalOpened} data={data}/>
                    </div>
                </div>
            </div>
            <div className={"detail"}>
                <span><b>{data.title}</b></span>
            </div>
            <div className={"detail"}>
                <span> {data.body}</span>
            </div>
            <div className={"PostReaction"}>
                <img src={data.liked ? Like : NotLike} alt={""}/>
                <img src={Comment} alt={""} onClick={() => setNewCommentAddition(!NewCommentAddition)}
                     style={{cursor: "pointer"}}/>
                <img src={Share} alt={""}/>
            </div>
            <div className={"likes-comments"}>
                <span style={{color: "var(--gray)", fontSize: "12px"}}>{data.likes} likes </span>
                <span style={{color: "var(--gray)", fontSize: "12px"}}>&nbsp;&nbsp;&nbsp;</span>
                <span style={{color: "var(--gray)", fontSize: "12px"}}
                      onClick={() => setShowComments(!ShowComments)}>{data.comments} comments</span>
            </div>
            {ShowComments === true &&
                <div>
                    <Comments postId={data.postId}/>
                    <div style={{fontSize: "14px", cursor: "pointer", paddingTop: "0.5rem"}}
                         onClick={() => setShowComments(false)}>
                        Hide comments...
                    </div>
                </div>
            }
            {NewCommentAddition === true &&
                <div className={"CommentShare"}>
                    <img src={ProfileImage} alt={""}/>
                    <div>
                        <input type={"text"} placeholder={"Comment..."} required ref={commentBody}/>
                        <div className={"NewCommentButtons"}>
                            <button className={"button cs-button"} onClick={() => setNewCommentAddition(false)}>Cancel
                            </button>
                            <button className={"button cs-button"} onClick={handleNewComment}>Comment</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Post;
