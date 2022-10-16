import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080/api/v1/events"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
});

export const getAllEvents = () => API.get('/all');
export const createNewEvent = (eventRequest) => API.post('', eventRequest);
export const getEventById = (eventId) => API.get(`?eventId=${eventId}`);
export const editEvent = (eventId, eventRequest) => API.put(`/edit/${eventId}`, eventRequest);
export const joinToEvent = (eventId) => API.put(`/join/${eventId}`);
export const leaveEvent = (eventId) => API.put(`/leave/${eventId}`);
export const addPostToEvent = (eventId, postRequest) => API.put(`/${eventId}/create/post`, postRequest);
export const removeSomeoneFromEvent = (eventId, userToRemoveId) => API.put(`/remove-user?eventId=${eventId}&userToRemoveId=${userToRemoveId}`);
export const removeSomeoneAsAModerator = (eventId, userId) => API.put(`/edit/remove/moderator?eventId=${eventId}&userId=${userId}`);
export const makeSomeoneAModerator = (eventId, userId) => API.put(`/edit/add/moderator?eventId=${eventId}&userId=${userId}`);
