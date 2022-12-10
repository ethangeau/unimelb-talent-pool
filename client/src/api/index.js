import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const getProfiles = () => API.get("/");
export const getProfilesBySearch = (searchQuery) =>
  API.get(`/search?searchQuery=${searchQuery.search || "none"}`);
export const createProfile = (newProfile) => API.post("/", newProfile);
export const updateProfile = (id, updatedProfile) =>
  API.patch(`/${id}`, updatedProfile);
export const deleteProfile = (id) => API.delete(`/${id}`);
export const updateRecommendations = (id) =>
  API.patch(`/${id}/recommendations`);

export const signIn = (formData) => API.post("/signin", formData);
export const signUp = (formData) => API.post("/signup", formData);
