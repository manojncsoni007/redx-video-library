const playlistReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WATCH_LATER":
            // return { ...state, watchLater: action.payload }
            console.log(action.payload);
        default: return state
    }
}

export { playlistReducer }