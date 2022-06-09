import axios from 'axios';
import { showToast } from '../../utils/toast';

const createNewPlaylist = async (playlistName, token, playlistDispatch,setShowInput) => {
    try {
        const {
            data: { playlists },
        } = await axios.post("/api/user/playlists",
            { playlist: { title: playlistName } },
            { headers: { authorization: token, } });
        playlistDispatch({ type: "SET_PLAYLIST", payload: playlists });
        setShowInput(false);
    } catch (error) {
        console.log(error);
    }
}

export { createNewPlaylist }