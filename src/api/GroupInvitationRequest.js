import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080/api/v1/groups/invitations"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
});

export const inviteSomeoneToGroup = (groupId, userId) => API.post(`/invite?groupId=${groupId}&userId=${userId}`);
export const acceptInvitation = (groupInvitationId) => API.put(`/accept?groupInvitationId=${groupInvitationId}`);
export const rejectInvitation = (groupInvitationId) => API.put(`/reject?groupInvitationId=${groupInvitationId}`);