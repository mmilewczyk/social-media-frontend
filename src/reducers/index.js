import {combineReducers} from "redux";
import authReducer from "./AuthReducer"
import postReducer from "./PostReducer";
import userReducer from "./UserReducer";
import followshipReducer from "./FollowshipReducer";
import commentReducer from "./CommentReducer";
import groupReducer from "./GroupReducer";
import eventReducer from "./EventReducer";
import groupInvitationReducer from "./GroupInvitationReducer";

export const reducers = combineReducers({
        authReducer,
        userReducer,
        postReducer,
        followshipReducer,
        commentReducer,
        groupReducer,
        eventReducer,
        groupInvitationReducer
    }
)