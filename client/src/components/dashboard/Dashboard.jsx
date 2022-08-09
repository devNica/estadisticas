import React from 'react'
import './dashboard.css'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <main>
            <h1 className='dashboard_title'>DASHBOARD</h1>
            <Outlet/>
        </main>
    )
}

export default Dashboard