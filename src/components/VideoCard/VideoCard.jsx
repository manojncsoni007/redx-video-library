import React from 'react'
import './VideoCard.css'


const VideoCard = (props) => {
  return (
    <>
      <div className='video-card'>
        <img src={props.src} className='card-image' />
        <div className="video-card_footer">
          <div className='space-between'>
            <span className='video-card_title'>{props.title}</span>
            <i class="fas ellipsis-vertical"></i>
            {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /> */}
          </div>
          <div className="space-between">
            <p className='text-m'>{props.creator}</p>
            <p>{props.duration}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export { VideoCard }
