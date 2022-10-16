import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080/api/v1/groups"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
});

export const getGroupById = (groupId) => API.get(`/${groupId}`);
export const getAllGroups = () => API.get('');
export const joinToGroup = (groupId) => API.put(`/join/${groupId}`);
export const leaveGroup = (groupId) => API.put(`/leave/${groupId}`);
export const editGroup = (groupRequest, groupId) => API.put(`/edit/${groupId}`, groupRequest);
export const addPostToGroup = (groupId, postRequest) => API.put(`/${groupId}/create/post`, postRequest);
export const connectEventToGroup = (groupId, eventId) => API.put(`/${groupId}/connect/event/${eventId}`);
export const removeGroupMembersPost = (groupId, postId) => API.put(`/edit/posts/remove?groupId=${groupId}&postId=${postId}`);
export const removeSomeoneFromGroup = (groupId, userToRemoveId) => API.put(`/remove-user?groupId=${groupId}&userToRemoveId=${userToRemoveId}`);
export const removeSomeoneAsAModerator = (groupId, userId) => API.put(`/edit/remove/moderator?groupId=${groupId}&userId=${userId}`);
export const makeSomeoneAModerator = (groupId, userId) => API.put(`/edit/add/moderator?groupId=${groupId}&userId=${userId}`);
export const deleteGroupById = (groupId) => API.delete(`/${groupId}`);
export const createNewGroup = (groupRequest) => API.post(``, groupRequest);