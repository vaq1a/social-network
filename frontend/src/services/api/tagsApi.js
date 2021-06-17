import axios from "axios";

export const TagsApi = {
    fetchTags: () => {
        return axios.get('/tags').then(({data}) => data);
    }
}
