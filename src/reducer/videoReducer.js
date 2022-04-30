
const videoReducer = (state, action) => {

    switch (action.type) {
        case "SET_CATEGORIES": return { ...state, categories: action.payload }
        default: return state;
    }
}

export { videoReducer }