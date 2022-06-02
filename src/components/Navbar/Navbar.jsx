import React from 'react'
import './Navbar.css'
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from '../../context'

const Navbar = () => {
    const {isLoggedIn,setIsLoggedIn} = useAuth();
    const navigate = useNavigate();
   
    const logoutHandler = () => {
        setIsLoggedIn(false);
        navigate('/');
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
                    isLoggedIn ? (<button onClick={logoutHandler}>Logout</button>) 
                    :  (<Link to='/login'><button>Login</button></Link>)
                }
            </div>
        </nav>
    )
}

export { Navbar }
