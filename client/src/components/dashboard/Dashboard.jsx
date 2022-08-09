import React from 'react'
import Card from '../cards/Card'
import './dashboard.css'

const Dashboard = () => {
    return (
        <main>
            <h1>Dashboard</h1>
            <div className="cards">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </main>
    )
}

export default Dashboard