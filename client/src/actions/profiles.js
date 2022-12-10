import * as api from "../api";
import * as actions from "../constants/actionTypes";

export const getProfiles = () => async (dispatch) => {
  try {
    const { data } = await api.getProfiles();
    dispatch({ type: actions.GET_PROFILES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProfile = (profile) => async (dispatch) => {
  try {
    const { data } = await api.createProfile(profile);
    dispatch({ type: actions.CREATE_PROFILE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProfile = (id, profile) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, profile);
    dispatch({ type: actions.UPDATE_PROFILE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  try {
    await api.deleteProfile(id);
    dispatch({ type: actions.DELETE_PROFILE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRecommendations = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  try {
    const { data } = await api.updateRecommendations(id, user?.token);
    dispatch({ type: actions.UPDATE_RECOMMENDATIONS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
