import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types";

const authReducer = (state = { loggedIn: false, loading: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.data,
        loading: false
      };
    case "LOGOUT":
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        loading: false,
        errors: action.data
      };
    case LOGIN_REQUEST:
      return {
        loading: true
      };
    default:
      return state;
  }
};

export default authReducer;
