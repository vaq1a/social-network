import produce from 'immer';
import {TweetsActionsType} from "./actionCreators";
import {LoadingState} from "./contracts/state";

const initialTweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,

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
        // case TweetsActionsType.FETCH_ADD_NEW_TWEET:
        //     draft.loadingState = LoadingState.LOADING;
        //     break;
        // case TweetsActionsType.ADD_NEW_TWEET:
        //     draft.items = draft.items.push(payload);
        //     draft.loadingState = LoadingState.LOADED;
        //     break;
        default:
            return draft;
    }

}, initialTweetsState);