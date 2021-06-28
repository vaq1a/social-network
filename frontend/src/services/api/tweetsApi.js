import {axios} from '../../core/axios';

export const TweetsApi = {
    fetchTweets: async () => {
        const {data} = await axios.get('/tweets');
        return data.message;
    },
    fetchTweet: async (tweetId) => {
        const {data} = await axios.get(`/tweets/${tweetId}`);
        return data.message;
    },
    fetchAddNewTweet: async (payload) => {
        const {data} = await axios.post(`/tweets`, payload);
        return data.message;
    },
    fetchDeleteTweet: async (tweetId) => {
        const {data} = await axios.delete(`/tweets/${tweetId}`);
        return data.message;
    },
    fetchUpdateTweet: async (tweetId, tweet) => {
        const {data} = await axios.put(`/tweets/${tweetId}`, tweet);
        return data.message;
    }
}