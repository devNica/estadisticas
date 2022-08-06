import React from 'react';

import Dashboard from '../components/dashboard/Dashboard'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import './main_layout.css'

const MainLayout = () => {
    return (
        <div className="main_layout">
            <Sidebar />
            <div className="main_layout_navbar">
                <Navbar />
                <hr className="main_layout_separator"/>
                <div className="main_layout_dashboard">
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default MainLayout;