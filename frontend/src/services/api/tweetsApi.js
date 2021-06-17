import axios from "axios";

export const TweetsApi = {
    fetchTweets: () => {
        return axios.get('/tweets').then(({data}) => data);
    },
    fetchTweet: (tweetId) => {
        return axios.get(`/tweets/${tweetId}`).then(({data}) => data);
    },
    fetchAddNewTweet: (payload) => {
        return axios.post(`/tweets`, payload).then(({data}) => data);
    }
}