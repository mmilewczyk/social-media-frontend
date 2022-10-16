import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080/api/v1/users/profile"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
});

export const followOtherUserById = (userId) => API.put(`/${userId}/follow`);
export const unfollowOtherUserById = (userId) => API.put(`/${userId}/unfollow`);
export const getFollowersOfUserByUserId = (userId) => API.get(`/${userId}/followers`);
export const getFollowedUsersOfUserByUserId = (userId) => API.get(`/${userId}/followed`);
