import React from 'react'
import './dashboard.css'

const Dashboard = () => {
    return (
        <section>
            <div className="dashboard">
                <div className="row">
                    <div className="col-lg-9">
                        <h1 className="dashboard_welcome">Bienvenido Lucas Andres Marsell</h1>
                        <p className="dashboard_msg">Revisa la ultima información</p>
                    </div>
                    <div className="col-lg-3">

                    </div>
                </div>
                <div className="row">
                    {/* <Login/> */}
                </div>
            </div>
        </section>
    )
}

export default Dashboard