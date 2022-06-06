import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { Sidebar } from '../../components'
import { useAuth, usePlaylist, useVideo } from '../../context'
import { RiPlayListAddFill } from "react-icons/ri";
import './SingleVideo.css'
import { addToHistory, addToLikedVideo, addToWatchLater } from '../../service';

const SingleVideo = () => {
  const [video, setVideo] = useState();
  const { videoId } = useParams();
  const { isLoggedIn, token } = useAuth();
  const { playlistDispatch } = usePlaylist();
  const location = useLocation();
  const navigate = useNavigate();

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
      addToLikedVideo(video, token, playlistDispatch);
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

  return (
    <>
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
                <span onClick={likeHandler}>Like</span>
              </button>
              <button>
                <i className="fas fa-clock"></i>
                <span onClick={watchlaterHandler}>Watch Later</span>
              </button>
              <button>
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
