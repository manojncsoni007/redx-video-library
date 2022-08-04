import { createContext, useContext, useReducer, useState } from 'react'
import { playlistReducer } from '../reducer';

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModelData] = useState({});

    const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
        watchLater: [],
        likedVideos: [],
        history: [],
        playlist: []
    })

    const { watchLater, likedVideos, history,playlist } = playlistState;
    console.log('playlist name',playlist);
    return (
        <>
            <PlaylistContext.Provider value={{
                watchLater,
                likedVideos,
                history,
                playlist,
                showModal,
                modalData,
                setShowModal,
                setModelData,
                playlistDispatch
            }}>
                {children}
            </PlaylistContext.Provider>
        </>
    )
}

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider }