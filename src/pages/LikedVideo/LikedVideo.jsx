import React from 'react'
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
          {likedVideos.map((item) => (
            <PlaylistVideoCard video={item} key={item._id} removeHandler={() => removeLikedVideo(item._id)} />
          ))}
        </div>
      </div>
    </>
  )
}

export { LikedVideo }