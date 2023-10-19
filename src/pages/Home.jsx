import perfil from '../assets/perfil7.webp'
import { useEffect, useState, useRef } from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'

function Home() {

    const refHome = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const ovserver = new IntersectionObserver((e) => {
            if (e[0].isIntersecting == true) e[0].target.classList.add("show");
            else e[0].target.classList.remove("show");
        },{threshold:0.25});
        if (refHome.current) ovserver.observe(refHome.current)
    })
    const subir = useRef(null)
    const [isSubir, setIsSubir] = useState(false)
    window.onscroll = function () {
        if (window.scrollY > 400)
            subir.current.classList.add("show-sub")
        else
            subir.current.classList.remove("show-sub")
    };

    return (
        <div id='Home' className={" body-home  justify-content-center d-flex align-items-center "}>
            <button ref={subir} className='subir d-flex justify-content-center p-0 align-items-center oculto animation-subir' onClick={()=>{
                window.location.href="#"
            }}>
                <BsArrowUpCircleFill className='w-100' />
            </button>
            <div ref={refHome} className='d-flex flex-column flex-sm-row  justify-content-center align-items-center animation-show oculto'>
                <div className="d-flex flex-column text-end">
                    <h1>Hola!<br></br>Soy Leonel Ortiz</h1>
                    <h2 className="text-web" >Desarrollador Full-Stack</h2>
                </div>
                <div className="perfil rounded-circle ms-3 overflow-hidden" style={{ height: "230px", width: "230px" }}>
                    <img src={perfil} className='w-100' />
                </div>
            </div>
        </div>
    )
}

export default Home
