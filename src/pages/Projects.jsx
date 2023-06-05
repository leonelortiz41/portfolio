import storeip from '../assets/storeip.png'
import barlpdemo from '../assets/barlpdemo.png'
import notes from '../assets/notes.png'
import dromo from '../assets/dromo.png'
import cirobarber from '../assets/cirobarber.png'

function Projects() {
    return (
        <div className="container-fluid text-center mx-auto animation-show" style={{ marginTop: "130px" }}>
            <h2>My projects:</h2>
            <div className='row p-2 rounded mx-auto justify-content-center container-fluid '>
                <div className="card d-flex pb-1  m-1 justify-content-between card-blur text-white p-0 animation-show animation-show shadow-sm col-" style={{ maxWidth: "400px" }}>
                    <img src={storeip} className="card-img-top" />
                    <div className=" d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                        <div>
                            <h5 className="card-title m-auto text-center">Store Iphone (demo)</h5>
                            <p className="card-text">demo de un e-commerce. Para navegar mejor puede usar los siguientes usuarios demo: [user: pili, password: 1234], [user: leo, password: 1234].</p>
                        </div>
                        <a href="https://storeip.netlify.app" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>
                <div className="card d-flex pb-1  m-1 justify-content-between card-blur text-white p-0 animation-show animation-show shadow-sm col-" style={{ maxWidth: "400px" }}>
                    <img src={barlpdemo} className="card-img-top" />
                    <div className=" d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                        <div>
                            <h5 className="card-title m-auto text-center">punto de venta (demo)</h5>
                            <p className="card-text">demo de un punto de venta que se esta utilizando en un bar, en esta demo no podran ser utilizadas algunas funciones.</p>
                        </div>
                        <a href="https://barlp-demo.netlify.app" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>
                <div className="card d-flex pb-1  m-1 justify-content-between card-blur text-white p-0 animation-show animation-show shadow-sm col-" style={{ maxWidth: "400px" }}>
                    <img src={notes} className="card-img-top" />
                    <div className=" d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                        <div>
                            <h5 className="card-title m-auto text-center">notes</h5>
                            <p className="card-text">registro de notas.</p>
                        </div>
                        <a href="https://notes41.netlify.app/" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>
                <div className="card d-flex pb-1  m-1 justify-content-between card-blur text-white p-0 animation-show animation-show shadow-sm col-" style={{ maxWidth: "400px" }}>
                    <img src={dromo} className="card-img-top" />
                    <div className=" d-flex flex-column p-2 justify-content-center mt-auto h-100 justify-content-between">
                        <div>
                            <h5 className="card-title m-auto text-center">DROMO GYM</h5>
                            <p className="card-text">Administrador de datos y rutinas de un gimnacio.</p>
                        </div>
                        <a href="https://dromo.netlify.app/" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>
                <div className="card d-flex pb-1  m-1 justify-content-between card-blur text-white p-0 animation-show animation-show shadow-sm col-" style={{ maxWidth: "400px" }}>
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
    )
}

export default Projects
