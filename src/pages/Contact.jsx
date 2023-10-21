import React from 'react'
import { ImWhatsapp, ImLinkedin, ImGithub} from "react-icons/im";
import { BsSendFill} from "react-icons/bs";
import {useRef,useEffect,useState} from 'react'

function Contact() {

  const refContact = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const ovserver = new IntersectionObserver((e) => {
      if (e[0].isIntersecting == true) e[0].target.classList.add("show");
      else e[0].target.classList.remove("show");
    },{threshold:0.30});
    if (refContact.current) ovserver.observe(refContact.current)
  })


  return (
    <div id='Contact' className='my-auto align-items-center d-flex body-contact'>

      <div ref={refContact} className='m-auto justify-content-center align-items-center d-flex flex-column  p-2 col-11 col-sm-8  card-blur rounded animation-show oculto'>
        <ul className=' p-2'>
          <a href='https://wa.me/543813867770' target='_blank' className='btn text-white text-start'><ImWhatsapp /></a>
          <a href='https://www.linkedin.com/in/leonel-ortiz/' target='_blank' className='btn text-white text-start'><ImLinkedin className='me-1' /></a>
          <a href='https://github.com/leonelortiz41/' target='_blank' className='btn text-white text-start'><ImGithub className='me-1' /></a>
        </ul>
        <form className='col-11 col-md-8 d-flex flex-column  justify-content-center' action="https://formsubmit.co/c.leonelortiz10@gmail.com" method="POST" onSubmit={() => window.location.reload()} >
          <label className='col-sm-8 rounded mb-2 d-flex flex-row p-1 justify-content-center  w-100'>
            <p className='my-auto text-end col-sm-3'>Nombre:</p>
            <input className='p-2  text-white col-sm-8' type="text" name='name' placeholder='Tu Nombre'/>
          </label>
          <label className='col-sm-8 rounded mb-2 d-flex flex-row p-1 justify-content-center  w-100'>
            <p className='my-auto text-end col-sm-3'>Email:</p>
            <input className='p-2  text-white col-sm-8' type="email" name='email' placeholder='email@email.com' />
          </label>
          <label className='col-sm-8 rounded mb-2 d-flex flex-row p-1 justify-content-center  w-100'>
            <p className='my-auto text-end col-sm-3'>Mensaje:</p>
            <textarea className='p-2  text-white col-sm-8 align-bottom overflow-auto' name='message' style={{ height: "100px" }} placeholder='Tu mensaje' />
          </label>
          <button type='submit' className='btn btn-blackgreen d-block mx-auto mt-3'>Enviar</button>
          <input type='hidden' name='_next' value={window.location.href}></input>
          <input type='hidden' name='_captcha' value="false"></input>
        </form>
      </div>
    </div>
  )
}

export default Contact
