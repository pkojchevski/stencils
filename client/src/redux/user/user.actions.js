import { UserActionTypes } from "./user.types";

export const getUserFromIdStart = userId => ({
  type: UserActionTypes.GET_USER_FROM_ID_START,
  payload: userId
});

export const getUserFromIdSuccess = currentUser => ({
  type: UserActionTypes.GET_USER_FROM_ID_SUCCESS,
  payload: currentUser
});

export const getUserFromIdError = error => ({
  type: UserActionTypes.GET_USER_FROM_ID_ERROR,
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
