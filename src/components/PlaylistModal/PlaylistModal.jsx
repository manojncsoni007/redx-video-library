import React, { useState } from 'react'
import { useAuth, usePlaylist } from '../../context'
import { addVideoToPlaylist, createNewPlaylist, removeVideoFromPlaylist } from '../../service';
import { showToast } from '../../utils/toast';
import './PlaylistModal.css'

const PlaylistModal = () => {
    const { setShowModal, playlist, modalData, playlistDispatch } = usePlaylist();
    const { token } = useAuth();
    const [playlistName, setPlaylistName] = useState("");
    const [showInput, setShowInput] = useState(false);
    const isPlaylistExist = playlist.some(item => item.title == playlistName.trim());

    const createPlaylistHandler = () => {
        if (playlistName.trim() !== "") {
            if (!isPlaylistExist) {
                createNewPlaylist(playlistName, token, playlistDispatch, setShowInput);
                setPlaylistName("");
            } else {
                showToast('error', `Playlist name can't be same`);
            }
        } else {
            showToast("error", "Enter playlist name")
        }
    }

    const playlistInputHandler = (event, playlistId) => {
        if (event.target.checked) {
            addVideoToPlaylist(modalData, playlistId, token, playlistDispatch)
        } else {
            removeVideoFromPlaylist(modalData._id, playlistId, token, playlistDispatch);
        }
    }

    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <div className="model-header">
                        <h5> Save to playlist</h5>
                        <i className="fas fa-times fa-md" onClick={() => setShowModal(false)}></i>
                    </div>
                    {
                        playlist &&
                        playlist.map((item) =>
                            <label key={item._id} className="playlist-title">
                                <input
                                    id={item._id}
                                    type="checkbox"
                                    checked={item.videos?.some(video => video._id === modalData._id) ? true : false}
                                    onChange={(event) => playlistInputHandler(event, item._id)}
                                />
                                {item.title}
                            </label>
                        )
                    }

                    {showInput &&
                        <div className='playlist-input'>
                            <input type="text" name="" id="" onChange={(e) => setPlaylistName(e.target.value)} placeholder="Enter Playlist Name" />
                            <button onClick={createPlaylistHandler}><i className="fas fa-plus"></i></button>
                        </div>
                    }
                    <div className='model-footer'>
                        <button onClick={() => setShowInput(true)}><span><i className="fas fa-plus"></i></span> Create a new playlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { PlaylistModal }