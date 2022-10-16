import * as FollowshipApi from "../api/FollowshipRequest";

export const followOtherUserById = (id) => async (dispatch) => {
    dispatch({type: "FOLLOW_START"});
    try {
        const {data} = await FollowshipApi.followOtherUserById(id);
        dispatch({type: "FOLLOW_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "FOLLOW_FAIL"});
    }
};

export const unfollowOtherUserById = (id) => async (dispatch) => {
    dispatch({type: "UNFOLLOW_START"});
    try {
        const {data} = await FollowshipApi.unfollowOtherUserById(id);
        dispatch({type: "UNFOLLOW_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "UNFOLLOW_FAIL"});
    }
};

export const getFollowersOfUserByUserId = (id) => async (dispatch) => {
    dispatch({type: "FOLLOWERS_RETREIVING_START"});
    try {
        const {data} = await FollowshipApi.getFollowersOfUserByUserId(id);
        dispatch({type: "FOLLOWERS_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "FOLLOWERS_RETREIVING_FAIL"});
    }
};

export const getFollowedUsersOfUserByUserId = (id) => async (dispatch) => {
    dispatch({type: "FOLLOWED_RETREIVING_START"});
    try {
        const {data} = await FollowshipApi.getFollowedUsersOfUserByUserId(id);
        dispatch({type: "FOLLOWED_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "FOLLOWED_RETREIVING_FAIL"});
    }
};