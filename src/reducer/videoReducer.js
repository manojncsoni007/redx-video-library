const videoReducer = (state, action) => {

    switch (action.type) {
        case "SET_CATEGORIES": return { ...state, categories: action.payload }
        case "SET_VIDEOS": return {...state, video: action.payload}
        case "FILTER_VIDEO_CATEGORYWISE": return{...state, categoryFilter: action.payload.cat};
        default: return state;
    }
}

export { videoReducer }