import React from 'react'
import { sidebarData } from '../../static-data'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-container">
                <ul>
                    {sidebarData.map((item) => (
                        <li key={item.path}>
                            <NavLink to={item.path}>
                                <i className={item.icon}></i>
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export { Sidebar }
