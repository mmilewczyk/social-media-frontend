import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080/api/v1"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
});

export const getAllUsers = () => API.get("/users");
export const getLoggedInUser = () => API.get("/users/profile");
export const getUserByUsername = (username) => API.get(`/users/profile${username}`);
export const getUserById = (id) => API.get(`/users/search/id/${id}`);
export const editExistingUser = (data) => API.put(`/users/profile/edit`, data);
export const getUsersByFilter = (gender, currentCity) => API.get(`/users/search?gender=${gender}&currentCity=${currentCity}`);