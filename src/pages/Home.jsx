import perfil from '../assets/perfil4.png'
function Home() {
    const x=true;
    let animation= x==true?"animation-show":"animation-out";
    return (
        <div className={"container-fluid body-home  d-flex flex-column flex-sm-row  justify-content-center align-items-center py-3 m-auto h-100 w-100 "+ animation}>
            <div className="d-flex flex-column text-end">
                <h1>Hola!<br></br>Soy Leonel Ortiz</h1>
                <h2 className="text-web" >developer</h2>
            </div>
            <div className="perfil rounded-circle ms-3 overflow-hidden" style={{ height: "230px", width: "230px" }}>
                <img src={perfil} className='w-100'/>
            </div>
        </div>
    )
}

export default Home
