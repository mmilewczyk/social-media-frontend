import * as GroupApi from "../api/GroupRequest";

export const getGroupById = (id) => async (dispatch) => {
    dispatch({type: "GROUP_RETREIVING_START"});
    try {
        const {data} = await GroupApi.getGroupById(id);
        dispatch({type: "GROUP_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_RETREIVING_FAIL"});
    }
};

export const getAllGroups = () => async (dispatch) => {
    dispatch({type: "GROUPS_RETREIVING_START"});
    try {
        const {data} = await GroupApi.getAllGroups();
        dispatch({type: "GROUPS_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUPS_RETREIVING_FAIL"});
    }
};

export const joinToGroup = (groupId) => async (dispatch) => {
    dispatch({type: "GROUP_JOIN_START"});
    try {
        const {data} = await GroupApi.joinToGroup(groupId);
        dispatch({type: "GROUP_JOIN_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_JOIN_FAIL"});
    }
};

export const leaveGroup = (groupId) => async (dispatch) => {
    dispatch({type: "GROUP_LEAVE_START"});
    try {
        const {data} = await GroupApi.leaveGroup(groupId);
        dispatch({type: "GROUP_LEAVE_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_LEAVE_FAIL"});
    }
};

export const editGroup = (groupRequest, groupId) => async (dispatch) => {
    dispatch({type: "GROUP_EDIT_START"});
    try {
        const editedGroup = await GroupApi.editGroup(groupRequest, groupId);
        dispatch({type: "GROUP_EDIT_SUCCESS", data: editedGroup.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_EDIT_FAIL"});
    }
};

export const addPostToGroup = (groupId, postRequest) => async (dispatch) => {
    dispatch({type: "GROUP_ADD_POST_START"});
    try {
        const group = await GroupApi.addPostToGroup(groupId, postRequest);
        dispatch({type: "GROUP_ADD_POST_SUCCESS", data: group.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_ADD_POST_FAIL"});
    }
};

export const connectEventToGroup = (groupId, eventId) => async (dispatch) => {
    dispatch({type: "GROUP_CONNECT_EVENT_START"});
    try {
        const group = await GroupApi.connectEventToGroup(groupId, eventId);
        dispatch({type: "GROUP_CONNECT_EVENT_SUCCESS", data: group.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_CONNECT_EVENT_FAIL"});
    }
};

export const removeGroupMembersPost = (groupId, postId) => async (dispatch) => {
    dispatch({type: "GROUP_REMOVE_POST_START"});
    try {
        const group = await GroupApi.removeGroupMembersPost(groupId, postId);
        dispatch({type: "GROUP_REMOVE_POST_SUCCESS", data: group.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_REMOVE_POST_FAIL"});
    }
};

export const removeSomeoneFromGroup = (groupId, userToRemoveId) => async (dispatch) => {
    dispatch({type: "GROUP_REMOVE_USER_START"});
    try {
        const group = await GroupApi.removeSomeoneFromGroup(groupId, userToRemoveId);
        dispatch({type: "GROUP_REMOVE_USER_SUCCESS", data: group.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_REMOVE_USER_FAIL"});
    }
};

export const removeSomeoneAsAModeratorOfGroup = (groupId, userId) => async (dispatch) => {
    dispatch({type: "GROUP_REMOVE_MODERATOR_START"});
    try {
        const group = await GroupApi.removeSomeoneAsAModerator(groupId, userId);
        dispatch({type: "GROUP_REMOVE_MODERATOR_SUCCESS", data: group.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_REMOVE_MODERATOR_FAIL"});
    }
};

export const makeSomeoneAModeratorOfGroup = (groupId, userId) => async (dispatch) => {
    dispatch({type: "GROUP_MAKE_MODERATOR_START"});
    try {
        const group = await GroupApi.makeSomeoneAModerator(groupId, userId);
        dispatch({type: "GROUP_MAKE_MODERATOR_SUCCESS", data: group.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_MAKE_MODERATOR_FAIL"});
    }
};

export const deleteGroupById = (groupId) => async (dispatch) => {
    dispatch({type: "GROUP_DELETE_START"});
    try {
        await GroupApi.deleteGroupById(groupId);
        dispatch({type: "GROUP_DELETE_SUCCESS"});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_DELETE_FAIL"});
    }
};

export const createNewGroup = (groupRequest) => async (dispatch) => {
    dispatch({type: "GROUP_CREATE_START"});
    try {
        const group = await GroupApi.createNewGroup(groupRequest);
        dispatch({type: "GROUP_CREATE_SUCCESS", data: group.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_CREATE_FAIL"});
    }
};