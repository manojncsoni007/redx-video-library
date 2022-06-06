import axios from 'axios'
import { showToast } from '../../utils/toast'

const removeFromHistory = async (_id, token, playlistDispatch) => {
    try {
        const { data: { history } } = await axios.delete(`/api/user/history/${_id}`,
            {
                headers: { authorization: token }
            })
        playlistDispatch({ type: "UPDATE_HISTORY", payload: history })
        showToast("success","Removed from history")
    } catch (error) {
        console.log(error)
    }
}

export { removeFromHistory }