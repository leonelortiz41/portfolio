import React, { useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

function Header({ toggleTheme, theme, toggleLanguage, language }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`container-fluid p-3 body-header card-blur ${theme}`}>
      <div className="d-flex justify-content-between align-items-center">

        {/* Botón de menú para pantallas pequeñas */}
        <button
          className="btn btn-menu-toggle d-md-none"
          onClick={toggleMenu}
        >
          {language === "en" ? "Menu" : "Menú"}
        </button>
      </div>

      {/* Navegación y botones dentro del collapse */}
      <div className={`collapse ${menuOpen ? "show" : ""} d-md-flex justify-content-md-between align-items-md-center`}>
        <ul className="nav nav-tabs flex-column flex-md-row card-header-tabs mt-3 mt-md-0">
          <li className="nav-item">
            <a className="btn btn-nav" href="#">{language === 'en' ? 'Home' : 'Inicio'}</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-nav" href="#about">{language === 'en' ? 'About me' : 'Sobre mí'}</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-nav" href="#projects">{language === 'en' ? 'Projects' : 'Proyectos'}</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-nav" href="#Contact">{language === 'en' ? 'Contact' : 'Contacto'}</a>
          </li>
        </ul>

        {/* Botones de idioma y tema */}
        <div className="d-flex flex-column flex-md-row align-items-center mt-3 mt-md-0">
          <button onClick={toggleTheme} className="btn theme-toggle me-md-3 mb-2 mb-md-0 d-flex align-items-center">
            {theme === "dark" ? <FaMoon className="me-2" /> : <FaSun className="me-2" />}
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </button>
          <button onClick={toggleLanguage} className="btn language-toggle d-flex align-items-center">
            <IoLanguage className="me-2" />
            {language === "en" ? "English" : "Español"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;