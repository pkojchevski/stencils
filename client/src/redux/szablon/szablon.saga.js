import { takeLatest, all, call, put } from "redux-saga/effects";
import { SzablonyActionTypes } from "./szablon.types";

import { API } from "../../axios/api";

import {
  getAllSzablonsSuccess,
  getAllSzablonsError,
  updateSzablonSuccess,
  updateSzablonFailure,
  addSzablonSuccess,
  addSzablonError,
  deleteSzablonError,
  deleteSzablonSuccess,
  searchSzablonsFromTableSuccess,
  searchSzablonsFromTableError,
  storeSzablonSuccess,
  storeSzablonError,
  getSzablonForPcbError,
  getSzablonForPcbSuccess,
  getSzablonPageSuccess,
  getSzablonPageError,
  getSzablonCountSuccess,
  getSzablonCountError,
  getSzablonAfterUpdateSuccess,
  getSzablonAfterUpdateError,
  getSzablonAfterUpdateStart,
  getSzablonPageStart
} from "./szablon.action";

export function* fetchSzablonyAsync() {
  try {
    let response = yield API.get("szablony");
    if (response.status === 200) {
      let szablony = response.data;
      yield put(getAllSzablonsSuccess(szablony));
    }
  } catch (err) {
    yield put(getAllSzablonsError(err));
  }
}

export function* fetchSablonyStart() {
  yield takeLatest(
    SzablonyActionTypes.GET_ALL_SZABLONS_START,
    fetchSzablonyAsync
  );
}

export function* updateSzablonAsync({ payload: { szablon, page } }) {
  try {
    const response = yield API.put(`szablon/${szablon.id}`, szablon);
    if (response.status === 200) {
      yield put(updateSzablonSuccess());
      yield put(getSzablonPageStart(page));
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

export function* addSzablonAsync({ payload: { szablon, page } }) {
  try {
    const response = yield API.post("szablon", szablon);
    if (response.status === 200) {
      const id = response.data;
      yield put(addSzablonSuccess());
      yield put(getSzablonAfterUpdateStart(id));
    }
  } catch (err) {
    yield put(addSzablonError);
  }
}

export function* onAddSzablonStart() {
  yield takeLatest(SzablonyActionTypes.ADD_SZABLON_START, addSzablonAsync);
}

export function* deleteSzablonAsync({ payload: { szablonForDelete, page } }) {
  try {
    const response = yield API.delete("szablon", {
      data: { id: szablonForDelete.id }
    });
    if (response.status === 200) {
      yield put(deleteSzablonSuccess());
      yield put(getSzablonPageStart(page));
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

export function* onStoreSzablonAsync({ payload: { szablon } }) {
  try {
    const response = yield API.post("store", szablon);
    const id = response.data;
    if (response.status === 200) {
      yield put(storeSzablonSuccess());
      yield put(getSzablonAfterUpdateStart(id));
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

export function* onGetSzablonPcbAsync({ payload: pcb }) {
  try {
    let response = yield API.get(`szablon/pcb/${pcb}`);
    if (response.status === 200) {
      let szablony = response.data;
      yield put(getSzablonForPcbSuccess(szablony));
    }
  } catch (err) {
    yield put(getSzablonForPcbError());
  }
}

export function* onGetSzablonForPcb() {
  yield takeLatest(
    SzablonyActionTypes.GET_SZABLON_FOR_PCB_START,
    onGetSzablonPcbAsync
  );
}

export function* onGetSzablonPageAsync({ payload: page }) {
  try {
    let response = yield API.get(`szablony/pages/${page}`);
    if (response.status === 200) {
      let szablony = response.data;
      yield put(getSzablonPageSuccess(szablony));
    }
  } catch (err) {
    yield put(getSzablonPageError());
  }
}

export function* onGetSzablonPage() {
  yield takeLatest(
    SzablonyActionTypes.GET_SZABLON_PAGE_START,
    onGetSzablonPageAsync
  );
}

export function* onGetSzablonCountAsync() {
  try {
    let response = yield API.get(`szablony/count`);
    if (response.status === 200) {
      let count = response.data;
      yield put(getSzablonCountSuccess(count));
    }
  } catch (err) {
    yield put(getSzablonCountError());
  }
}

export function* onGetSzablonCount() {
  yield takeLatest(
    SzablonyActionTypes.GET_SZABLON_COUNT_START,
    onGetSzablonCountAsync
  );
}

export function* onGetSzablonAfterUpdateAsync({ payload: id }) {
  try {
    let response = yield API.get(`szablon/${id}`);
    if (response.status === 200) {
      let szablon = response.data;
      yield put(getSzablonAfterUpdateSuccess(szablon));
    }
  } catch (err) {
    yield put(getSzablonAfterUpdateError(err));
  }
}

export function* onGetSzablonAfterUpdate() {
  yield takeLatest(
    SzablonyActionTypes.GET_SZABLON_AFTER_UPDATE_START,
    onGetSzablonAfterUpdateAsync
  );
}

export function* szablonSagas() {
  yield all([
    call(fetchSablonyStart),
    call(onUpdateSzablonStart),
    call(onAddSzablonStart),
    call(onDeleteSzablonStart),
    call(onSearchSzablonTableStart),
    call(onStoreSzablon),
    call(onGetSzablonForPcb),
    call(onGetSzablonPage),
    call(onGetSzablonCount),
    call(onGetSzablonAfterUpdate)
  ]);
}
