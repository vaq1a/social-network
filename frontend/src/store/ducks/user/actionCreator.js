export const UserTypes = {
    FETCH_USER: 'user/FETCH_USER',
    SET_USER: 'user/SET_USER',
    SET_LOADING_STATE: 'user/SET_LOADING_STATE',

}

export const fetchUserAC = (payload) => ({
    type: UserTypes.FETCH_USER,
    payload,

});

export const setUserAC = (payload) => ({
    type: UserTypes.SET_USER,
    payload,

});

export const setLoadingStateUserAC = (payload) => ({
    type: UserTypes.SET_LOADING_STATE,
    payload,

});
