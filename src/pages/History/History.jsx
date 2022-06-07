import React from 'react'
import { PlaylistVideoCard, Sidebar } from '../../components'
import { useAuth, usePlaylist } from '../../context'
import { deleteAllHistory, removeFromHistory } from '../../service'
import './History.css'

const History = () => {
  const { token } = useAuth();
  const { history, playlistDispatch } = usePlaylist();

  const clearAllHistory = () => {
    deleteAllHistory(token, playlistDispatch);
  }

  const removeHistory = (_id) => {
    removeFromHistory(_id, token, playlistDispatch);
  }
  return (
    <>
      <div className="grid-container">
        <aside>
          <Sidebar />
        </aside>
        <div className="main-section">
          <div className="title-container">
            <h4>History ({history.length} videos)</h4>
            <button onClick={clearAllHistory}><i className="cursor-pointer fas fa-trash"></i> Clear All</button>
          </div>

          {history.map((item) => (
            <PlaylistVideoCard video={item} key={item._id} removeHandler={() => removeHistory(item._id)} />
          ))}
        </div>
      </div>
    </>
  )
}

export { History }
