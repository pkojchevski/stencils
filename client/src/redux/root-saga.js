import { all, call } from "redux-saga/effects";

import { szablonSagas } from "./szablon/szablon.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(szablonSagas), call(userSagas)]);
}
