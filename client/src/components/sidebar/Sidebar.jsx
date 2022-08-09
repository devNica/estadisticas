import React from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <div className="sidebar">
            <Link to="/dashboard" className='sidebar_nav_link'>
                <span>
                    <i class="bi bi-grid"></i>
                </span>
                <h3 className='sidebar_nav_title'>Dashboard</h3>
            </Link>
            <Link to="/dashboard" className='sidebar_nav_link active'>
                <span>
                    <i class="bi bi-columns"></i>
                </span>
                <h3 className='sidebar_nav_title'>Zonas</h3>
            </Link>
            <Link to="/dashboard" className='sidebar_nav_link'>
                <span>
                    <i class="bi bi-box-arrow-right"></i>
                </span>
                <h3 className='sidebar_nav_title'>Logout</h3>
            </Link>
        </div>
    )
}

export default Sidebar