import axios from "axios";

export const TweetsApi = {
    fetchTweets: () => {
        return axios.get('/tweets?_sort=id&_order=desc').then(({data}) => data);
    },
    fetchTweet: (tweetId) => {
        return axios.get(`/tweets?_id=${tweetId}`).then(({data}) => data);
    },
    fetchAddNewTweet: (payload) => {
        return axios.post(`/tweets`, payload).then(({data}) => data);
    }
}