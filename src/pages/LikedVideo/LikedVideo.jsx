import React from 'react'
import { Link } from 'react-router-dom';
import { PlaylistVideoCard, Sidebar } from '../../components';
import { useAuth, usePlaylist } from '../../context'
import { removeFromLikedVideo } from '../../service';
import "./LikedVideo.css";

const LikedVideo = () => {
  const { likedVideos, playlistDispatch } = usePlaylist();
  const { token } = useAuth();

  const removeLikedVideo = (_id) => {
    removeFromLikedVideo(_id, token, playlistDispatch);
  }
  return (
    <>
      <div className="grid-container">
        <aside>
          <Sidebar />
        </aside>
        <div className="main-section">
          <h4>Liked Video ({likedVideos.length} videos)</h4>
          {
            likedVideos.length > 0 ? (
              likedVideos.map((item) => (
                <div className="video-list">
                  <PlaylistVideoCard video={item} key={item._id} removeHandler={() => removeLikedVideo(item._id)} />
                </div>
              ))
            ) :
              (
                <div className="no-videos-container">
                  <img src="/novideo.svg" alt="novideo" />
                  <div className='details'>
                    <h4>You haven't liked any videos</h4>
                    <button><Link to='/explore'>Start Exploring</Link> </button>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </>
  )
}

export { LikedVideo }