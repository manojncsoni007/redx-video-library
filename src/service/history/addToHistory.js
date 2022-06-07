import axios from 'axios'

const addToHistory = async (video, token, playlistDispatch) => {
    try {
        const { data: { history } } = await axios.post('/api/user/history',
            { video },
            {
                headers: { authorization: token }
            })
        playlistDispatch({ type: "UPDATE_HISTORY", payload: history })
    } catch (error) {
        console.log(error);
    }

}

export { addToHistory }