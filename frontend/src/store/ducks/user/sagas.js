import { takeLatest, call, put } from 'redux-saga/effects'
import {LoadingState} from "./contracts/state";
import {setLoadingStateUserAC, setUserAC, UserTypes} from "./actionCreator";
import {AuthApi} from "../../../services/api/authApi";

export function* fetchUserRequest({payload}) {
    try {
        const data = yield call(AuthApi.signIn, payload);
        localStorage.setItem("token", data.token);
        yield put(setUserAC(data));
    } catch (error) {
        yield put(setLoadingStateUserAC(LoadingState.ERROR));
    }
}

export function* userSaga() {
    yield takeLatest(UserTypes.FETCH_USER, fetchUserRequest)
}