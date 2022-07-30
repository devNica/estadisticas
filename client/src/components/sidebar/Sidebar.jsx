import React, { Fragment } from 'react'
import { HiOutlineViewGrid } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi'

import './sidebar.css'

const Sidebar = () => {

    return (
        <Fragment>
            <div className="sidebar_container">
                <div className="sidebar_logo">
                    <BiWorld/> <span className="sidebar_title_logo">L&D</span> 
                </div>
                <div className="sidebar_menu">
                    <a href="#" className="sidebar_menu_link"><HiOutlineViewGrid /><span className="sidebar_menu_title">Info Zonas</span></a>
                </div>
            </div>

        </Fragment>
    )
}

export default Sidebar