import storeip from '../assets/storeip.png'
import barlpdemo from '../assets/barlpdemo.png'

function Projects() {
    return (
        <div className="container-fluid text-center mx-auto animation-show" style={{ marginTop: "130px"}}>
            <h2>My projects:</h2>
            <div className='row p-2 rounded mx-auto justify-content-center container-fluid '>

                <div className="card d-flex pb-1 h-100 m-1  shadow-sm col-" style={{maxWidth:"400px"}}>
                    <img src={storeip} className="card-img-top" />
                    <div className=" d-flex flex-column">
                        <h5 className="card-title m-auto text-center">Store Iphone (demo)</h5>
                        <p className="card-text">demo de un e-commerce. Para navegar mejor puede usar los siguientes usuarios demo: [user: pili, password: 1234], [user: leo, password: 1234].</p>
                        <a href="https://storeip.netlify.app" target='_blank' className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>
                <div className="card d-flex pb-1 h-100 m-1  shadow-sm col-" style={{maxWidth:"400px"}}>
                    <img src={barlpdemo} className="card-img-top" />
                    <div className=" d-flex flex-column">
                        <h5 className="card-title m-auto text-center">punto de venta (demo)</h5>
                        <p className="card-text">demo de un punto de venta que se esta utilizando en un bar, en esta demo no podran ser utilizadas algunas funciones.</p>
                        <a href="https://barlp-demo.netlify.app"  target='_blank'className="btn mx-auto btn-blackgreen">Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects