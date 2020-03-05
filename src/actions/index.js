// import { loginReq } from "../requests/authRequests";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types.js";
import axios from "axios";
import { jsonHeader } from "../headers";

const dispatcherFunc = (type, data = null) => ({ type, data });

export const login = userLogin => {
  return async dispatch => {
    dispatch(dispatcherFunc(LOGIN_REQUEST));
    // try {
    //   const res = await axios.post("/api/auth/login", userLogin, jsonHeader);
    //   dispatch(dispatcherFunc(LOGIN_SUCCESS, res.data.user));
    // } catch (err) {
    //   dispatch(dispatcherFunc(LOGIN_FAILURE, err.response.data.errors));
    // }

    axios
      .post("api/auth/login", userLogin, jsonHeader)
      .then(res => dispatch(dispatcherFunc(LOGIN_SUCCESS, res.data.user)))
      .catch(err =>
        dispatch(dispatcherFunc(LOGIN_FAILURE, err.response.data.errors))
      );
  };
};

export const logout = () => {
  return {
    type: "LOGOUT"
  };
};

export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const current = () => {
  return {
    type: "RESET"
  };
};
