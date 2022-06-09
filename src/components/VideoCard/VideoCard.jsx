import { React, useState } from 'react'
import './VideoCard.css'
import { RiPlayListAddFill } from "react-icons/ri";
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth, usePlaylist } from '../../context';
import { showToast } from '../../utils/toast';
import { addToWatchLater, removeFromWatchLater } from '../../service';


const VideoCard = ({ video }) => {
  const { _id, thumbnail, title, duration, creator, avtar } = video;
  const [showDropdown, setShowDropdown] = useState(false);
  const { watchLater,setShowModal,setModelData, playlistDispatch } = usePlaylist();
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const inWatchLater = watchLater.find(item => item._id === _id);

  const showHandler = () => {
    isLoggedIn ? setShowDropdown(!showDropdown) : navigate("/login", { state: { from: location }, replace: true });
  }

  const watchLaterHandler = () => {
    addToWatchLater(video, token,playlistDispatch)
    setShowDropdown(false);
  }

  const removeHandler = () => {
    removeFromWatchLater(_id, token, playlistDispatch)
    setShowDropdown(false);
  }

  const playlistHandler = () => {
    setShowModal(true);
    setShowDropdown(false);
    setModelData(video);
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
                      inWatchLater ?
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
