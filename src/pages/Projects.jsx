import storeip from '../assets/storeip.png'
import barlpdemo from '../assets/barlpdemo.png'
import notes from '../assets/notes.png'
import dromo from '../assets/dromo.png'
import cirobarber from '../assets/cirobarber.png'
import ligadefut from '../assets/ligadefut.webp'
import {useEffect,useState,useRef} from 'react'

function Projects() {

    const refProjects = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const ovserver = new IntersectionObserver((e) => {
            if (e[0].isIntersecting == true) e[0].target.classList.add("show");
            else e[0].target.classList.remove("show");},{threshold:0.25});
        if (refProjects.current) ovserver.observe(refProjects.current)
    })

    return (
        <div id='Projects' className='body-projects container d-flex align-items-center m-auto'>

        <div ref={refProjects} className="container mb-5 text-center mx-auto  animation-show oculto" >
            <h2 className='text-web'>My projects:</h2>
            <div className=' rounded  container-projects col-md-9'>
                <div className="card d-flex  card-blur text-white p-0 animation-show  shadow-sm col-" >
                    <img src={storeip} className="card-img-top" />
                    <div className=" d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                        <div>
                            <h5 className="card-title m-auto text-center">Store Iphone (demo)</h5>
                            <p className="card-text">demo de un e-commerce. Para navegar mejor puede usar los siguientes usuarios demo: [user: pili, password: 1234], [user: leo, password: 1234].</p>
                        </div>
                        <a href="https://storeip.netlify.app" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>
                <div className="card d-flex    card-blur text-white p-0 animation-show  shadow-sm col-" >
                    <img src={ligadefut} className="card-img-top" />
                    <div className=" d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                        <div>
                            <h5 className="card-title m-auto text-center">Liga de futbol</h5>
                            <p className="card-text">Organizador de torneo de futbol que gestiona un fixture y la tabla de posiciones.</p>
                        </div>
                        <a href="https://ligafutbol.vercel.app/" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>

                <div className="card d-flex    card-blur text-white p-0 animation-show shadow-sm col-" >
                    <img src={barlpdemo} className="card-img-top" />
                    <div className=" d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                        <div>
                            <h5 className="card-title m-auto text-center">punto de venta (demo)</h5>
                            <p className="card-text">demo de un punto de venta que se esta utilizando en un bar, en esta demo no podran ser utilizadas algunas funciones.</p>
                        </div>
                        <a href="https://barlp-demo.netlify.app" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>
                {/*
                <div className="card d-flex    card-blur text-white p-0 animation-show shadow-sm col-" >
                    <img src={notes} className="card-img-top" />
                    <div className=" d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                        <div>
                            <h5 className="card-title m-auto text-center">notes</h5>
                            <p className="card-text">registro de notas.</p>
                        </div>
                        <a href="https://notes41.netlify.app/" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>
                 */}
                <div className="card d-flex    card-blur text-white p-0 animation-show shadow-sm col-" >
                    <img src={cirobarber} className="card-img-top" />
                    <div className=" d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                        <div>
                            <h5 className="card-title m-auto text-center">CIRO BARBER</h5>
                            <p className="card-text">Website para reservar turnos a un salon de barberia.</p>
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
