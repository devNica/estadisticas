import { Link } from 'react-router-dom'
import { HiOutlineViewGrid } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi'

import './sidebar.css'

const Sidebar = () => {

    return (
        <>
            <div className="sidebar_container">
                <div className="sidebar_logo">
                    <BiWorld/> <span className="sidebar_title_logo">L&D</span> 
                </div>
                <div className="sidebar_menu">
                    <Link to ="/zones" className="sidebar_menu_link"><HiOutlineViewGrid /><span className="sidebar_menu_title">Info Zonas</span></Link>
                </div>
            </div>

        </>
    )
}

export default Sidebar