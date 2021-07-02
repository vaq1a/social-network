
const getUserState = (state) => state.user;

export const isAuthUser = (state) => getUserState(state).user.length !== 0;

