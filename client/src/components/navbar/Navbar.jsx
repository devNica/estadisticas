import { HiSearch } from 'react-icons/hi'
import './navbar.css'
import noImg from './perfil.png';


const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <form className="form-inline position-relative my-2 d-inline-block">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search" />
                <button className="btn btn-search position-absolute" type="submit"><HiSearch className="icon-search" /></button>
            </form>

            <div className="collapse navbar-collapse mr-2" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="" alt="" src={noImg} className="img-fluid rounded-circle avatar mr-2" />
                            LMARSELL
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Perfil</a>
                            <a className="dropdown-item" href="#">Editar Perfil</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Cerrar Sesion</a>
                        </div>
                    </li>

                </ul>

            </div>
            
        </nav>

    )
}

export default Navbar;