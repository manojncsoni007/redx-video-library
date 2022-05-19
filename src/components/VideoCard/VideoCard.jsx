import { React, useState } from 'react'
import './VideoCard.css'
import { RiPlayListAddFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const VideoCard = ({ video }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { _id, thumbnail, title, duration, creator, avtar } = video;
  let navigate = useNavigate();
  return (
    <>
      <div className='video-card'>
        <img src={thumbnail} className='card-image' onClick={() => navigate(`/video/${_id}`)} />
        <div className="video-card_footer">
          <div className="avtar">
            <img src={avtar} className="rounded-avtar" alt="avatar" />
          </div>
          <div className='footer-header'>
            <div className='footer-info'>
              <span className='video-card_title'>
              {title.length > 45 ? title.substring(0, 45) + "..." : title}
              </span>
              <div className='dropdown'>
                <i className="fas ellipsis-vertical fa-x" onClick={() => setShowDropdown(!showDropdown)}></i>
                <div className={`dropdown-content ${showDropdown ? 'show' : 'hide'}`}>
                  <ul>
                    <li>
                      <i className="fas fa-clock"></i>
                      <span>Add to watch later</span>
                    </li>
                    <li>
                      <RiPlayListAddFill />
                      <span>Save to Playlist</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-between text-gray">
              <p className='text-m'>{creator}</p>
              <p>{duration}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { VideoCard }
