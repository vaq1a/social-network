import produce from "immer";
import {LoadingState} from "./contracts/state";
import {UserTypes} from "./actionCreator";

const initialState = {
    user: [],
    loadingState: LoadingState.NEVER,

}

export const userReducer = produce((draft, action) => {
    const {type, payload} = action;

    switch (type) {
        case UserTypes.FETCH_USER:
            draft.loadingState = LoadingState.LOADING
            break;
        case UserTypes.SET_USER:
            draft.loadingState = LoadingState.LOADED;
            draft.user = payload;
            break;
        case UserTypes.SET_LOADING_STATE:
            draft.loadingState = payload;
            break;
        default:
            return draft;
    }
}, initialState);