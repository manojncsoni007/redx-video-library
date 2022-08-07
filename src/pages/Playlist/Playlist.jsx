import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Sidebar } from '../../components'
import { usePlaylist } from '../../context';
import "./Playlist.css";

const Playlist = () => {
    const { playlist } = usePlaylist();
    const navigate = useNavigate();
    return (
        <>
            <div className="grid-container">
                <aside>
                    <Sidebar />
                </aside>
                <div className="main-section">
                    <h4>Playlist</h4>
                    <div className="playlist-card-container">
                        {
                            playlist.length > 0 ? (
                                playlist.map((item) => (
                                    <Link
                                        key={item._id}
                                        to={`/playlist/${item._id}`}
                                        className='playlist-card'>
                                        <div className='space-between'>
                                            <div>{item.title} <span className='text-m'>({item.videos.length} video)</span></div>
                                            <i className="fas fa-paper-plane"></i>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="no-videos-container">
                                    <img src="/novideo.svg" alt="novideo" />
                                    <div className='details'>
                                        <h4>No playlist created yet</h4>
                                        <button
                                            id='no-playlist_btn'
                                            onClick={() => navigate('/explore')}>
                                            Start Exploring</button>
                                    </div>

                                </div>
                            )

                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export { Playlist }