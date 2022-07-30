import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './container.css'

const Container = () => {
    return (
        <div className="container_flex">
            <Sidebar />
            <div className="container_navbar">
                <Navbar />
                <hr className="container_separator"/>
                <div className="content_dashboard">
                    <Dashboard />
                </div>
            </div>

        </div>
    )
}

export default Container;