import { createSelector } from "reselect";

const selectSzablon = state => state.szablon;

export const selectSzablony = createSelector(
  [selectSzablon],
  szablon => szablon.szablony
);

export const selectSzablonyforPreview = createSelector(
  [selectSzablony],
  szablony => (szablony ? Object.keys(szablony).map(key => szablony[key]) : [])
);

export const selectIsSzablonyFetching = createSelector(
  [selectSzablon],
  szablon => szablon.isFetching
);

export const selectIsSzablonyLoaded = createSelector(
  [selectSzablon],
  szablon => !!szablon.szablony
);

export const selectSzablonForEdit = createSelector(
  [selectSzablon],
  szablon => szablon.szablonForEdit
);

export const selectSzablonForPcb = createSelector(
  [selectSzablon],
  szablon => szablon.szablonyForPcb
);
