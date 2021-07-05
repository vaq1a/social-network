import {TweetsActionsType} from "./contracts/actionTypes";

export const setTweets = (payload) => ({
   type: TweetsActionsType.SET_TWEETS,
   payload,

});

export const fetchTweets = () => ({
    type: TweetsActionsType.FETCH_TWEETS,

});

export const setTweetsLoadingState = (payload) => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,

});

export const addNewTweet = (payload) => ({
   type: TweetsActionsType.ADD_NEW_TWEET,
   payload,

});

export const fetchAddNewTweet = (payload) => ({
    type: TweetsActionsType.FETCH_ADD_NEW_TWEET,
    payload,

});

export const setAddNewTweetLoadingState = (payload) => ({
    type: TweetsActionsType.SET_ADD_NEW_TWEET_LOADING_STATE,
    payload,

});

export const deleteTweetAC = (payload) => ({
    type: TweetsActionsType.DELETE_TWEET,
    payload,

})

export const updateTweetAC = (payload) => ({
    type: TweetsActionsType.UPDATE_TWEET,
    payload,

})

