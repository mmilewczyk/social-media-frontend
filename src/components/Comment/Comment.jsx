import React, {useEffect, useState} from 'react';
import ProfileImage from "../../img/profile.png";
import {UilPen, UilX} from "@iconscout/react-unicons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCommentById} from "../../actions/CommentAction";
import CommentEditionModal from "../../modals/CommentEditionModal/CommentEditionModal";

const Comment = ({data}) => {

    const [CommentEditionModalOpened, setCommentEditionModalOpened] = useState(false);
    const user = useSelector((state) => state.authReducer.authData)
    const [isAuthor, setIsAuthor] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsAuthor(data.authorId === user.id);
    }, [data.authorId, user.id]);

    const handleEdit = (event) => {
        event.preventDefault();
        setCommentEditionModalOpened(true);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(deleteCommentById(data.commentId));
    }

    return (
        <div className={"Comment"}>
            <div className={"a-detail"}>
                <Link to={`/profile/${data.authorId}`}>
                    <img src={ProfileImage} alt={""} style={{cursor: "pointer"}}/>
                    <div className={"author"}>
                        <span style={{cursor: "pointer"}}><b>{data.authorUsername}</b></span>
                        <span>{data.createdAt} {data.wasEdited ? "(Edited)" : ""}</span>
                    </div>
                </Link>
                <div className={"p-options"}>
                    <div onClick={handleEdit}>
                        {isAuthor && <UilPen/>}
                        <CommentEditionModal modalOpened={CommentEditionModalOpened}
                                             setModalOpened={setCommentEditionModalOpened} data={data}/>
                    </div>
                    <div onClick={handleDelete}>
                        {isAuthor && <UilX/>}
                    </div>
                </div>
            </div>
            <div className={"detail"}>
                <span>{data.body}</span>
            </div>
        </div>
    );
};

export default Comment;
