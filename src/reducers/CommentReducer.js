const commentReducer = (
    state = {comments: null, comment: null, loading: false, error: false, uploading: false},
    action
) => {
    switch (action.type) {
        case "COMMENT_UPLOAD_START":
            return {...state, error: false, uploading: true};
        case "COMMENT_UPLOAD_SUCCESS":
            return {...state, comment: [action.data, ...state.comment], uploading: false, error: false};
        case "COMMENT_UPLOAD_FAIL":
            return {...state, uploading: false, error: true};
        case "COMMENT_UPDATING_START":
            return {...state, error: false, uploading: true};
        case "COMMENT_UPDATING_SUCCESS":
            return {...state, comment: action.data, uploading: false, error: false};
        case "COMMENT_UPDATING_FAIL":
            return {...state, uploading: false, error: true};
        case "COMMENTS_RETREIVING_START":
            return {...state, error: false, uploading: true};
        case "COMMENTS_RETREIVING_SUCCESS":
            return {...state, comments: action.data, uploading: false, error: false};
        case "COMMENTS_RETREIVING_FAIL":
            return {...state, uploading: false, error: true};
        case "COMMENT_REMOVING_START":
            return {...state, error: false, uploading: false};
        case "COMMENT_REMOVING_SUCCESS":
            return {...state, uploading: false, error: false};
        case "COMMENT_REMOVING_FAIL":
            return {...state, uploading: false, error: true};
        default:
            return state;
    }
};

export default commentReducer;