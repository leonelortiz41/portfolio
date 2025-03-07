import React, { useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mitienda from '../assets/mitiendascreen.png';
import barlpdemo from '../assets/barlpdemo.png';
import ligadefut from '../assets/ligadefut.png';
import cirobarber from '../assets/cirobarber.png';
import '../App.css';

function Projects() {
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
            title: "My Store",
            description: "An e-commerce platform.",
            link: "https://tiendami.netlify.app",
        },
        {
            image: ligadefut,
            title: "Football League",
            description: "A football tournament organizer that manages fixtures and the league table.",
            link: "https://ligafutbol.vercel.app/",
        },
        {
            image: barlpdemo,
            title: "Point of Sale (Demo)",
            description: "A demo of a point of sale system currently used in a bar. Some features may not be available in this demo.",
            link: "https://barlp-demo.netlify.app",
        },
        {
            image: cirobarber,
            title: "CIRO BARBER",
            description: "A website for booking appointments at a barber shop.",
            link: "https://cirobarber.netlify.app/",
        }
    ];

    return (
        <div id='Projects' className='body-projects container d-flex align-items-center m-auto'>
            <div ref={refProjects} className='container mb-5 text-center mx-auto animation-show oculto'>
                <h2 className='text-web'>Projects:</h2>
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
                <a href={link} target='_blank' className="btn mx-auto btn-blackgreen">Ver</a>
            </div>
            <img src={image} className="card-img-top" alt={title} />
        </div>
    );
}

export default Projects;
