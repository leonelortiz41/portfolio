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
        const ovserver = new IntersectionObserver((e) => {
            if (e[0].isIntersecting == true) e[0].target.classList.add("show");
            else e[0].target.classList.remove("show");
        }, { threshold: 0.25 });
        if (refAbout.current) ovserver.observe(refAbout.current);
        if (innerWidth > 900) {
            setScreenW(<Marquee className='marquee'>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={html} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >HTML</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={css} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >CSS</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={javascript} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >JAVASCRIPT</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={react} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >REACT.JS</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={redux} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >REDUX</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={bootstrap} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >BOOTSTRAP</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={tailwind} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >TAILWIND</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={materialui} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >MATERIAL UI</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={typescript} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >TYPESCRIPT</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center justify-content-center '>
                    <img src={node} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >NODE</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={git} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >GIT</span>
                </div>
            </Marquee>)
        }
        else {
            setScreenW(<div className='marquee-2'>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={html} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >HTML</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={css} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >CSS</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={javascript} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >JAVASCRIPT</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={react} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >REACT.JS</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={redux} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >REDUX</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={bootstrap} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >BOOTSTRAP</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={tailwind} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >TAILWIND</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={materialui} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >MATERIAL UI</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={typescript} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >TYPESCRIPT</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center justify-content-center '>
                    <img src={node} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >NODE</span>
                </div>
                <div className='col- skills d-flex flex-column text-center p-2 align-items-center'>
                    <img src={git} style={{ maxWidth: "40px" }} alt="" />
                    <span className='mt-auto' style={{ fontSize: "10px" }} >GIT</span>
                </div>
            </div>)
        }
    },[])


    return (
        <div id='About' className='body-about container d-flex m-auto align-items-center ' >
            <div ref={refAbout} className=" m-auto col-md-9 card-blur rounded  d-flex flex-column align-items-center justify-content-evenly oculto">
                <div className="  d-flex flex-column rounded justify-content-center p-3 animation-show ">
                    <h3 className='text-center h1 text-web'>Sobre mi</h3>
                    <p className=''>
                        Mi nombre es Leonel, soy desarrollador web especializado en MERN. Mi foco esta en que las experiencias web sean funcionales e interactivas estando atento al detalle. Estoy preparado para darle vida al proyecto digital que tienes en mente.
                    </p>
                    {/* <a  href={`https://www.dropbox.com/scl/fi/n7sb3a6jqz5rcn5jxrtnk/cv-OrtizCarlosLeonel.pdf?rlkey=a4cjv4xhezsncmhqtbqkswxzm&dl=0`} target='_blank'>Descargar CV</a> */}
                    <a className="btn btn-blackgreen d-block ms-auto me-4" href={cv} download="cv-ortiz.pdf">Download CV</a>
                </div>
                <div className="col-md-7  rounded text-center my-4 my-lg-0 p-1 animation-show overflow-hidden ">
                    <h3 className='text-web h1'>Habilidades</h3>
                    {screenWidth}
                    {/* <Marquee className='marquee' speed={40}>




                    </Marquee> */}
                </div>
            </div>
        </div>
    )
}

export default About
