import * as types from "./action.types";

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_BOOKS_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.GET_BOOKS_SUCCESS: {
      return { ...state, books: payload, isLoading: false, isError: false };
    }

    case types.GET_BOOKS_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
