import axios from "axios";

export const AuthApi = {
    signIn: async (payload) => {
        const {data} = await axios.post('/auth/login', payload);
        return data;
    }
}