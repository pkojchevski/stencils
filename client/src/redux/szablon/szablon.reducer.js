import { SzablonyActionTypes } from "./szablon.types";

const INITIAL_STATE = {
  szablony: null,
  isFetching: false,
  errorMessage: null,
  szablonForEdit: null,
  searchValue: null,
  pcb: null,
  szablonyForPcb: null,
  page: null,
  maxPages: null,
  count: null,
  storedPosition: false
};

const szablonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SzablonyActionTypes.GET_ALL_SZABLONS_START:
      return {
        ...state,
        isFetching: true
      };
    case SzablonyActionTypes.GET_ALL_SZABLONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        szablony: action.payload
      };
    case SzablonyActionTypes.GET_ALL_SZABLONS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case SzablonyActionTypes.GET_SZABLON:
      return {
        ...state,
        szablonForEdit: action.payload
      };

    case SzablonyActionTypes.UPDATE_SZABLON_START:
      return {
        ...state,
        isFetching: true,
        szablonForEdit: action.payload
      };

    case SzablonyActionTypes.UPDATE_SZABLON_SUCCESS:
      return {
        ...state,
        isFetching: false
      };

    case SzablonyActionTypes.UPDATE_SZABLON_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    case SzablonyActionTypes.ADD_SZABLON_START:
      return {
        ...state,
        isFetching: true,
        szablonForEdit: action.payload
      };

    case SzablonyActionTypes.ADD_SZABLON_SUCCESS:
      return {
        ...state,
        isFetching: false
      };

    case SzablonyActionTypes.ADD_SZABLON_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    case SzablonyActionTypes.DELETE_SZABLON_START:
      return {
        ...state,
        isFetching: true,
        szablonForEdit: action.payload
      };

    case SzablonyActionTypes.DELETE_SZABLON_SUCCESS:
      return {
        ...state,
        isFetching: false
      };

    case SzablonyActionTypes.DELETE_SZABLON_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    case SzablonyActionTypes.SEARCH_SZABLON_TABLE_START:
      return {
        ...state,
        isFetching: true,
        searchValue: action.payload
      };

    case SzablonyActionTypes.SEARCH_SZABLON_TABLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        szablony: action.payload
      };

    case SzablonyActionTypes.SEARCH_SZABLON_TABLE_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    case SzablonyActionTypes.STORE_SZABLON_START:
      return {
        ...state,
        isFetching: true,
        szablonForEdit: action.payload
      };

    case SzablonyActionTypes.STORE_SZABLON_SUCCESS:
      return {
        ...state,
        isFetching: false
      };

    case SzablonyActionTypes.STORE_SZABLON_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    case SzablonyActionTypes.GET_SZABLON_FOR_PCB_START:
      return {
        ...state,
        isFetching: true,
        pcb: action.payload
      };

    case SzablonyActionTypes.GET_SZABLON_FOR_PCB_SUCCESS:
      return {
        ...state,
        isFetching: false,
        szablonyForPcb: action.payload
      };

    case SzablonyActionTypes.GET_SZABLON_FOR_PCB_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    case SzablonyActionTypes.GET_SZABLON_PAGE_START:
      return {
        ...state,
        isFetching: true,
        page: action.payload
      };

    case SzablonyActionTypes.GET_SZABLON_PAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        szablony: action.payload
      };

    case SzablonyActionTypes.GET_SZABLON_PAGE_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    case SzablonyActionTypes.GET_SZABLON_COUNT_START:
      return {
        ...state,
        isFetching: true
      };

    case SzablonyActionTypes.GET_SZABLON_COUNT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        count: action.payload,
        maxPages: Math.round(action.payload / 8)
      };

    case SzablonyActionTypes.GET_SZABLON_COUNT_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    case SzablonyActionTypes.GET_SZABLON_AFTER_UPDATE_START:
      return {
        ...state,
        isFetching: true
      };

    case SzablonyActionTypes.GET_SZABLON_AFTER_UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        szablony: action.payload
      };

    default:
      return state;
  }
};

export default szablonReducer;
