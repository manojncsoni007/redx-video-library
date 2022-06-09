import axios from "axios"
import { showToast } from "../../utils/toast";

const deletePlaylist = async (playlistId,token,playlistDispatch) => {
    try {
        const {
            data: { playlists },
          } = await axios.delete(`/api/user/playlists/${playlistId}`, {
            headers: {
              authorization: token,
            },
          });
          playlistDispatch({type:"SET_PLAYLIST",payload: playlists});
          showToast("success","Playlist successfully deleted")
    } catch (error) {
        console.log(error)
    }
}
export {deletePlaylist}