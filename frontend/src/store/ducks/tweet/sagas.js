import { put, takeLatest, call } from 'redux-saga/effects'
import {setTweet, setTweetLoadingState, TweetActionTypes} from "./actionCreators";
import {LoadingState} from "./contracts/state";
import {TweetsApi} from "../../../services/api/tweetsApi";

// Our worker Saga: will perform the async increment task
export function* fetchTweetRequest({payload: tweetId}) {
    try {
        const tweet = yield call(TweetsApi.fetchTweet, tweetId);
        yield put(setTweet(tweet.message));
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetSaga() {
    yield takeLatest(TweetActionTypes.FETCH_TWEET, fetchTweetRequest);
}