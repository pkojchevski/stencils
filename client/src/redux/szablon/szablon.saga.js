import { takeLatest, all, call, put } from "redux-saga/effects";
import { SzablonyActionTypes } from "./szablon.types";

import API from "../../axios/api";
import axios from "axios";

import {
  getAllSzablonsSuccess,
  getAllSzablonsError,
  updateSzablonSuccess,
  updateSzablonFailure,
  getAllSzablonsStart,
  addSzablonSuccess,
  addSzablonError,
  deleteSzablonError,
  deleteSzablonSuccess,
  searchSzablonsFromTableSuccess,
  searchSzablonsFromTableError,
  storeSzablonSuccess,
  storeSzablonError
} from "./szablon.action";

export function* fetchSzablonyAsync() {
  try {
    let response = yield API.get("szablony");
    if (response.status === 200) {
      let szablony = response.data;
      console.log(szablony);
      yield put(getAllSzablonsSuccess(szablony));
    }
  } catch (err) {
    yield put(getAllSzablonsError(err));
  }
}

export function* fetchSablonyStart() {
  console.log("saga fetc all");
  yield takeLatest(
    SzablonyActionTypes.GET_ALL_SZABLONS_START,
    fetchSzablonyAsync
  );
}

export function* updateSzablonAsync({ payload: szablon }) {
  try {
    const response = yield API.put(`szablon/${szablon.id}`, szablon);
    if (response.status === 200) {
      yield put(updateSzablonSuccess());
      yield put(getAllSzablonsStart());
    }
  } catch (err) {
    yield put(updateSzablonFailure(err));
  }
}

export function* onUpdateSzablonStart() {
  yield takeLatest(
    SzablonyActionTypes.UPDATE_SZABLON_START,
    updateSzablonAsync
  );
}

export function* addSzablonAsync({ payload: szablon }) {
  try {
    const response = yield API.post("szablon", szablon);
    if (response.status === 200) {
      yield put(addSzablonSuccess());
      yield put(getAllSzablonsStart());
    }
  } catch (err) {
    yield put(addSzablonError);
  }
}

export function* onAddSzablonStart() {
  yield takeLatest(SzablonyActionTypes.ADD_SZABLON_START, addSzablonAsync);
}

export function* deleteSzablonAsync({ payload: szablon }) {
  try {
    const response = yield API.delete("szablon", { data: { id: szablon.id } });
    if (response.status === 200) {
      yield put(deleteSzablonSuccess());
      yield put(getAllSzablonsStart());
    }
  } catch (err) {
    yield put(deleteSzablonError(err));
  }
}

export function* onDeleteSzablonStart() {
  yield takeLatest(
    SzablonyActionTypes.DELETE_SZABLON_START,
    deleteSzablonAsync
  );
}

export function* searchSzablonTableAsync({ payload: searchValue }) {
  try {
    const response = yield API.get(`search/${searchValue}`);
    if (response.status === 200) {
      let szablony = response.data;
      yield put(searchSzablonsFromTableSuccess(szablony));
    }
  } catch (err) {
    yield put(searchSzablonsFromTableError(err));
  }
}

export function* onSearchSzablonTableStart() {
  yield takeLatest(
    SzablonyActionTypes.SEARCH_SZABLON_TABLE_START,
    searchSzablonTableAsync
  );
}

export function* onStoreSzablonAsync({ payload: szablon }) {
  try {
    const response = yield API.post("store", szablon);
    if (response.status === 200) {
      yield put(storeSzablonSuccess());
      yield put(getAllSzablonsStart());
    }
  } catch (err) {
    yield put(storeSzablonError(err));
  }
}

export function* onStoreSzablon() {
  yield takeLatest(
    SzablonyActionTypes.STORE_SZABLON_START,
    onStoreSzablonAsync
  );
}

export function* szablonSagas() {
  yield all([
    call(fetchSablonyStart),
    call(onUpdateSzablonStart),
    call(onAddSzablonStart),
    call(onDeleteSzablonStart),
    call(onSearchSzablonTableStart),
    call(onStoreSzablon)
  ]);
}
