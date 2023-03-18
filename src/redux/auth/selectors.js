export const selectIsStateChange = state => state.auth.stateChange;
export const selectUser = state => state.auth.nickName;
export const selectIsRefreshing = state => state.auth.isRefreshing;