import {UserTypes} from "./contracts/actionTypes";

export const fetchSignInUserAC = (payload) => ({
    type: UserTypes.FETCH_SIGN_IN_USER,
    payload,

});

export const fetchSignUpUserAC = (payload) => ({
    type:  UserTypes.FETCH_SIGN_UP_USER,
    payload,

});

export const fetchUserDataAC = () => ({
    type: UserTypes.FETCH_USER_DATA,

});

export const setUserAC = (payload) => ({
    type: UserTypes.SET_USER,
    payload,

});

export const setLoadingStateUserAC = (payload) => ({
    type: UserTypes.SET_LOADING_STATE,
    payload,

});
