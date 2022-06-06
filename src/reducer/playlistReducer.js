const playlistReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TO_WATCH_LATER":
            return { ...state, watchLater: payload }
        case "UPDATE_LIKED_VIDEOS":
            return { ...state, likedVideos: payload }
        default: return state
    }
}

export { playlistReducer }