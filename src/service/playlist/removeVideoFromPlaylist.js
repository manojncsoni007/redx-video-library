import axios from 'axios'
import { showToast } from '../../utils/toast';

const removeVideoFromPlaylist = async (videoId, playlistId, token, playlistDispatch) => {
    try {
        const {
            data: { playlist },
        } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
            headers: {
                authorization: token,
            },
        });
        playlistDispatch({ type: "UPDATE_VIDEO_IN_PLAYLIST", payload: playlist })
        showToast("success","Video removed from playlist");
    } catch (error) {
        console.log(error);
    }
}

export { removeVideoFromPlaylist }