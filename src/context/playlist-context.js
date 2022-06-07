import { createContext, useContext, useReducer, useEffect } from 'react'
import { playlistReducer } from '../reducer';

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {

    const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
        watchLater: [],
        likedVideos: [],
        history: []
    })

    const { watchLater, likedVideos, history } = playlistState;
    return (
        <>
            <PlaylistContext.Provider value={{ watchLater, likedVideos, history, playlistDispatch }}>
                {children}
            </PlaylistContext.Provider>
        </>
    )
}

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider }