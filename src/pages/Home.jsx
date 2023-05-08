import perfil from '../assets/perfil4.png'
function Home() {
    return (
        <div className="container-fluid body-home  d-flex flex-column flex-sm-row  justify-content-center align-items-center py-3 m-auto h-100 w-100 animation-show">
            <div className="d-flex flex-column text-end">
                <h1>Hi!<br></br>I'm Leonel Ortiz</h1>
                <h2 className="text-web" >Web developer</h2>
            </div>
            <div className="perfil rounded-circle ms-3 overflow-hidden" style={{ height: "230px", width: "230px" }}>
                <img src={perfil} className='w-100'/>
            </div>
        </div>
    )
}

export default Home
