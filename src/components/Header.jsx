import React from 'react';
import { Link } from 'react-router-dom';

function Header({ toggleTheme, theme, toggleLanguage, language }) {
  return (
    <nav className="container-fluid p-3 body-header card-blur d-flex justify-content-between navbar navbar-expand-md navbar-light">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="theme-switch-wrapper d-flex align-items-center">
        <span className="theme-label ms-2">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
        <label className="theme-switch" htmlFor="themeSwitch">
          <input type="checkbox" id="themeSwitch" onChange={toggleTheme} checked={theme === 'dark'} />
          <div className="slider round"></div>
        </label>
      </div>
      <button className='btn btn-lang' onClick={toggleLanguage}>
        {language === 'en' ? 'English' : 'Español'}
      </button>
      <section className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="nav nav-tabs d-flex justify-content-center my-auto card-header-tabs">
          <li className="nav-item">
            <a className='btn btn-nav' href="#">{language === 'en' ? 'Home' : 'Inicio'}</a>
          </li>
          <li className="nav-item">
            <a className='btn btn-nav' href="#about">{language === 'en' ? 'About me' : 'Sobre mí'}</a>
          </li>
          <li className="nav-item">
            <a className='btn btn-nav' href="#projects">{language === 'en' ? 'Projects' : 'Proyectos'}</a>
          </li>
          <li className="nav-item">
            <a className='btn btn-nav' href="#Contact">{language === 'en' ? 'Contact' : 'Contacto'}</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Header;
