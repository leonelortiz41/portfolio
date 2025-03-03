import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import bootstrap from '../assets/bootstrap.png'
import vue from '../assets/vue.png'
import tailwind from '../assets/tailwind.png'
import materialui from '../assets/materialui.png'
import node from '../assets/node.png'
import php from '../assets/php.png'
import cv from '../assets/cv-OrtizCarlosLeonel.pdf'
import laravel from '../assets/laravel.png'
import typescript from '../assets/typescript.png'
import git from '../assets/git.png'
import arg from '../assets/arg.svg'
import { useEffect, useRef, useState } from 'react'
import Marquee from "react-fast-marquee";

function About() {

    const refAbout = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [screenWidth, setScreenW] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add("show")
            } else {
                entries[0].target.classList.remove("show")
            }
        }, { threshold: 0});

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
    }, [])

    const Skill = ({ icon, label }) => (
        <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
            <img src={icon} style={{ maxWidth: "40px" }} alt="" />
            <span className='mt-auto' style={{ fontSize: "10px" }}>{label}</span>
        </div>
    );

    return (
        <div id='About' className='body-about container d-flex m-auto align-items-center '>
            <div ref={refAbout} className="m-auto col-md-9 card-blur rounded d-flex flex-column align-items-center justify-content-evenly oculto">
                <div className="d-flex flex-column rounded justify-content-center p-3 animation-show">
                    <h3 className='text-center h1 text-web'>About me</h3>
                    <p className=''>
                        Hello!

                        My name is Leonel Ortiz, and I am a dedicated Full-Stack Developer specializing in the MERN stack. With a passion for creating interactive, user-friendly web experiences, I bring a keen attention to detail and a drive for excellence to every project I work on. I am committed to continuous learning and staying current with the latest industry trends and technologies. My goal is to transform innovative ideas into reality, providing seamless and efficient solutions for my clients.
                    </p>
                    <a className="btn btn-blackgreen d-block ms-auto me-4" href={cv} download="cv-ortiz.pdf">Download CV</a>
                </div>
                <div className="col-md-7 rounded text-center my-4 my-lg-0 p-1 animation-show overflow-hidden">
                    <h3 className='text-web h1'>Skills</h3>
                    {screenWidth}
                </div>
            </div>
        </div>
    )
}

export default About
