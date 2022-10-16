import * as UserApi from "../api/UserRequest";

export const getLoggedInUser = () => async (dispatch) => {
    dispatch({type: "USER-RETREIVING_START"});
    try {
        const {data} = await UserApi.getLoggedInUser();
        dispatch({type: "USER-RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "USER-RETREIVING_FAIL"});
    }
};

export const getUserById = (id) => async (dispatch) => {
    dispatch({type: "USER-RETREIVING_START"});
    try {
        const {data} = await UserApi.getUserById(id);
        dispatch({type: "USER-RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "USER-RETREIVING_FAIL"});
    }
};

export const editExistingUser = (userData) => async (dispatch) => {
    dispatch({type: "USER-UPDATING_START"});
    try {
        const {data} = await UserApi.editExistingUser(userData);
        dispatch({type: "USER-UPDATING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "USER-UPDATING_FAIL"});
    }
};