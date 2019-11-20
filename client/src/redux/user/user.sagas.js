import { all, call, takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";

import {
  signinSuccess,
  signinError,
  getUserFromIdError,
  getUserFromIdStart,
  getUserFromIdSuccess
} from "./user.actions";

import API from "../../axios/api";

export function* onSigninAsync({ payload: credentials }) {
  try {
    const response = yield API.post("signin", credentials);
    if (response.status === 200) {
      const session = response.data;
      yield put(signinSuccess(session));
      yield put(getUserFromIdStart(session.userId));
    }
  } catch (err) {
    yield put(signinError(err));
  }
}

export function* onSignin() {
  yield takeLatest(UserActionTypes.SIGNIN_START, onSigninAsync);
}

export function* onGetUserFromIdAsync({ payload: userId }) {
  try {
    const response = yield API.get(`user/${userId}`);
    if (response.status === 200) {
      const currentUser = response.data;
      yield put(getUserFromIdSuccess(currentUser));
    }
  } catch (err) {
    yield put(getUserFromIdError(err));
  }
}

export function* onGetUserFromId() {
  yield takeLatest(
    UserActionTypes.GET_USER_FROM_ID_START,
    onGetUserFromIdAsync
  );
}

export function* userSagas() {
  yield all([call(onSignin), call(onGetUserFromId)]);
}
