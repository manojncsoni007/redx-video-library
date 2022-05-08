import React from 'react'
import './VideoListing.css'
import { CategoryChip, Sidebar, VideoCard } from '../../components'
import { useVideo } from '../../context/video-context'

const VideoListing = () => {
  const { categories, filteredVideo } = useVideo();
  return (
    <div className='videolisting-container'>
      <aside>
        <Sidebar />
      </aside>
      <div className='main-section'>
        <div className="chip-container">
          <CategoryChip cat='All' />
          {categories.map((item) => (
            <CategoryChip cat={item.categoryName}/>
          ))}
        </div>
        <div className='video-section' >
          {filteredVideo.map((item) => (
            <VideoCard src={item.thumbnail} title={item.title} duration={item.duration} creator={item.creator} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { VideoListing }
