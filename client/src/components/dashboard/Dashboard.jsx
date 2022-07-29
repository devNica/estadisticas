import React from 'react'
import './dashboard.css'
// import Login from "../auth/Login"

const Dashboard = () => {
    return (
        <section>
            <div className="dashboard">
                <div className="row">
                    <div className="col-lg-9">
                        <h1 className="dashboard-welcome">Bienvenido Lucas Andres Marsell</h1>
                        <p className="dashboard-msg">Revisa la ultima información</p>
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