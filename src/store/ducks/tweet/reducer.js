import produce from "immer";
import {TweetActionTypes} from "./actionCreators";
import {LoadingState} from "./contracts/state";

const initialTweetState = {
    data: null,
    loadingState: LoadingState.NEVER,

}

export const TweetReducer = produce((draft, action) => {
    const {type, payload} = action;

    switch (type) {
        case TweetActionTypes.FETCH_TWEET:
            draft.loadingState = LoadingState.LOADING;
            break;
        case TweetActionTypes.SET_TWEET:
            draft.data = payload;
            draft.loadingState = LoadingState.LOADED;
            break;
        case TweetActionTypes.SET_LOADING_STATE:
            draft.loadingState = payload;
            break;
        default:
            return draft;
    }

}, initialTweetState);
