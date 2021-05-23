import {createSelector} from "reselect";
import {LoadingState} from "./contracts/state";

export const selectTweets = (state) => state.tweets;

export const selectLoadingState = (state) => selectTweets(state).loadingState;

export const selectAddNewTweetLoadingState = (state) => selectTweets(state).addNewTweetState;

export const selectIsTweetsLoading = (state) => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsAddNewTweetLoading = (state) => selectAddNewTweetLoadingState(state) === LoadingState.LOADING;

export const selectIsAddNewTweetError = (state) => selectAddNewTweetLoadingState(state) === LoadingState.ERROR;

export const selectIsTweetsLoaded = (state) => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items);