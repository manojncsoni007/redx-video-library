import React from 'react'
import { PlaylistVideoCard, Sidebar, VideoCard } from '../../components'
import { usePlaylist } from '../../context'
import "./WatchLater.css"

const WatchLater = () => {

  const { watchLater } = usePlaylist();
  return (
    <>
      <div className="grid-container">
        <aside>
          <Sidebar />
        </aside>
        <div className="main-section">
        {watchLater.map((item) => (
            // <VideoCard video={item} key={item._id}/>
            <PlaylistVideoCard video={item} key={item._id}/>
          ))}
        </div>
      </div>
    </>
  )
}

export { WatchLater }
