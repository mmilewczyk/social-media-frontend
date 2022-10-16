import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080/api/v1/comments"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
});

export const addNewCommentToThePost = (postId, data) => API.post(`/${postId}`, data);
export const editCommentById = (id, data) => API.put(`/${id}`, data);
export const deleteCommentById = (commentId) => API.delete(`/${commentId}`);
export const getAllCommentsOfThePost = (postId) => API.get(`?postId=${postId}`);
