const followshipReducer = (state = {
    followed: null, followers: null, user: null, loading: false, error: false, uploading: false
}, action) => {
    switch (action.type) {
        case "FOLLOW_START":
            return {...state, loading: true, error: false};
        case "FOLLOW_SUCCESS":
            return {...state, user: action.data, loading: false, error: false};
        case "FOLLOW_FAIL":
            return {...state, loading: false, error: true};
        case "UNFOLLOW_START":
            return {...state, loading: true, error: false};
        case "UNFOLLOW_SUCCESS":
            return {...state, user: action.data, loading: false, error: false};
        case "UNFOLLOW_FAIL":
            return {...state, loading: false, error: true};
        case "FOLLOWERS_RETREIVING_START":
            return {...state, loading: true, error: false};
        case "FOLLOWERS_RETREIVING_SUCCESS":
            return {...state, followers: action.data, loading: false, error: false};
        case "FOLLOWERS_RETREIVING_FAIL":
            return {...state, loading: false, error: true};
        case "FOLLOWED_RETREIVING_START":
            return {...state, loading: true, error: false};
        case "FOLLOWED_RETREIVING_SUCCESS":
            return {...state, followed: action.data, loading: false, error: false};
        case "FOLLOWED_RETREIVING_FAIL":
            return {...state, loading: false, error: true};

        default:
            return state;
    }
};

export default followshipReducer;