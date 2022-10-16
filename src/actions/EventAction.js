import * as EventApi from "../api/EventsRequest";

export const getAllEvents = () => async (dispatch) => {
    dispatch({type: "EVENTS_RETREIVING_START"});
    try {
        const {data} = await EventApi.getAllEvents();
        dispatch({type: "EVENTS_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENTS_RETREIVING_FAIL"});
    }
};

export const createNewEvent = (eventRequest) => async (dispatch) => {
    dispatch({type: "EVENT_CREATE_START"});
    try {
        const {data} = await EventApi.createNewEvent(eventRequest);
        dispatch({type: "EVENT_CREATE_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENT_CREATE_FAIL"});
    }
};

export const getEventById = (eventId) => async (dispatch) => {
    dispatch({type: "EVENT_RETREIVING_START"});
    try {
        const {data} = await EventApi.getEventById(eventId);
        dispatch({type: "EVENT_RETREIVING_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENT_RETREIVING_FAIL"});
    }
};

export const editEvent = (eventId, eventRequest) => async (dispatch) => {
    dispatch({type: "EVENT_EDIT_START"});
    try {
        const editedEvent = await EventApi.editEvent(eventId, eventRequest);
        dispatch({type: "EVENT_EDIT_SUCCESS", data: editedEvent.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENT_EDIT_FAIL"});
    }
};

export const addPostToEvent = (eventId, postRequest) => async (dispatch) => {
    dispatch({type: "EVENT_ADD_POST_START"});
    try {
        const event = await EventApi.addPostToEvent(eventId, postRequest);
        dispatch({type: "EVENT_ADD_POST_SUCCESS", data: event.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENT_ADD_POST_FAIL"});
    }
};

export const joinToEvent = (eventId) => async (dispatch) => {
    dispatch({type: "EVENT_JOIN_START"});
    try {
        const {data} = await EventApi.joinToEvent(eventId);
        dispatch({type: "EVENT_JOIN_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENT_JOIN_FAIL"});
    }
};

export const leaveEvent = (eventId) => async (dispatch) => {
    dispatch({type: "EVENT_LEAVE_START"});
    try {
        const {data} = await EventApi.leaveEvent(eventId);
        dispatch({type: "EVENT_LEAVE_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENT_LEAVE_FAIL"});
    }
};

export const removeSomeoneFromEvent = (eventId, userToRemoveId) => async (dispatch) => {
    dispatch({type: "EVENT_REMOVE_USER_START"});
    try {
        const event = await EventApi.removeSomeoneFromEvent(eventId, userToRemoveId);
        dispatch({type: "EVENT_REMOVE_USER_SUCCESS", data: event.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENT_REMOVE_USER_FAIL"});
    }
};

export const removeSomeoneAsAModeratorOfEvent = (eventId, userId) => async (dispatch) => {
    dispatch({type: "EVENT_REMOVE_MODERATOR_START"});
    try {
        const event = await EventApi.removeSomeoneAsAModerator(eventId, userId);
        dispatch({type: "EVENT_REMOVE_MODERATOR_SUCCESS", data: event.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENT_REMOVE_MODERATOR_FAIL"});
    }
};

export const makeSomeoneAModeratorOfEvent = (eventId, userId) => async (dispatch) => {
    dispatch({type: "EVENT_MAKE_MODERATOR_START"});
    try {
        const event = await EventApi.makeSomeoneAModerator(eventId, userId);
        dispatch({type: "EVENT_MAKE_MODERATOR_SUCCESS", data: event.data});
    } catch (error) {
        console.log(error);
        dispatch({type: "EVENT_MAKE_MODERATOR_FAIL"});
    }
};