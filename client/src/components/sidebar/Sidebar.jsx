import React, { Fragment } from 'react'
import { SiGooglestreetview } from 'react-icons/si';
import { BiWorld } from 'react-icons/bi'

import './sidebar.css'

const Sidebar = () => {

    return (
        <Fragment>
            <div className="sidebar-container">
                <div className="logo">
                    <BiWorld/> <span className="title-logo">L&D</span> 
                </div>
                <div className="menu">
                    <a href="#" className="menu-link"><SiGooglestreetview /><span className="menu-title">Info Zonas</span></a>
                </div>
            </div>

        </Fragment>
    )
}

export default Sidebar