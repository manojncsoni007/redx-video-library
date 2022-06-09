const playlistReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TO_WATCH_LATER":
            return { ...state, watchLater: payload }
        case "UPDATE_LIKED_VIDEOS":
            return { ...state, likedVideos: payload }
        case "UPDATE_HISTORY":
            return { ...state, history: payload }
        case "SET_PLAYLIST":
            return { ...state, playlist: payload }
        case "UPDATE_VIDEO_IN_PLAYLIST":
            return {
                ...state,
                playlist: state.playlist.map((list) =>
                list._id === payload._id ? payload : list
              )
            }
        default: return state
    }
}

export { playlistReducer }