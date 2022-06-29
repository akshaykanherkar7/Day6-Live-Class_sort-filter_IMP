import * as types from "./book.action.types";
import axios from "axios";

export const getBookAPI = (params) => (dispatch) => {
  console.log("params IN ACTION", params);
  dispatch({ type: types.GET_BOOKS_LOADING });
  axios
    .get("http://localhost:8080/books", params)
    .then((res) => {
      // console.log("resDAT:", res.data);
      dispatch({ type: types.GET_BOOKS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_BOOKS_FAILED });
    });
};
