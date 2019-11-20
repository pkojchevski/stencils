import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  error: null,
  session: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGNIN_START:
      return {
        ...state,
        isFetching: true
      };
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        session: action.payload
      };
    case UserActionTypes.SIGNIN_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case UserActionTypes.GET_USER_FROM_ID_START:
      return {
        ...state,
        isFetching: true
      };
    case UserActionTypes.GET_USER_FROM_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload
      };
    case UserActionTypes.GET_USER_FROM_ID_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
