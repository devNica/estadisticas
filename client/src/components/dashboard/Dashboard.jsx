import React from 'react'

import { Outlet } from 'react-router-dom'
import './dashboard.css'

const Dashboard = () => {
    return (
        <section className='dashboard'>
            <div className="row border border-primary">
                <div className="col-12 col-sm-12">
                    <Outlet />
                </div>
            </div>

        </section>
    )
}

export default Dashboard