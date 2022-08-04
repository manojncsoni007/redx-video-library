import React from 'react'
import { sidebarData } from '../../static-data'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const getActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#F7F7F7" : "",
    width: isActive ? "100%" : "",
    padding: '0.5rem'
});
const Sidebar = () => {
    return (
        <>
            <div className="sidebar-container">
                <ul>
                    {sidebarData.map((item) => (
                        <li key={item.path} >
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
