import { Link } from 'react-router-dom'
import logo from '../assets/logo-leonel.svg'

function Header() {
    return (
        <nav class="container-fluid p-3  body-header card-blur d-flex justify-content-between position-fixed navbar navbar-expand-md navbar-light " >
            <Link to={"/"} className='btn name btn-nav'>Leonel Ortiz
            {/* <img src={logo} typeof='svg' className=' btn name' style={{height:"45px",fill:"#e1ff00"}}/> */}
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="nav nav-tabs d-flex justify-content-center my-auto card-header-tabs">
                    <li className="nav-item">
                        <Link className=' btn btn-nav' to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className=' btn btn-nav' to={"About"}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className=' btn btn-nav' to={"Projects"}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className=' btn btn-nav' to={"Contact"}>Contact</Link>
                    </li>
                </ul>
            </div>


        </nav>

    )
}

export default Header
