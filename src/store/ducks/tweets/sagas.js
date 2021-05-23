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
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddNewTweetRequest({payload}) {
    try {
        const data = {
            _id: Math.random().toString(36).substring(2),
            text: payload,
            user: {
                fullname: "Test test",
                username: "test",
                avatarUrl: "https://source.unsplash.com/random/100x100?5"
            }
        }
        const item = yield call(TweetsApi.fetchAddNewTweet, data);
        //dispatch
        yield put(addNewTweet(item));
    } catch (error) {
        yield put(setAddNewTweetLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_NEW_TWEET, fetchAddNewTweetRequest)
}