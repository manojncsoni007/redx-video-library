import React from 'react'
import './VideoListing.css'
import { CategoryChip, Sidebar, VideoCard } from '../../components'
import { useVideo } from '../../context'
import { ToastContainer } from 'react-toastify'

const VideoListing = () => {
  const { categories, filteredVideo } = useVideo();
  return (
    <div className='grid-container'>
      <aside>
        <Sidebar />
      </aside>
      <div className='main-section'>
        <div className="chip-container">
          <CategoryChip cat='All' />
          {categories.map((item) => (
            <CategoryChip cat={item.categoryName} key={item.categoryName}/>
          ))}
        </div>
        <div className='video-section' >
          {filteredVideo.map((item) => (
            <VideoCard video={item} key={item._id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export { VideoListing }
