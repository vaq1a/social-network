import {TagsActionsType} from "./contracts/actionTypes";

export const setTags = (payload) => ({
    type: TagsActionsType.SET_TAGS,
    payload
});

export const fetchTags = () => ({
   type: TagsActionsType.FETCH_TAGS
});

export const setTagsLoadingState = (payload) => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload
})