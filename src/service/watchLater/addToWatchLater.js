import axios from "axios";

const addToWatchLater = async (video, playlistDispatch) => {
    try {
        const { data: { watchlater } } = await axios.post(
            `/api/user/watchlater`,
            { video },
            {
                headers: { authorization: localStorage.getItem("token") }
            }
        )
        playlistDispatch({ type: "ADD_TO_WATCH_LATER", payload: watchlater })
    } catch (error) {
        console.log(error);
    }
}

export { addToWatchLater }