import { createContext, useContext, useReducer, useEffect } from 'react'
import { playlistReducer } from '../reducer';

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {

    const[playlistState,playlistDispatch] = useReducer( playlistReducer,{
        watchLater:[],
        likedVideos:[]
    })

    const {watchLater,likedVideos} = playlistState;
    return (
        <>
            <PlaylistContext.Provider value={{watchLater,likedVideos,playlistDispatch}}>
                {children}
            </PlaylistContext.Provider>
        </>
    )
}

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider }