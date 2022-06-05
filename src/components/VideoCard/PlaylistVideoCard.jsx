import React from 'react'
import './PlaylistVideoCard.css'
import { useNavigate } from 'react-router-dom';
import { removeFromWatchLater } from '../../service/watchLater/removeFromWatchLater';
import { useAuth, usePlaylist } from '../../context';
import { showToast } from '../../utils/toast';

const PlaylistVideoCard = ({ video }) => {
  const { _id, thumbnail, title, duration, creator,description } = video;
  const {token} = useAuth();
  const {playlistDispatch} = usePlaylist();
  const navigate = useNavigate();

  const removeHandler = () => {
       removeFromWatchLater(_id,token,playlistDispatch)
       showToast("success","Video removed");
  }
  return (
    <>
      <div className='horizontal-video-card'>
        <img src={thumbnail} className='card-image' onClick={() => navigate(`/video/${_id}`)} />
        <div className="horizontal-video-card_footer">
          <div className='horizontal-video-footer-header'>
              <p className='creator-title'>{creator}</p>
              <span className='video-card_title'>
                {title.length > 100 ? title.substring(0, 45) + "..." : title}
              </span>
              <p>{description.length > 150 ? description.substring(0,100) + "..." : description}</p>
            <div className="space-between text-gray">
              <p>{duration}</p>
            </div>
          </div>
            <i class="fas fa-xmark fa-lg" onClick={removeHandler}></i>
        </div>
      </div>
    </>
  )
}

export { PlaylistVideoCard }