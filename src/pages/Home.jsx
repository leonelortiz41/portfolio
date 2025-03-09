import React, { useRef, useEffect } from 'react';
import perfil from '../assets/perfil7.webp';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import "../App.css";

function Home({ language }) {
  const refHome = useRef(null);
  const subir = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("show");
      } else {
        entries[0].target.classList.remove("show");
      }
    }, { threshold: 0 });

    if (refHome.current) observer.observe(refHome.current);

    return () => {
      if (refHome.current) observer.unobserve(refHome.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        subir.current.classList.add("show-sub");
      } else {
        subir.current.classList.remove("show-sub");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='Home' className="body-home justify-content-center d-flex align-items-center">
      <button ref={subir} className='subir d-flex justify-content-center p-0 align-items-center oculto animation-subir' onClick={scrollToTop}>
        <BsArrowUpCircleFill className='w-100' />
      </button>
      <div ref={refHome} className='d-flex flex-column flex-sm-row justify-content-center align-items-center animation-show oculto'>
        <div className="perfil rounded-circle overflow-hidden" style={{ height: "230px", width: "230px" }}>
          <img src={perfil} className='w-100' alt="Leonel Ortiz" />
        </div>
        <div className="d-flex flex-column text-center">
          <h1>{language === 'en' ? 'Hi!' : '¡Hola!'}<br />{language === 'en' ? 'I am Leonel Ortiz' : 'Soy Leonel Ortiz'}</h1>
          <h2 className="text-web">{language === 'en' ? 'Full-Stack Developer' : 'Desarrollador Full-Stack'}</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
