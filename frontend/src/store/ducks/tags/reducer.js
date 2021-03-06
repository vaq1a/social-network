import produce from "immer";
import {LoadingState} from "./contracts/state";
import {TagsActionsType} from "./contracts/actionTypes";

const initialTagsState = {
    items: [],
    loadingState: LoadingState.LOADING
}

export const tagsReducer = produce((draft, action) => {
    const {type, payload} = action;

    switch (type) {
        case TagsActionsType.SET_TAGS:
            draft.items = payload;
            draft.loadingState = LoadingState.LOADED;
            break;
        case TagsActionsType.FETCH_TAGS:
            draft.items = [];
            break;
        case TagsActionsType.SET_LOADING_STATE:
            draft.loadingState = payload;
            break;
        default:
            return draft;
    }
}, initialTagsState);