import { combineReducers } from "redux";

import profiles from "./profiles";
import auth from "./auth";

export default combineReducers({ profiles, auth });
