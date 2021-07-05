import {TweetActionTypes} from "./contracts/actionTypes";

export const fetchTweet = (payload) => ({
    type: TweetActionTypes.FETCH_TWEET,
    payload,

});

export const setTweet = (payload) => ({
   type:  TweetActionTypes.SET_TWEET,
   payload,

});

export const setTweetLoadingState = (payload) => ({
   type: TweetActionTypes.SET_LOADING_STATE,
   payload,

});