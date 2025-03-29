import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header({ toggleTheme, theme, toggleLanguage, language }) {
  return (
    <nav className={`container-fluid p-3 body-header card-blur d-flex justify-content-between align-items-center ${theme}`}>
      {/* Botones de cambio de tema y idioma */}
      <div className="d-flex align-items-center">
        <button onClick={toggleTheme} className="btn theme-toggle me-3">
          {theme === "dark" ? <FaMoon className="me-2" /> : <FaSun className="me-2" />}
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </button>

        <button onClick={toggleLanguage} className="btn language-toggle">
          <IoLanguage className="me-2" />
          {language === "en" ? "English" : "Español"}
        </button>
      </div>

      {/* Navegación */}
      <section className="d-flex">
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