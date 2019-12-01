import { SzablonyActionTypes } from "./szablon.types";

export const getAllSzablonsStart = () => ({
  type: SzablonyActionTypes.GET_ALL_SZABLONS_START
});

export const getAllSzablonsSuccess = szablonyMap => ({
  type: SzablonyActionTypes.GET_ALL_SZABLONS_SUCCESS,
  payload: szablonyMap
});

export const getAllSzablonsError = errorMessage => ({
  type: SzablonyActionTypes.GET_ALL_SZABLONS_ERROR,
  payload: errorMessage
});

export const getSzablon = szablon => ({
  type: SzablonyActionTypes.GET_SZABLON,
  payload: szablon
});

export const updateSzablonStart = szablon => ({
  type: SzablonyActionTypes.UPDATE_SZABLON_START,
  payload: szablon
});

export const updateSzablonSuccess = () => ({
  type: SzablonyActionTypes.UPDATE_SZABLON_SUCCESS
});

export const updateSzablonFailure = error => ({
  type: SzablonyActionTypes.UPDATE_SZABLON_ERROR,
  payload: error
});

export const addSzablonStart = szablon => ({
  type: SzablonyActionTypes.ADD_SZABLON_START,
  payload: szablon
});

export const addSzablonSuccess = () => ({
  type: SzablonyActionTypes.ADD_SZABLON_SUCCESS
});

export const addSzablonError = error => ({
  type: SzablonyActionTypes.ADD_SZABLON_ERROR,
  payload: error
});

export const deleteSzablonStart = szablon => ({
  type: SzablonyActionTypes.DELETE_SZABLON_START,
  payload: szablon
});

export const deleteSzablonSuccess = () => ({
  type: SzablonyActionTypes.DELETE_SZABLON_SUCCESS
});

export const deleteSzablonError = error => ({
  type: SzablonyActionTypes.DELETE_SZABLON_ERROR,
  payload: error
});

export const searchSzablonsFromTableStart = searchValue => ({
  type: SzablonyActionTypes.SEARCH_SZABLON_TABLE_START,
  payload: searchValue
});

export const searchSzablonsFromTableSuccess = szablony => ({
  type: SzablonyActionTypes.SEARCH_SZABLON_TABLE_SUCCESS,
  payload: szablony
});

export const searchSzablonsFromTableError = error => ({
  type: SzablonyActionTypes.SEARCH_SZABLON_TABLE_ERROR,
  payload: error
});

export const storeSzablonStart = szablon => ({
  type: SzablonyActionTypes.STORE_SZABLON_START,
  payload: szablon
});

export const storeSzablonSuccess = () => ({
  type: SzablonyActionTypes.STORE_SZABLON_SUCCESS
});

export const storeSzablonError = error => ({
  type: SzablonyActionTypes.STORE_SZABLON_ERROR,
  payload: error
});

export const getSzablonForPcbStart = pcb => ({
  type: SzablonyActionTypes.GET_SZABLON_FOR_PCB_START,
  payload: pcb
});

export const getSzablonForPcbError = error => ({
  type: SzablonyActionTypes.GET_SZABLON_FOR_PCB_ERROR,
  payload: error
});

export const getSzablonForPcbSuccess = szablon => ({
  type: SzablonyActionTypes.GET_SZABLON_FOR_PCB_SUCCESS,
  payload: szablon
});

export const getSzablonPageStart = page => ({
  type: SzablonyActionTypes.GET_SZABLON_PAGE_START,
  payload: page
});

export const getSzablonPageError = error => ({
  type: SzablonyActionTypes.GET_SZABLON_PAGE_ERROR,
  payload: error
});

export const getSzablonPageSuccess = szablony => ({
  type: SzablonyActionTypes.GET_SZABLON_PAGE_SUCCESS,
  payload: szablony
});

export const getSzablonCountStart = () => ({
  type: SzablonyActionTypes.GET_SZABLON_COUNT_START
});

export const getSzablonCountError = error => ({
  type: SzablonyActionTypes.GET_SZABLON_COUNT_ERROR,
  payload: error
});

export const getSzablonCountSuccess = count => ({
  type: SzablonyActionTypes.GET_SZABLON_COUNT_SUCCESS,
  payload: count
});

export const getSzablonAfterUpdateStart = id => ({
  type: SzablonyActionTypes.GET_SZABLON_AFTER_UPDATE_START,
  payload: id
});

export const getSzablonAfterUpdateError = error => ({
  type: SzablonyActionTypes.GET_SZABLON_AFTER_UPDATE_ERROR,
  payload: error
});

export const getSzablonAfterUpdateSuccess = szablon => ({
  type: SzablonyActionTypes.GET_SZABLON_AFTER_UPDATE_SUCCESS,
  payload: szablon
});
