const eventReducer = (
    state = {events: null, event: null, loading: false, error: false, uploading: false},
    action
) => {
    switch (action.type) {
        case "EVENTS_RETREIVING_START":
            return {...state, loading: true, error: false};
        case "EVENTS_RETREIVING_SUCCESS":
            return {...state, events: action.data, loading: false, error: false};
        case "EVENTS_RETREIVING_FAIL":
            return {...state, loading: false, error: true};
        case "EVENT_CREATE_START":
            return {...state, loading: true, error: false, uploading: true};
        case "EVENT_CREATE_SUCCESS":
            return {...state, event: action.data, loading: false, error: false, uploading: false};
        case "EVENT_CREATE_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "EVENT_RETREIVING_START":
            return {...state, loading: true, error: false};
        case "EVENT_RETREIVING_SUCCESS":
            return {...state, event: action.data, loading: false, error: false};
        case "EVENT_RETREIVING_FAIL":
            return {...state, loading: false, error: true};
        case "EVENT_EDIT_START":
            return {...state, loading: true, error: false, uploading: true};
        case "EVENT_EDIT_SUCCESS":
            return {...state, event: action.data, loading: false, error: false, uploading: false};
        case "EVENT_EDIT_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "EVENT_ADD_POST_START":
            return {...state, loading: true, error: false, uploading: true};
        case "EVENT_ADD_POST_SUCCESS":
            return {...state, event: action.data, loading: false, error: false, uploading: false};
        case "EVENT_ADD_POST_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "EVENT_JOIN_START":
            return {...state, loading: true, error: false, uploading: true};
        case "EVENT_JOIN_SUCCESS":
            return {...state, event: action.data, loading: false, error: false, uploading: false};
        case "EVENT_JOIN_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "EVENT_LEAVE_START":
            return {...state, loading: true, error: false, uploading: true};
        case "EVENT_LEAVE_SUCCESS":
            return {...state, event: action.data, loading: false, error: false, uploading: false};
        case "EVENT_LEAVE_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "EVENT_REMOVE_USER_START":
            return {...state, loading: true, error: false, uploading: true};
        case "EVENT_REMOVE_USER_SUCCESS":
            return {...state, event: action.data, loading: false, error: false, uploading: false};
        case "EVENT_REMOVE_USER_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "EVENT_REMOVE_MODERATOR_START":
            return {...state, loading: true, error: false, uploading: true};
        case "EVENT_REMOVE_MODERATOR_SUCCESS":
            return {...state, event: action.data, loading: false, error: false, uploading: false};
        case "EVENT_REMOVE_MODERATOR_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        case "EVENT_MAKE_MODERATOR_START":
            return {...state, loading: true, error: false, uploading: true};
        case "EVENT_MAKE_MODERATOR_SUCCESS":
            return {...state, event: action.data, loading: false, error: false, uploading: false};
        case "EVENT_MAKE_MODERATOR_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        default:
            return state;
    }
};

export default eventReducer;