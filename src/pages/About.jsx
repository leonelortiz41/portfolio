import React, { useEffect, useRef, useState } from 'react';
import Marquee from "react-fast-marquee";
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import bootstrap from '../assets/bootstrap.png';
import tailwind from '../assets/tailwind.png';
import materialui from '../assets/materialui.png';
import node from '../assets/node.png';
import typescript from '../assets/typescript.png';
import git from '../assets/git.png';
import cv from '../assets/Ortiz_Carlos_Leonel_CV.pdf';

function About({ language }) {
    const refAbout = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [screenWidth, setScreenW] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add("show");
            } else {
                entries[0].target.classList.remove("show");
            }
        }, { threshold: 0 });

        if (refAbout.current) observer.observe(refAbout.current);

        if (window.innerWidth > 900) {
            setScreenW(
                <Marquee className='marquee'>
                    <Skill icon={html} label="HTML" />
                    <Skill icon={css} label="CSS" />
                    <Skill icon={javascript} label="JAVASCRIPT" />
                    <Skill icon={react} label="REACT.JS" />
                    <Skill icon={redux} label="REDUX" />
                    <Skill icon={bootstrap} label="BOOTSTRAP" />
                    <Skill icon={tailwind} label="TAILWIND" />
                    <Skill icon={materialui} label="MATERIAL UI" />
                    <Skill icon={typescript} label="TYPESCRIPT" />
                    <Skill icon={node} label="NODE" />
                    <Skill icon={git} label="GIT" />
                </Marquee>
            )
        } else {
            setScreenW(
                <div className='marquee-2'>
                    <Skill icon={html} label="HTML" />
                    <Skill icon={css} label="CSS" />
                    <Skill icon={javascript} label="JAVASCRIPT" />
                    <Skill icon={react} label="REACT.JS" />
                    <Skill icon={redux} label="REDUX" />
                    <Skill icon={bootstrap} label="BOOTSTRAP" />
                    <Skill icon={tailwind} label="TAILWIND" />
                    <Skill icon={materialui} label="MATERIAL UI" />
                    <Skill icon={typescript} label="TYPESCRIPT" />
                    <Skill icon={node} label="NODE" />
                    <Skill icon={git} label="GIT" />
                </div>
            )
        }
    }, []);

    const Skill = ({ icon, label }) => (
        <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
            <img src={icon} style={{ maxWidth: "40px" }} alt={label} />
            <span className='mt-auto' style={{ fontSize: "10px" }}>{label}</span>
        </div>
    );

    return (
        <div id='About' className='body-about container d-flex m-auto align-items-center '>
            <div ref={refAbout} className="m-auto col-md-9 card-blur rounded d-flex flex-column align-items-center justify-content-evenly oculto">
                <div className="d-flex flex-column rounded justify-content-center p-3 animation-show">
                    <h3 className='text-center h1 text-web'>{language === 'en' ? 'About me' : 'Sobre mí'}</h3>
                    <p className=''>
                        {language === 'en' ?
                            `Hello!
My name is Leonel Ortiz, and I am an aspiring developer specializing in the MERN stack. I have dedicated countless hours to mastering web development through personal projects, online courses, and independent learning. My passion lies in creating interactive and user-friendly applications that provide seamless experiences.
Through self-initiated projects, I have honed my skills in designing efficient, scalable solutions and keeping up-to-date with the latest industry trends and technologies. As a driven individual committed to continuous learning, I am ready to bring creativity and technical expertise to your team` :
                            `¡Hola!
Mi nombre es Leonel Ortiz, y soy un desarrollador en crecimiento, especializado en el stack MERN. He dedicado innumerables horas a perfeccionar mis habilidades en desarrollo web mediante proyectos personales, cursos en línea y aprendizaje autodidacta. Mi pasión es crear aplicaciones interactivas y fáciles de usar que ofrezcan experiencias fluidas.
A través de proyectos propios, he desarrollado habilidades para diseñar soluciones eficientes y escalables, además de mantenerme actualizado con las últimas tendencias y tecnologías de la industria. Como una persona comprometida con el aprendizaje continuo, estoy listo para aportar creatividad y conocimientos técnicos a tu equipo.`
                        }
                    </p>
                    <a className="btn btn-blackgreen d-block ms-auto me-4" href={cv} download="cv-ortiz.pdf">{language === 'en' ? 'Download CV' : 'Descargar CV'}</a>
                </div>
                <div className="col-md-7 rounded text-center my-4 my-lg-0 p-1 animation-show overflow-hidden">
                    <h3 className='text-web h1'>{language === 'en' ? 'Skills' : 'Habilidades'}</h3>
                    {screenWidth}
                </div>
            </div>
        </div>
    )
}

export default About;
