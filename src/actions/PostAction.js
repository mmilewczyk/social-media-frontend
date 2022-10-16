import * as PostApi from "../api/PostRequest";

export const createNewPost = (data) => async (dispatch) => {
    dispatch({type: "POST_UPLOAD_START"});
    try {
        const newPost = await PostApi.createNewPost(data);
        dispatch({type: "POST_UPLOAD_SUCCESS", data: newPost.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "POST_UPLOAD_FAIL"});
    }
};

export const getAllLatestPosts = () => async (dispatch) => {
    dispatch({type: "POSTS_RETREIVING_START"});
    try {
        const {data} = await PostApi.getAllLatestPosts();
        dispatch({type: "POSTS_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "POSTS_RETREIVING_FAIL"});
    }
};

export const getPostById = (id) => async (dispatch) => {
    dispatch({type: "POST_RETREIVING_START"});
    try {
        const {data} = await PostApi.getPostById(id);
        dispatch({type: "POST_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "POST_RETREIVING_FAIL"});
    }
};

export const getSomeonePostsByUsername = (username) => async (dispatch) => {
    dispatch({type: "POST_RETREIVING_START"});
    try {
        const {data} = await PostApi.getSomeonePostsByUsername(username);
        dispatch({type: "POST_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "POST_RETREIVING_FAIL"});
    }
};

export const deletePostById = (postId) => async (dispatch) => {
    dispatch({type: "POST_REMOVING_START"});
    try {
        await PostApi.deletePostById(postId);
        dispatch({type: "POST_REMOVING_SUCCESS"});
    } catch (error) {
        console.log(error);
        dispatch({type: "POST_REMOVING_FAIL"});
    }
};

export const updatePostById = (id, data) => async (dispatch) => {
    dispatch({type: "POST_UPDATING_START"});
    try {
        const {updatedPost} = await PostApi.updatePostById(id, data);
        dispatch({type: "POST_UPDATING_SUCCESS", data: updatedPost});
    } catch (error) {
        console.log(error);
        dispatch({type: "POST_UPDATING_FAIL"});
    }
};