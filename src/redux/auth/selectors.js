export const selectIsLoggedIn = state => state.auth.stateChange;
export const selectUser = state => state.auth.nickName;
export const selectIsRefreshing = state => state.auth.isRefreshing;
// export const selectIsLoggedIn = state => false;
