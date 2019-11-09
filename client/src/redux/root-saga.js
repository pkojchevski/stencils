import { all, call } from "redux-saga/effects";

import { szablonSagas } from "./szablon/szablon.saga";

export default function* rootSaga() {
  yield all([call(szablonSagas)]);
}
