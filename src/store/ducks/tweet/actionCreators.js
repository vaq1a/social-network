
export const TweetActionTypes = {
    SET_TWEET: 'tweet/SET_TWEET',
    FETCH_TWEET: 'tweet/FETCH_TWEET',
    SET_LOADING_STATE: 'tweet/SET_LOADING_STATE',

}

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