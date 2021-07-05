import produce from 'immer';
import {LoadingState} from "./contracts/state";
import {TweetsActionsType} from "./contracts/actionTypes";

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
            // draft.items.splice(0, 0, payload);
            draft.items = [payload, ...draft.items];
            draft.addNewTweetState = LoadingState.LOADED;
            break;
        case TweetsActionsType.SET_ADD_NEW_TWEET_LOADING_STATE:
            draft.addNewTweetState = payload;
            break;
        case TweetsActionsType.DELETE_TWEET:
            draft.items = draft.items.filter(item => item._id !== payload);
            break;
        case TweetsActionsType.UPDATE_TWEET:
            draft.items = draft.items.map(item => {
               if(item._id === payload.tweetId) {
                   item.text = payload.text;
                   return item;
               } else {
                   return item;
               }
            });
            break;
        default:
            return draft;
    }

}, initialTweetsState);