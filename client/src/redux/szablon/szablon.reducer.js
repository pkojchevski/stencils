import { SzablonyActionTypes } from "./szablon.types";

const INITIAL_STATE = {
  szablony: null,
  isFetching: false,
  errorMessage: null,
  szablonForEdit: null,
  searchValue: null
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

    default:
      return state;
  }
};

export default szablonReducer;
