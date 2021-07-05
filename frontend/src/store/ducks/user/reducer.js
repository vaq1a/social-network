import produce from "immer";
import {LoadingState} from "./contracts/state";
import {UserTypes} from "./contracts/actionTypes";

const initialState = {
    user: undefined,
    loadingState: LoadingState.NEVER,

}

export const userReducer = produce((draft, action) => {
    const {type, payload} = action;

    switch (type) {
        case UserTypes.SET_USER:
            draft.loadingState = LoadingState.SUCCESS;
            draft.user = payload;
            break;
        case UserTypes.SET_LOADING_STATE:
            draft.loadingState = payload;
            break;
        default:
            return draft;
    }
}, initialState);