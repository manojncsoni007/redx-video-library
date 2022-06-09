import React from 'react'
import { Link } from "react-router-dom"
import { Sidebar } from '../../components'
import { usePlaylist } from '../../context';
import "./Playlist.css";

const Playlist = () => {
    const { playlist } = usePlaylist();
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
                            playlist.map((item) => (
                                <Link
                                    key={item._id}
                                    to={`/playlist/${item._id}`}
                                    className='playlist-card'>
                                    <div className='space-between'>
                                        <div>{item.title} <span className='text-m'>({item.videos.length} video)</span></div>
                                        <i class="fas fa-paper-plane"></i>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export { Playlist }