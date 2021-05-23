export const TweetsActionsType = {
    SET_TWEETS: 'tweets/SET_TWEETS',
    FETCH_TWEETS: 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE: 'tweets/SET_LOADING_STATE',
    ADD_NEW_TWEET: 'tweets/ADD_NEW_TWEET',
    FETCH_ADD_NEW_TWEET: 'tweets/FETCH_ADD_NEW_TWEET',
    SET_ADD_NEW_TWEET_LOADING_STATE: 'tweets/SET_ADD_NEW_TWEET_LOADING_STATE',

};

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
