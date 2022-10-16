const groupReducer = (state = {
    group: null, groups: null, loading: false, error: false, uploading: false
}, action) => {
    switch (action.type) {
        case "GROUP_RETREIVING_START":
            return {...state, loading: true, error: false};
        case "GROUP_RETREIVING_SUCCESS":
            return {...state, group: action.data, loading: false, error: false};
        case "GROUP_RETREIVING_FAIL":
            return {...state, loading: false, error: true};
        case "GROUPS_RETREIVING_START":
            return {...state, loading: true, error: false};
        case "GROUPS_RETREIVING_SUCCESS":
            return {...state, groups: action.data, loading: false, error: false};
        case "GROUPS_RETREIVING_FAIL":
            return {...state, loading: false, error: true};
        case "GROUP_JOIN_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_JOIN_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_JOIN_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_LEAVE_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_LEAVE_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_LEAVE_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_EDIT_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_EDIT_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_EDIT_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_ADD_POST_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_ADD_POST_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_ADD_POST_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_CONNECT_EVENT_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_CONNECT_EVENT_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_CONNECT_EVENT_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_REMOVE_POST_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_REMOVE_POST_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_REMOVE_POST_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_REMOVE_USER_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_REMOVE_USER_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_REMOVE_USER_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_REMOVE_MODERATOR_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_REMOVE_MODERATOR_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_REMOVE_MODERATOR_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_MAKE_MODERATOR_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_MAKE_MODERATOR_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_MAKE_MODERATOR_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_DELETE_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_DELETE_SUCCESS":
            return {...state, loading: false, error: false, uploading: false};
        case "GROUP_DELETE_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "GROUP_CREATE_START":
            return {...state, loading: true, error: false, uploading: true};
        case "GROUP_CREATE_SUCCESS":
            return {...state, group: action.data, loading: false, error: false, uploading: false};
        case "GROUP_CREATE_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        default:
            return state;
    }
};

export default groupReducer;