import * as CommentApi from "../api/CommentRequest";

export const addNewCommentToThePost = (postId, data) => async (dispatch) => {
    dispatch({type: "COMMENT_UPLOAD_START"});
    try {
        const newComment = await CommentApi.addNewCommentToThePost(postId, data);
        dispatch({type: "COMMENT_UPLOAD_SUCCESS", data: newComment.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "COMMENT_UPLOAD_FAIL"});
    }
};

export const editCommentById = (id, data) => async (dispatch) => {
    dispatch({type: "COMMENT_UPDATING_START"});
    try {
        const editedComment = await CommentApi.editCommentById(id, data);
        dispatch({type: "COMMENT_UPDATING_SUCCESS", data: editedComment.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "COMMENT_UPDATING_FAIL"});
    }
};

export const getAllCommentsOfThePost = (postId) => async (dispatch) => {
    dispatch({type: "COMMENTS_RETREIVING_START"});
    try {
        const {data} = await CommentApi.getAllCommentsOfThePost(postId);
        dispatch({type: "COMMENTS_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "COMMENTS_RETREIVING_FAIL"});
    }
};

export const deleteCommentById = (commentId) => async (dispatch) => {
    dispatch({type: "COMMENT_REMOVING_START"});
    try {
        await CommentApi.deleteCommentById(commentId);
        dispatch({type: "COMMENT_REMOVING_SUCCESS"});
    } catch (error) {
        console.log(error);
        dispatch({type: "COMMENT_REMOVING_FAIL"});
    }
};