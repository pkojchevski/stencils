import { all, call, takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";

import {
  signinSuccess,
  signinError,
  getCurrentUserError,
  getCurrentUserStart,
  getCurrentUserSuccess,
  signoutSuccess
} from "./user.actions";

import { API, setAuthToken } from "../../axios/api";

export function* onSigninAsync({ payload: credentials }) {
  try {
    const response = yield API.post("signin", credentials);
    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem("token", token);
      yield setAuthToken(token);
      yield put(signinSuccess(token));
      yield put(getCurrentUserStart());
    }
  } catch (err) {
    yield put(signinError(err));
  }
}

export function* onSignin() {
  yield takeLatest(UserActionTypes.SIGNIN_START, onSigninAsync);
}

export function* onGetCurrentUserAsync() {
  try {
    const response = yield API.get("auth");
    if (response.status === 200) {
      const currentUser = response.data;
      yield put(getCurrentUserSuccess(currentUser));
    }
  } catch (err) {
    yield put(getCurrentUserError(err));
  }
}

export function* onGetCurrentUser() {
  yield takeLatest(
    UserActionTypes.GET_CURRENT_USER_START,
    onGetCurrentUserAsync
  );
}

export function* onGetSignoutAsync() {
  yield localStorage.removeItem("token");
  yield setAuthToken(false);
  yield put(signoutSuccess());
}

export function* onSignout() {
  yield takeLatest(UserActionTypes.SIGNOUT_START, onGetSignoutAsync);
}

export function* userSagas() {
  yield all([call(onSignin), call(onGetCurrentUser), call(onSignout)]);
}
