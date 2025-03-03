import storeip from '../assets/storeip.png'
import barlpdemo from '../assets/barlpdemo.png'
import notes from '../assets/notes.png'
import dromo from '../assets/dromo.png'
import cirobarber from '../assets/cirobarber.png'
import ligadefut from '../assets/ligadefut.webp'
import { useEffect, useState, useRef } from 'react'

function Projects() {

    const refProjects = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add("show");
            } else {
                entries[0].target.classList.remove("show");
            }
        }, { threshold: 0});

        if (refProjects.current) observer.observe(refProjects.current);

        return () => {
            if (refProjects.current) observer.unobserve(refProjects.current);
        };
    }, []);

    return (
        <div id='Projects' className='body-projects container d-flex align-items-center m-auto'>
            <div ref={refProjects} className="container mb-5 text-center mx-auto animation-show oculto">
                <h2 className='text-web'>Projects:</h2>
                <div className='rounded container-projects col-md-9'>
                    <div className="card d-flex card-blur text-white p-0 animation-show shadow-sm col-">
                        <img src={storeip} className="card-img-top" alt="Store Iphone demo" />
                        <div className="d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                            <div>
                                <h5 className="card-title m-auto text-center">Store Iphone (demo)</h5>
                                <p className="card-text">Demo de un e-commerce. Para navegar mejor puede usar los siguientes usuarios demo: [user: pili, password: 1234], [user: leo, password: 1234].</p>
                            </div>
                            <a href="https://storeip.netlify.app" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                        </div>
                    </div>
                    <div className="card d-flex card-blur text-white p-0 animation-show shadow-sm col-">
                        <img src={ligadefut} className="card-img-top" alt="Liga de futbol" />
                        <div className="d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                            <div>
                                <h5 className="card-title m-auto text-center">Liga de futbol</h5>
                                <p className="card-text">Organizador de torneo de futbol que gestiona un fixture y la tabla de posiciones.</p>
                            </div>
                            <a href="https://ligafutbol.vercel.app/" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                        </div>
                    </div>
                    <div className="card d-flex card-blur text-white p-0 animation-show shadow-sm col-">
                        <img src={barlpdemo} className="card-img-top" alt="Punto de venta demo" />
                        <div className="d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                            <div>
                                <h5 className="card-title m-auto text-center">Punto de venta (demo)</h5>
                                <p className="card-text">Demo de un punto de venta que se está utilizando en un bar. En esta demo no podrán ser utilizadas algunas funciones.</p>
                            </div>
                            <a href="https://barlp-demo.netlify.app" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                        </div>
                    </div>
                    <div className="card d-flex card-blur text-white p-0 animation-show shadow-sm col-">
                        <img src={cirobarber} className="card-img-top" alt="CIRO BARBER" />
                        <div className="d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                            <div>
                                <h5 className="card-title m-auto text-center">CIRO BARBER</h5>
                                <p className="card-text">Website para reservar turnos a un salón de barbería.</p>
                            </div>
                            <a href="https://cirobarber.netlify.app/" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
