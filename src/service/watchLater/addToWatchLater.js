import axios from "axios";
import { showToast } from "../../utils/toast";

const addToWatchLater = async (video, token, playlistDispatch) => {
    try {
        const { data: { watchlater } } = await axios.post(
            `/api/user/watchlater`,
            { video },
            {
                headers: { authorization: token }
            }
        )
        playlistDispatch({ type: "ADD_TO_WATCH_LATER", payload: watchlater })
        showToast("success","Video added to watch later")
    } catch (error) {
        console.log(error);
    }
}

export { addToWatchLater }