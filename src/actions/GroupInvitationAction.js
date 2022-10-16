import * as GroupInvitationApi from "../api/GroupInvitationRequest";

export const inviteSomeoneToGroup = (groupId, userId) => async (dispatch) => {
    dispatch({type: "GROUP_INVITATION_CREATE_START"});
    try {
        const {data} = await GroupInvitationApi.inviteSomeoneToGroup(groupId, userId);
        dispatch({type: "GROUP_INVITATION_CREATE_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_INVITATION_CREATE_FAIL"});
    }
};

export const acceptInvitation = (groupInvitationId) => async (dispatch) => {
    dispatch({type: "GROUP_INVITATION_ACCEPT_START"});
    try {
        const {data} = await GroupInvitationApi.acceptInvitation(groupInvitationId);
        dispatch({type: "GROUP_INVITATION_ACCEPT_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_INVITATION_ACCEPT_FAIL"});
    }
};

export const rejectInvitation = (groupInvitationId) => async (dispatch) => {
    dispatch({type: "GROUP_INVITATION_REJECT_START"});
    try {
        const {data} = await GroupInvitationApi.rejectInvitation(groupInvitationId);
        dispatch({type: "GROUP_INVITATION_REJECT_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "GROUP_INVITATION_REJECT_FAIL"});
    }
};