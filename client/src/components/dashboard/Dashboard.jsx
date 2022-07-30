import { Outlet } from 'react-router-dom'
import './dashboard.css'

const Dashboard = () => {
    return (
        <section>
            <div className="dashboard">
                <div className="row">
                    <Outlet/>
                </div>
            </div>
        </section>
    )
}

export default Dashboard