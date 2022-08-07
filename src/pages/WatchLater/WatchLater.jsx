import React from 'react'
import { PlaylistVideoCard, Sidebar } from '../../components'
import { useAuth, usePlaylist } from '../../context'
import { removeFromWatchLater } from '../../service'
import { Link } from 'react-router-dom'
import "./WatchLater.css"

const WatchLater = () => {
  const { watchLater, playlistDispatch } = usePlaylist();
  const { token } = useAuth();

  const removeLikedVideo = (_id) => {
    removeFromWatchLater(_id, token, playlistDispatch);
  }
  return (
    <>
      <div className="grid-container">
        <aside>
          <Sidebar />
        </aside>
        <div className="main-section">
          <h4>Watch Later ({watchLater.length} videos)</h4>
          {
            watchLater.length > 0 ? (
              watchLater.map((item) => (
                <PlaylistVideoCard video={item} key={item._id} removeHandler={() => removeLikedVideo(item._id)} />
              ))
            ) : (
              <div className="no-videos-container">
                <img src="/novideo.svg" alt="novideo" />
                <div className='details'>
                  <h4>You haven't added any video</h4>
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

export { WatchLater }
