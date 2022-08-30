import Sidebar from '../sidebar/Sidebar'
import logo from './avatar.png'
import './aside.css'


const Aside = () => {
    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h2 className='brand'>Lux&Dev</h2>
                </div>
            </div>
            <Sidebar />
        </aside>
    )
}

export default Aside