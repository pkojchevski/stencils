import { UserActionTypes } from "./user.types";

export const getCurrentUserStart = token => ({
  type: UserActionTypes.GET_CURRENT_USER_START,
  payload: token
});

export const getCurrentUserSuccess = currUser => ({
  type: UserActionTypes.GET_CURRENT_USER_SUCCESS,
  payload: currUser
});

export const getCurrentUserError = error => ({
  type: UserActionTypes.GET_CURRENT_USER_ERROR,
  payload: error
});

export const signinStart = credentials => ({
  type: UserActionTypes.SIGNIN_START,
  payload: credentials
});

export const signinSuccess = session => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: session
});

export const signinError = error => ({
  type: UserActionTypes.SIGNIN_ERROR,
  payload: error
});

export const signoutStart = () => ({
  type: UserActionTypes.SIGNOUT_START
});

export const signoutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS
});

export const signoutError = error => ({
  type: UserActionTypes.SIGNIN_ERROR,
  payload: error
});
