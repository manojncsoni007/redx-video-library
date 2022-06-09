import axios from 'axios'
import { showToast } from '../../utils/toast';

const addVideoToPlaylist = async (modalData, playlistId, token, playlistDispatch) => {
    try {
        const { data:
            { playlist }
        } = await axios.post(`/api/user/playlists/${playlistId}`,
            { video: modalData },
            { headers: { authorization: token } });
        playlistDispatch({ type: "UPDATE_VIDEO_IN_PLAYLIST", payload: playlist })
        showToast("success", "Video added to playlist")
    } catch (error) {
        console.log(error)
    }
}

export { addVideoToPlaylist }