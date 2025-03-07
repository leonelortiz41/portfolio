import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-leonel.svg';

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="container-fluid p-3 body-header card-blur d-flex justify-content-between navbar navbar-expand-md navbar-light">
      <a href={"/"} className='btn name btn-nav'>Leonel Ortiz</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="themeSwitch" onChange={toggleTheme} checked={theme === 'dark'} />
          {/* <label className="form-check-label" htmlFor="themeSwitch">Dark Mode</label> */}
        </div>
      <section className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="nav nav-tabs d-flex justify-content-center my-auto card-header-tabs">
          <li className="nav-item">
            <a className='btn btn-nav' role='link' href={"#"}>Home</a>
          </li>
          <li className="nav-item">
            <a className='btn btn-nav' role='link' href={"#About"}>About me</a>
          </li>
          <li className="nav-item">
            <a className='btn btn-nav' role='link' href={"#Projects"}>Projects</a>
          </li>
          <li className="nav-item">
            <a className='btn btn-nav' role='link' href={"#Contact"}>Contact</a>
          </li>
        </ul>
        
      </section>
    </nav>
  );
}

export default Header;
