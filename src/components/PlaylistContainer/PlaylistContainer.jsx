import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth, usePlaylist } from '../../context'
import { deletePlaylist, removeVideoFromPlaylist } from '../../service'
import { Sidebar } from '../Sidebar/Sidebar'
import { PlaylistVideoCard } from '../VideoCard/PlaylistVideoCard'
import "./PlaylistContainer.css"
const PlaylistContainer = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const {token} = useAuth();
  const { playlist, playlistDispatch } = usePlaylist();
  const currentPlaylist = playlist.find((playlist) => playlist._id === playlistId)
  
  const removePlaylistVideo = (_id) => {
      removeVideoFromPlaylist(_id,playlistId,token,playlistDispatch);
  }

  const deletePlaylistHandler = () => {
    deletePlaylist(playlistId,token,playlistDispatch);
    navigate("/playlist");
  }

  return (
    <>
      <div className="grid-container">
        <aside>
          <Sidebar />
        </aside>
        <div className="main-section">
          <div className="title-container">
            <h4>{`${currentPlaylist?.title} (${currentPlaylist?.videos?.length} Videos)`}</h4>
            <button onClick={deletePlaylistHandler}><i className="cursor-pointer fas fa-trash"></i> Delete Playlist</button>
          </div>
          {
            currentPlaylist?.videos.map((item) => (
              <PlaylistVideoCard video={item} key={item._id} removeHandler={()=>removePlaylistVideo(item._id)}/>

            ))
          }
        </div>
      </div>
    </>
  )
}

export { PlaylistContainer }