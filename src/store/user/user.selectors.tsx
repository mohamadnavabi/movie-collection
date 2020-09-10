import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

// User Authentication Data
export const selectUserAuth = createSelector(
  [selectUser],
  user => user.auth
)