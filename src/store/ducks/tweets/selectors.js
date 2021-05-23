import {createSelector} from "reselect";
import {LoadingState} from "./contracts/state";

export const selectTweets = (state) => state.tweets;

export const selectLoadingState = (state) => selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state) => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state) => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items);