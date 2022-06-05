import { React, useState } from 'react'
import './VideoCard.css'
import { RiPlayListAddFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useAuth, usePlaylist } from '../../context';
import { addToWatchLater} from '../../service/watchLater/addToWatchLater';
import { showToast } from '../../utils/toast';
import { removeFromWatchLater } from '../../service/watchLater/removeFromWatchLater';

const VideoCard = ({ video }) => {
  const { _id, thumbnail, title, duration, creator, avtar } = video;
  const [showDropdown, setShowDropdown] = useState(false);
  const { watchLater, playlistDispatch } = usePlaylist();
  const { isLoggedIn,token} = useAuth();
  let navigate = useNavigate();

  const showHandler = () => {
    isLoggedIn ? setShowDropdown(!showDropdown) : navigate("/login");
  }

  const watchLaterHandler = () => {
    addToWatchLater(video, playlistDispatch);
    showToast("success", "Added to watch later")
    setShowDropdown(false);
  }

  const removeHandler = () => {
     removeFromWatchLater(_id,token,playlistDispatch);
     setShowDropdown(false);
     showToast("success", "Removed from watch later")
  }

  const playlistHandler = () => {
    setShowDropdown(false);
  }

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
                <i className="fas ellipsis-vertical fa-x" onClick={showHandler}></i>
                <div className={`dropdown-content ${showDropdown ? 'show' : 'hide'}`}>
                  <ul>
                    {
                      watchLater.find(item => item._id === _id) ?
                        (<li onClick={removeHandler}>
                          <i className="fas fa-clock"></i>
                          <span>Remove from watch later</span>
                        </li>) :
                        (<li onClick={watchLaterHandler}>
                          <i className="fas fa-clock"></i>
                          <span>Add watch later</span>
                        </li>)
                    }

                    <li onClick={playlistHandler}>
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
