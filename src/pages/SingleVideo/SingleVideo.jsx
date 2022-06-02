import React from 'react'
import { useParams } from 'react-router-dom'
import { Sidebar } from '../../components'
import { useVideo } from '../../context'
import { RiPlayListAddFill } from "react-icons/ri";
import './SingleVideo.css'

const SingleVideo = () => {
  let { videoId } = useParams();
  let { video } = useVideo();

  let filteredVideo = video.find((video) => video._id === videoId);
  return (
    <>
      <div className='explore-grid-container'>
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
              <h4>{filteredVideo.title}</h4>
              <span>{filteredVideo.creator}</span>
            </div>
            <div className='video_player-btn'>
              <button>
                <i className="fas fa-thumbs-up"></i>
                <span>Like</span>
              </button>
              <button>
                <i className="fas fa-clock"></i>
                <span>Watch Later</span>
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
