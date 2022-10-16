const postReducer = (
    state = {posts: null, post: null, loading: false, error: false, uploading: false},
    action
) => {
    switch (action.type) {
        case "POST_UPLOAD_START":
            return {...state, error: false, uploading: true};
        case "POST_UPLOAD_SUCCESS":
            return {...state, post: [action.data, ...state.post], uploading: false, error: false};
        case "POST_UPLOAD_FAIL":
            return {...state, uploading: false, error: true};
        case "POSTS_RETREIVING_START":
            return {...state, loading: true, error: false};
        case "POSTS_RETREIVING_SUCCESS":
            return {...state, posts: action.data, loading: false, error: false};
        case "POSTS_RETREIVING_FAIL":
            return {...state, loading: false, error: true};
        case "POST_RETREIVING_START":
            return {...state, loading: true, error: false};
        case "POST_RETREIVING_SUCCESS":
            return {...state, post: action.data, loading: false, error: false};
        case "POST_RETREIVING_FAIL":
            return {...state, loading: false, error: true};
        case "POST_REMOVING_START":
            return {...state, loading: true, error: false};
        case "POST_REMOVING_SUCCESS":
            return {...state, loading: false, error: false};
        case "POST_REMOVING_FAIL":
            return {...state, loading: false, error: true};
        case "POST_UPDATING_START":
            return {...state, error: false, uploading: true};
        case "POST_UPDATING_SUCCESS":
            return {...state, post: [action.data, ...state.post], uploading: false, error: false};
        case "POST_UPDATING_FAIL":
            return {...state, uploading: false, error: true};
        default:
            return state;
    }
};

export default postReducer;