import { takeLatest, call, put } from 'redux-saga/effects'
import {
    addNewTweet,
    setAddNewTweetLoadingState,
    setTweets,
    setTweetsLoadingState,
    TweetsActionsType
} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";

export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        //dispatch
        yield put(setTweets(items));
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* fetchAddNewTweetRequest({payload}) {
    try {
        const data = {
            text: payload,
        }
        const item = yield call(TweetsApi.fetchAddNewTweet, data);

        //dispatch
        yield put(addNewTweet(item));
    } catch (error) {
        yield put(setAddNewTweetLoadingState(LoadingState.ERROR));
    }
}

export function* fetchDeleteTweetRequest({payload: tweetId}) {
    try {
        yield call(TweetsApi.fetchDeleteTweet, tweetId);
    } catch (error) {
        yield put(setAddNewTweetLoadingState(LoadingState.ERROR));
    }
}

export function* fetchUpdateTweetRequest({payload: {tweetId, text}}) {
    try {
        const tweet = {
            text,

        }
        yield call(TweetsApi.fetchUpdateTweet, tweetId, tweet);
    } catch (error) {
        yield put(setAddNewTweetLoadingState(LoadingState.ERROR));
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_NEW_TWEET, fetchAddNewTweetRequest)
    yield takeLatest(TweetsActionsType.DELETE_TWEET, fetchDeleteTweetRequest)
    yield takeLatest(TweetsActionsType.UPDATE_TWEET, fetchUpdateTweetRequest)
}