import axios from "axios";
import * as types from "./authactionTypes";

export const loginAPI = (creds) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_LOADING });
  return axios
    .post("https://reqres.in/api/login", creds)
    .then((res) => {
      console.log(res.data.token);
      dispatch({ type: types.GET_LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(() => {
      dispatch({ type: types.GET_LOGIN_FAILED });
    });
};
