import axios from "axios";

const addToWatchLater = async (video, dispatch) => {
    const { data: { watchlater } } =  await axios.post(
        `/api/user/watchlater`,
        {video},
        {
            headers: {authorization: localStorage.getItem("token") }
        }
    )
    dispatch({type:"ADD_TO_WATCH_LATER",payload:watchlater})

}

export {addToWatchLater}