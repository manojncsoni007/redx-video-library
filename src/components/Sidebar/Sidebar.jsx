import React from 'react'
import { sidebarData } from '../../static-data'
import { NavLink } from 'react-router-dom'
import { usePlaylist } from '../../context';
import './Sidebar.css'

const getActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#F7F7F7" : "",
    width: isActive ? "100%" : "",
    padding: '0.5rem'
});
const Sidebar = () => {
    const { hamburgerMenu, setHamburgerMenu } = usePlaylist();
    return (
        <>
            <div className={`sidebar-container ${hamburgerMenu ? "sidebar-on" : "sidebar-off"}`}>
                <ul>
                    {sidebarData.map((item) => (
                        <li key={item.path} onClick={() => setHamburgerMenu(!hamburgerMenu)}>
                            <NavLink to={item.path} style={getActiveStyle} >
                                <div className='icon'><i className={item.icon}></i></div>
                                <div className='title'>{item.title}</div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export { Sidebar }
