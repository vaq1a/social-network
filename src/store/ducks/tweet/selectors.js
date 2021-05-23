import {LoadingState} from "./contracts/state";

const selectTweet = (state) => state.tweet;

export const selectTweetItem = (state) => selectTweet(state).data;

export const selectTweetLoadingState = (state) => selectTweet(state).loadingState === LoadingState.LOADING;