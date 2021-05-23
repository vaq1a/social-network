import produce from 'immer';
import {TweetsActionsType} from "./actionCreators";
import {LoadingState} from "./contracts/state";

const initialTweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    addNewTweetState: LoadingState.NEVER,

}

export const tweetsReducer = produce((draft, action) => {
    const {type, payload} = action;

    switch (type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;

        case TweetsActionsType.SET_LOADING_STATE:
            draft.loadingState = payload;
            break;
        case TweetsActionsType.FETCH_ADD_NEW_TWEET:
            draft.addNewTweetState = LoadingState.LOADING;
            break;
        case TweetsActionsType.ADD_NEW_TWEET:
            draft.items.push(payload);
            draft.addNewTweetState = LoadingState.LOADED;
            break;
        case TweetsActionsType.SET_ADD_NEW_TWEET_LOADING_STATE:
            draft.addNewTweetState = payload;
            break;
        default:
            return draft;
    }

}, initialTweetsState);