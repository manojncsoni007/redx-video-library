import React from 'react'
import './VideoListing.css'
import { CategoryChip, PlaylistModal, Sidebar, VideoCard } from '../../components'
import { usePlaylist, useVideo } from '../../context'

const VideoListing = () => {
  const { categories, filteredVideo } = useVideo();
  const { showModal } = usePlaylist();
  return (
    <>
      {showModal && <PlaylistModal />}
      <div className='grid-container'>
        <aside>
          <Sidebar />
        </aside>
        <div className='main-section'>
          <div className="chip-container">
            <CategoryChip category='All' />
            {categories.map((item) => (
              <CategoryChip category={item.categoryName} key={item.categoryName} />
            ))}
          </div>
          <div className='video-section' >
            {filteredVideo.map((item) => (
              <VideoCard video={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export { VideoListing }
