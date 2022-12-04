import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const fetchProfiles = () => axios.get(url);
export const createProfile = (newProfile) => axios.post(url, newProfile);
export const updateProfile = (id, updatedProfile) =>
  axios.patch(`${url}/${id}`, updatedProfile);
export const deleteProfile = (id) => axios.delete(`${url}/${id}`);
export const updateRecommendations = (id) =>
  axios.patch(`${url}/${id}/recommendations`);
