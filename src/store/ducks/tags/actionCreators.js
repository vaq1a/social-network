export const TagsActionsType = {
    SET_TAGS: 'tags/SET_TAGS',
    FETCH_TAGS: 'tags/FETCH_TAGS',
    SET_LOADING_STATE: 'tags/SET_LOADING_STATE'
}

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