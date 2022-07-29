import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './container.css'

const Container = () => {
    return (
        <div className="container-flex">
            <Sidebar />
            <div className="container-navbar">
                <Navbar />
                <hr className="line"/>
                <div className="content-dashboard">
                    <Dashboard />
                </div>
            </div>

        </div>
    )
}

export default Container;