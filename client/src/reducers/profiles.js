import * as actions from "../constants/actionTypes";

export default (profiles = [], action) => {
  switch (action.type) {
    case actions.GET_PROFILES:
      return action.payload;
    case actions.CREATE_PROFILE:
      return [...profiles, action.payload];
    case actions.UPDATE_PROFILE:
    case actions.UPDATE_RECOMMENDATIONS:
      return profiles.map((profile) =>
        profile._id === action.payload._id ? action.payload : profile
      );
    case actions.DELETE_PROFILE:
      return profiles.filter((profile) => profile._id !== action.payload);
    default:
      return profiles;
  }
};
