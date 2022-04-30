import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar">
            <div className='flex-center'>
                <div class="navbar-title">
                    <Link to="/"><span className='grey-text'>Red</span><span className='red-text'>X</span></Link>
                </div>
                <div className='flex-center navbar-menu'>
                    <Link to="/"><h5>HOME</h5></Link>
                    <Link to="/explore"><h5>EXPLORE</h5></Link>
                </div>
            </div>
            <div class="navbar-end">
                <Link to='/'> <button>
                    Login
                </button></Link>

            </div>
        </nav>
    )
}

export { Navbar }
