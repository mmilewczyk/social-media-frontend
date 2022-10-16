const groupInvitationReducer = (state = {
    group: null, invitation: null, loading: false, error: false, uploading: false
}, action) => {
    switch (action.type) {
        case "GROUP_INVITATION_CREATE_START":
            return {...state, loading: true, error: false};
        case "GROUP_INVITATION_CREATE_SUCCESS":
            return {...state, invitation: action.data, loading: false, error: false};
        case "GROUP_INVITATION_CREATE_FAIL":
            return {...state, loading: false, error: true};
        case "GROUP_INVITATION_ACCEPT_START":
            return {...state, loading: true, error: false};
        case "GROUP_INVITATION_ACCEPT_SUCCESS":
            return {...state, groups: action.data, loading: false, error: false};
        case "GROUP_INVITATION_ACCEPT_FAIL":
            return {...state, loading: false, error: true};
        case "GROUP_INVITATION_REJECT_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_INVITATION_REJECT_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_INVITATION_REJECT_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        default:
            return state;
    }
};

export default groupInvitationReducer;