import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, usePlaylist } from '../../context'
import { showToast } from '../../utils/toast'

const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const { playlistDispatch } = usePlaylist();
    const navigate = useNavigate();
    const logOutHandler = () => {
        setIsLoggedIn(false);
        playlistDispatch({ type: "ADD_TO_WATCH_LATER", payload: [] })
        playlistDispatch({ type: "UPDATE_LIKED_VIDEOS", payload: [] })
        playlistDispatch({ type: "UPDATE_HISTORY", payload: [] })
        playlistDispatch({ type: "SET_PLAYLIST", payload: [] })
        navigate('/');
        showToast("success", "You logged out")
    }
    return (
        <nav className="navbar">
            <div className='flex-center'>
                <div className="navbar-title">
                    <Link to="/"><span className='grey-text'>Red</span><span className='red-text'>X</span></Link>
                </div>
                <div className='flex-center navbar-menu'>
                    <Link to="/"><h5>HOME</h5></Link>
                    <Link to="/explore"><h5>EXPLORE</h5></Link>
                </div>
            </div>
            <div className="navbar-end">
                {
                    !isLoggedIn ? (<Link to='/login'>Login</Link>) : (<Link to="/" onClick={logOutHandler}>Logout</Link>)
                }
            </div>
        </nav>
    )
}

export { Navbar }
