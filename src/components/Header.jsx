// import { a } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo-leonel.svg'

function Header() {
    return (
        <nav className="container-fluid p-3  body-header card-blur d-flex justify-content-between  navbar navbar-expand-md navbar-light " >
            <a href={"/"} className='btn name btn-nav'>Leonel Ortiz
            {/* <img src={logo} typeof='svg' className=' btn name' style={{height:"45px",fill:"#e1ff00"}}/> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <section className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="nav nav-tabs d-flex justify-content-center my-auto card-header-tabs">
                    <li className="nav-item">
                        <a className=' btn btn-nav ' role='link' href={"#"}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className=' btn btn-nav ' role='link' href={"#About"}>About me</a>
                    </li>
                    <li className="nav-item">
                        <a className=' btn btn-nav ' role='link' href={"#Projects"}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className=' btn btn-nav ' role='link' href={"#Contact"}>Contact</a>
                    </li>
                </ul>
            </section>


        </nav>

    )
}

export default Header
