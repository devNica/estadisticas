import React from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <div className="sidebar">
            <Link to="/" className='sidebar_nav_link'>
                <span>
                    <i className="bi bi-grid"></i>
                </span>
                <h3 className='sidebar_nav_title'>DASHBOARD</h3>
            </Link>
            <Link to="/zones" className='sidebar_nav_link active'>
                <span>
                    <i className="bi bi-columns"></i>
                </span>
                <h3 className='sidebar_nav_title'>GEO ZONAS</h3>
            </Link>
            <Link to="/signup" className='sidebar_nav_link'>
                <span>
                    <i className="bi bi-box-arrow-right"></i>
                </span>
                <h3 className='sidebar_nav_title'>Logout</h3>
            </Link>
        </div>
    )
}

export default Sidebar