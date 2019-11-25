import { createSelector } from "reselect";
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectErrors = createSelector([selectUser], user => user.error);

export const selectIsAuth = createSelector([selectUser], user => user.isAuth);

export const selectInitials = createSelector(
  [selectUser],
  user => user.initials
);
