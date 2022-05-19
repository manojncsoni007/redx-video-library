import { createContext, useContext, useReducer, useEffect } from 'react'
import { playlistReducer } from '../reducer';

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {

    const[playlistState,playlistDispatch] = useReducer( playlistReducer,{
        watchLater:[]
    })

    const {watchLater} = playlistState;
    return (
        <>
            <PlaylistContext.Provider value={{watchLater,playlistDispatch}}>
                {children}
            </PlaylistContext.Provider>
        </>
    )
}

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider }