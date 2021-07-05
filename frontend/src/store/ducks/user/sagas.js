import { takeLatest, call, put } from 'redux-saga/effects'
import {LoadingState} from "./contracts/state";
import {setLoadingStateUserAC, setUserAC} from "./actionCreator";
import {AuthApi} from "../../../services/api/authApi";
import {UserTypes} from "./contracts/actionTypes";

export function* fetchSignInRequest({payload}) {
    try {
        yield put(setLoadingStateUserAC(LoadingState.LOADING));
        const data = yield call(AuthApi.signIn, payload);
        localStorage.setItem("token", data.token);
        yield put(setUserAC(data));
    } catch (error) {
        yield put(setLoadingStateUserAC(LoadingState.ERROR));
    }
}

export function* fetchSignUpUserRequest({payload}) {
    try {
        yield call(AuthApi.signUp, payload);
    } catch (error) {
        yield put(setLoadingStateUserAC(LoadingState.ERROR));
    }
}

export function* fetchUserDataRequest() {
    try {
        yield put(setLoadingStateUserAC(LoadingState.LOADING));
        const data = yield call(AuthApi.getUserData);
        yield put(setUserAC(data));
    } catch (error) {
        yield put(setLoadingStateUserAC(LoadingState.ERROR));
    }
}

export function* userSaga() {
    yield takeLatest(UserTypes.FETCH_SIGN_IN_USER, fetchSignInRequest)
    yield takeLatest(UserTypes.FETCH_SIGN_UP_USER, fetchSignUpUserRequest)
    yield takeLatest(UserTypes.FETCH_USER_DATA, fetchUserDataRequest)
}