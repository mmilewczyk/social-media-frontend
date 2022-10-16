import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080/api/v1"})

export const signIn = (formData) => API.post("/auth/signIn", formData)
export const signUp = (formData) => API.post("/auth/signUp", formData)