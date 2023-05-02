import React from 'react'
import { ImWhatsapp, ImLinkedin } from "react-icons/im";


function Contact() {
  return (
    <div className='justify-content-center align-items-center d-flex flex-column flex-lg-row p-2 col-11 col-sm-8 m-auto body-contact card-blur rounded animation-show'>
      <ul className='col- d-flex flex-column p-2'>
        <a href='https://wa.me/543813867770' target='_blank' className='btn text-white text-start'><ImWhatsapp />+54 3813687770</a>
        <a href='https://www.linkedin.com/in/leonel-ortiz/' target='_blank' className='btn text-white text-start'><ImLinkedin className='me-1' /> leonel-ortiz</a>
      </ul>
      <form className='col-11 col-md-8 d-flex flex-column  justify-content-center' action="https://formsubmit.co/c.leonelortiz10@gmail.com" method="POST" onSubmit={()=> window.location.reload()} >
        <label className='col-sm-8 rounded mb-2 d-flex flex-row p-1 justify-content-center  w-100'>
          <p className='my-auto text-end col-sm-3'>Name:</p>
          <input className='p-2  text-white col-sm-8' type="text" name='name' placeholder='Your name' />
        </label>
        <label className='col-sm-8 rounded mb-2 d-flex flex-row p-1 justify-content-center  w-100'>
          <p className='my-auto text-end col-sm-3'>Email:</p>
          <input className='p-2  text-white col-sm-8' type="email" name='email' placeholder='email@email.com' />
        </label>
        <label className='col-sm-8 rounded mb-2 d-flex flex-row p-1 justify-content-center  w-100'>
          <p className='my-auto text-end col-sm-3'>Message:</p>
          <textarea className='p-2  text-white col-sm-8 align-bottom overflow-auto' name='message' style={{ height: "100px" }} placeholder='your message' />
        </label>
        <button type='submit' className='btn btn-blackgreen d-block mx-auto mt-3'>Send</button>
        <input type='hidden' name='_next' value={window.location.href}></input>
        <input type='hidden' name='_captcha' value="false"></input>
      </form>
    </div>
  )
}

export default Contact
