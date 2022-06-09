import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { PlaylistModal, Sidebar } from '../../components'
import { useAuth, usePlaylist, useVideo } from '../../context'
import { RiPlayListAddFill } from "react-icons/ri";
import './SingleVideo.css'
import { addToHistory, addToLikedVideo, addToWatchLater, removeFromLikedVideo } from '../../service';

const SingleVideo = () => {
  const [video, setVideo] = useState();
  const { videoId } = useParams();
  const { isLoggedIn, token } = useAuth();
  const { watchLater,likedVideos,showModal, setShowModal, setModelData, playlistDispatch } = usePlaylist();
  const location = useLocation();
  const navigate = useNavigate();
  const isVideoLiked = likedVideos.find((video)=> video._id === videoId)
  const isInWatchLater = watchLater.find((video)=> video._id === videoId)

  useEffect(() => {
    (async () => {
      try {
        const { data: { video } } = await axios.get(`/api/video/${videoId}`);
        setVideo(video);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId]);

  useEffect(() => {
    if (isLoggedIn && video) {
      addToHistory(video, token, playlistDispatch);
    }
  }, [video])


  const likeHandler = () => {
    if (isLoggedIn) {
      if(!isVideoLiked){
        addToLikedVideo(video, token, playlistDispatch);
      } else {
        removeFromLikedVideo(videoId,token,playlistDispatch);
      }
    } else {
      navigate("/login", { state: { from: location }, replace: true })
    }
  }

  const watchlaterHandler = () => {
    if (isLoggedIn) {
      addToWatchLater(video, token, playlistDispatch);
    } else {
      navigate("/login", { state: { from: location }, replace: true })
    }
  }

  const playlistHandler = () => {
    if (isLoggedIn) {
      setShowModal(true);
      setModelData(video)
    } else {
      navigate("/login", { state: { from: location }, replace: true })
    }
  }
  return (
    <>
      {showModal && <PlaylistModal />}
      <div className='grid-container'>
        <div>
          <Sidebar />
        </div>
        <div className='main-section'>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video_player-footer">
            <div className="title">
              <h4>{video?.title}</h4>
              <span>{video?.creator}</span>
            </div>
            <div className='video_player-btn'>
              <button>
                <i className="fas fa-thumbs-up"></i>
                <span onClick={likeHandler}>
                  {isVideoLiked ? "Liked" : "Like"}</span>
              </button>
              <button onClick={watchlaterHandler}>
                {isInWatchLater ? (<i className="fas fa-check-circle"></i>) : (<i className="fas fa-clock"></i>)}
                <span>Watch later</span>
              </button>
              <button onClick={playlistHandler}>
                <RiPlayListAddFill />
                <span>Save to Playlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { SingleVideo }
