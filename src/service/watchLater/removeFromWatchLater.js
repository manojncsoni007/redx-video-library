import axios from "axios";

const removeFromWatchLater = async (_id, token, playlistDispatch,) => {
    try {
        const { data: { watchlater } } = await axios.delete(`/api/user/watchlater/${_id}`,
            {
                headers: { authorization: token }
            });
            playlistDispatch({ type: "ADD_TO_WATCH_LATER", payload: watchlater })

    } catch (error) {
        console.log(error);
    }
}

export { removeFromWatchLater }