import React, { useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mitienda from '../assets/mitiendascreen.png';
import barlpdemo from '../assets/barlpdemo.png';
import ligadefut from '../assets/ligadefut.png';
import cirobarber from '../assets/cirobarber.png';
import '../App.css';

function Projects({ language }) {
    const refProjects = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add('show');
            } else {
                entries[0].target.classList.remove('show');
            }
        }, { threshold: 0 });

        if (refProjects.current) observer.observe(refProjects.current);

        return () => {
            if (refProjects.current) observer.unobserve(refProjects.current);
        };
    }, []);

    const projects = [
        {
            image: mitienda,
            link: "https://tiendami.netlify.app",
        },
        {
            image: ligadefut,
            link: "https://ligafutbol.vercel.app/",
        },
        {
            image: barlpdemo,
            link: "https://barlp-demo.netlify.app",
        },
        {
            image: cirobarber,
            link: "https://cirobarber.netlify.app/",
        }
    ];

    return (
        <div id='Projects' className='body-projects container d-flex align-items-center m-auto'>
            <div ref={refProjects} className='container mb-5 text-center mx-auto animation-show oculto'>
                <h2 className='text-web'>{language === 'en' ? 'Projects' : 'Proyectos'}</h2>
                <Carousel className='carousel' interval={null}>
                    {projects.map((project, index) => (
                        <Carousel.Item key={index} className='carousel-item'>
                            <ProjectCard {...project} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

function ProjectCard({ image, title, description, link }) {
    return (
        <div className="card card-blur animation-show shadow-sm col- uniform-card-size">
            <div className="d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                <a href={link} target='_blank' className="btn mx-auto btn-blackgreen">
                    <img src={image} className="card-img-top" alt={title} />
                </a>
                <div className="mt-2 text-center">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
