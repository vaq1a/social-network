
const getUserState = (state) => state.user;

export const isAuth = (state) => !!getUserState(state).user;

export const isUserLoadingState = (state) => getUserState(state).loadingState;
