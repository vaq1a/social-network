import {createSelector} from "reselect";
import {LoadingState} from "./contracts/state";

const selectTags = (state) => state.tags;

export const selectTagsIsLoading = (state) => selectTags(state).loadingState === LoadingState.LOADING;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);