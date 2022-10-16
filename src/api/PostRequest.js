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

export const createNewPost = (data) => API.post("/posts", data);
export const getAllLatestPosts = () => API.get("/posts/all");
export const getAllLatestPostsOfFollowedPeople = () => API.get("/posts/search/followed");
export const getPostById = (id) => API.get(`/posts/search/id?id=${id}`);
export const getSomeonePostsByUsername = (username) => API.get(`/posts/${username}`);
export const deletePostById = (postId) => API.delete(`/posts/${postId}`);
export const updatePostById = (id, data) => API.put(`/posts/${id}`, data);
