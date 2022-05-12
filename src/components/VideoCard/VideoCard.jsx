import { React, useState } from 'react'
import './VideoCard.css'
import { RiPlayListAddFill } from "react-icons/ri";


const VideoCard = ({ video }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { thumbnail, title, duration, creator } = video
  return (
    <>
      <div className='video-card'>
        <img src={thumbnail} className='card-image' />
        <div className="video-card_footer">
          <div className='space-between'>
            <span className='video-card_title'>{title}</span>
            <div className='dropdown'>
              <i className="fas ellipsis-vertical fa-x" onClick={() => setShowDropdown(!showDropdown)}></i>
              <div className={`dropdown-content ${showDropdown ? 'show' : 'hide'}`}>
                <ul>
                  <li className='space-between'>
                    <i className="fas fa-clock"></i>
                    <span>Add to watch later</span>
                  </li>
                  <li className='space-between'>
                    <RiPlayListAddFill />
                    <span>Add to watch later</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-between">
            <p className='text-m'>{creator}</p>
            <p>{duration}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export { VideoCard }
