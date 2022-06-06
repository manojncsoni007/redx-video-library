import axios from 'axios'
import { showToast } from '../../utils/toast'

const removeFromLikedVideo = async (_id, token, playlistDispatch) => {
    try {
        const {
            data: { likes },
        } = await axios.delete(`/api/user/likes/${_id}`, {
            headers: { authorization: token }
        });
        playlistDispatch({ type: "UPDATE_LIKED_VIDEOS", payload: likes })
        showToast("success", "Video removed from liked video")
    } catch (error) {
        console.log(error)
    }
}

export { removeFromLikedVideo }