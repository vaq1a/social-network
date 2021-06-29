import axios from "axios";

export const AuthApi = {
    signIn: async (payload) => {
        const {data} = await axios.post('/auth/login', payload);
        return data.data;
    },
    getUserProfile: async () => {
        const {data} = await axios.get('/users/me');
        return data.data;
    }
}