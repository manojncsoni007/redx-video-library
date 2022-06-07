import axios from 'axios'
import { showToast } from '../../utils/toast';

const addToLikedVideo = async (video, token, playlistDispatch) => {
    try {
        const {
            data: { likes },
          } = await axios.post(`/api/user/likes`, { video },{
            headers: { authorization: token }
        });
        playlistDispatch({ type: "UPDATE_LIKED_VIDEOS", payload: likes })
        showToast("success","Video added to liked video")
    } catch (error) {
        console.log(error);
    }
}

export { addToLikedVideo }
