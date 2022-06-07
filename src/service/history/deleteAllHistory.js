import axios from "axios"

const deleteAllHistory = async (token, playlistDispatch) => {
    try {
        const { data: { history } } = await axios.delete('/api/user/history/all',
            {
                headers: { authorization: token }
            })
        playlistDispatch({ type: "UPDATE_HISTORY", payload: history })
    } catch (error) {
        console.log(error);
    }
}
export { deleteAllHistory }