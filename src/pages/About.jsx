import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import materialui from '../assets/materialui.png'
import node from '../assets/node.png'
import php from '../assets/php.png'
import laravel from '../assets/laravel.png'
import typescript from '../assets/typescript.png'
import git from '../assets/git.png'
import arg from '../assets/arg.svg'



function About() {
    return (
        <div className="container-fluid body-about d-flex flex-column flex-lg-row justify-content-evenly mx-auto " style={{ marginTop: "130px" }}>
            <div className="col-lg-6 card-blur d-flex flex-column rounded justify-content-center p-3 animation-show ">
                    <h3 className='text-center text-web'>About me</h3>
                    <p className=''>
                    Soy Leonel, un profesional con formación en desarrollo de software y estudiante de ingeniería en sistemas de información en UTN, tengo 23 años y vivo en Tucumán, Argentina. Del lado del frontend he trabajado como diseñador, maquetador y desarrollador, y del lado backend he trabajado principalmente creando API. Estoy para sumar mis conocimientos a un equipo de trabajo y siga desarrollando mis habilidades como profesional.
                    <img src={arg} className='ms-2' style={{height:"25px"}}/>
                    </p>
                    <a className="btn btn-blackgreen d-block ms-auto me-4" href={`https://www.dropbox.com/scl/fi/0zvtv7n5850heu4f1evjv/cv-OrtizCarlosLeonel.pdf?rlkey=i78tbnelpj7wuf2fj23nt2kwc&dl=0`} target='_blank'>Donwload CV</a>
            </div>
            <div className="col-lg-5 card-blur rounded text-center my-4 my-lg-0 p-1 animation-show ">
                <h3 className='text-web'>My skills</h3>
                <div className='row  justify-content-center pointer'>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={html} className='w-50' alt="" />
                        <span className='mt-auto'>HTML</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={css} className='w-50' alt="" />
                        <span className='mt-auto'>CSS</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={javascript} className='w-50' alt="" />
                        <span className='mt-auto'>JAVASCRIPT</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={react} className='w-50' alt="" />
                        <span className='mt-auto'>REACT.JS</span>
                    </div><div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={react} className='w-50' alt="" />
                        <span className='mt-auto'>REACT NATIVE</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={redux} className='w-50' alt="" />
                        <span className='mt-auto'>REDUX</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={bootstrap} className='w-50' alt="" />
                        <span className='mt-auto'>BOOTSTRAP</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={tailwind} className='w-50' alt="" />
                        <span className='mt-auto'>TAILWIND</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={materialui} className='w-50' alt="" />
                        <span className='mt-auto'>MATERIAL UI</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={typescript} className='w-50' alt="" />
                        <span className='mt-auto'>TYPESCRIPT</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center justify-content-center '>
                        <img src={node} className='w-50' alt="" />
                        <span className='mt-auto'>NODE</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={git} className='w-50' alt="" />
                        <span className='mt-auto'>GIT</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={php} className='w-50' alt="" />
                        <span className='mt-auto'>PHP</span>
                    </div>
                    <div className='col-3 skills d-flex flex-column text-center p-2 align-items-center'>
                        <img src={laravel} className='w-50' alt="" />
                        <span className='mt-auto'>LARAVEL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
