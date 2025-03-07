import React, { useRef, useEffect, useState } from 'react';
import { ImWhatsapp, ImLinkedin, ImGithub } from "react-icons/im";
import { BsSendFill } from "react-icons/bs";
import { FaSpinner } from 'react-icons/fa'; // Importar el icono de carga

function Contact() {

  const refContact = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para el botón de carga

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("show");
      } else {
        entries[0].target.classList.remove("show");
      }
    }, { threshold: 0 });

    if (refContact.current) observer.observe(refContact.current);

    return () => {
      if (refContact.current) observer.unobserve(refContact.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Establecer el estado de envío a true
    const form = e.target;
    const formData = new FormData(form);
    
    fetch("https://formsubmit.co/c.leonelortiz10@gmail.com", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        setFormSubmitted(true);
        setIsSubmitting(false); // Restablecer el estado de envío a false
        form.reset();
      } else {
        // Manejar errores aquí
        setIsSubmitting(false); // Restablecer el estado de envío a false en caso de error
      }
    });
  };

  return (
    <div id='Contact' className=' align-items-center d-flex body-contact'>
      <div ref={refContact} className='m-auto justify-content-center align-items-center d-flex flex-column p-2 col-11 col-sm-8 card-blur rounded animation-show oculto'>
        <ul className='p-2'>
          <a href='https://wa.me/543813867770' target='_blank' className='btn text-white text-start'><ImWhatsapp /></a>
          <a href='https://www.linkedin.com/in/leonel-ortiz/' target='_blank' className='btn text-white text-start'><ImLinkedin className='me-1' /></a>
          <a href='https://github.com/leonelortiz41/' target='_blank' className='btn text-white text-start'><ImGithub className='me-1' /></a>
        </ul>
        <form className='col-11 col-md-8 d-flex flex-column justify-content-center' onSubmit={handleSubmit}>
          <label className='col-sm-8 rounded mb-2 d-flex flex-row p-1 justify-content-center w-100'>
            <p className='my-auto text-end col-sm-3'>Name:</p>
            <input className='p-2 text-white col-sm-8' type="text" name='name' placeholder='Tu Nombre' required />
          </label>
          <label className='col-sm-8 rounded mb-2 d-flex flex-row p-1 justify-content-center w-100'>
            <p className='my-auto text-end col-sm-3'>Email:</p>
            <input className='p-2 text-white col-sm-8' type="email" name='email' placeholder='email@email.com' required />
          </label>
          <label className='col-sm-8 rounded mb-2 d-flex flex-row p-1 justify-content-center w-100'>
            <p className='my-auto text-end col-sm-3'>Message:</p>
            <textarea className='p-2 text-white col-sm-8 align-bottom overflow-auto' name='message' style={{ height: "100px" }} placeholder='Tu mensaje' required />
          </label>
          <button type='submit' className='btn btn-blackgreen d-block mx-auto mt-3' disabled={isSubmitting}>
            {isSubmitting ? <FaSpinner className='spinner' /> : 'Enviar'}
          </button>
          <input type='hidden' name='_next' value={window.location.href}></input>
          <input type='hidden' name='_captcha' value="false"></input>
        </form>
        {formSubmitted && <div className='mt-3 alert alert-success' role='alert'>Sent successly!</div>}
      </div>
    </div>
  );
}

export default Contact;
