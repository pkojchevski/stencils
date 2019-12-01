import { UserActionTypes } from "./user.types";
import { isEmptyObj, getInitials } from "../../utility/utility";

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  error: null,
  session: null,
  isAuth: false,
  initials: null
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

    case UserActionTypes.GET_CURRENT_USER_START:
      return {
        ...state,
        isFetching: true
      };
    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload,
        isAuth: !isEmptyObj(action.payload),
        initials: getInitials(action.payload.username)
      };
    case UserActionTypes.GET_CURRENT_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case UserActionTypes.SIGNOUT_START:
      return {
        ...state,
        isFetching: true
      };
    case UserActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: null,
        isAuth: false,
        initials: null
      };

    default:
      return state;
  }
};
