import * as types from "./action.types";
import axios from "axios";

export const getBookAPI = (params) => (dispatch) => {
  dispatch({ type: types.GET_BOOKS_LOADING });
  axios
    .get("http://localhost:8080/books",params)
    .then((res) => {
      dispatch({ type: types.GET_BOOKS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_BOOKS_FAILED });
    });
};
