const userReducer = (state = {
    user: null, loading: false, error: false, uploading: false
}, action) => {
    switch (action.type) {
        case "USER-RETREIVING_START":
            return {...state, loading: true, error: false};
        case "USER-RETREIVING_SUCCESS":
            return {...state, user: action.data, loading: false, error: false};
        case "USER-RETREIVING_FAIL":
            return {...state, loading: false, error: true};
        case "USER-UPDATING_START":
            return {...state, loading: true, error: false, uploading: true};
        case "USER-UPDATING_SUCCESS":
            return {...state, user: action.data, loading: false, error: false, uploading: false};
        case "USER-UPDATING_FAIL":
            return {...state, loading: false, error: true, uploading: false};
        default:
            return state;
    }
};

export default userReducer;