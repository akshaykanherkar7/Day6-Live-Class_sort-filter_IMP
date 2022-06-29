import * as types from "./authactionTypes";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_LOGIN_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.GET_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: false,
        token: payload,
      };
    }

    case types.GET_LOGIN_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
