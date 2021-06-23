import {LoadingState} from "./contracts/state";

export const selectTweetsState = (state) => state.tweets;

export const selectLoadingState = (state) => selectTweetsState(state).loadingState;

export const selectAddNewTweetLoadingState = (state) => selectTweetsState(state).addNewTweetState;

export const selectIsTweetsLoading = (state) => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsAddNewTweetLoading = (state) => selectAddNewTweetLoadingState(state) === LoadingState.LOADING;

export const selectIsAddNewTweetError = (state) => selectAddNewTweetLoadingState(state) === LoadingState.ERROR;

export const selectIsTweetsLoaded = (state) => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = (state) => selectTweetsState(state).items;