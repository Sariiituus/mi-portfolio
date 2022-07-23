import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='contact-headings'>
        <h2>Contáctame</h2>
      </div>

      <div className='container-contact'>
        <div className='container-img-form'>
          <img src='/assets/Contacto.jpg' alt='Contacto' className='img-form' />
        </div>
        <div className='contact-form'>
          <h4>Rellena los datos</h4>
          <form className='form'>
            <input type='text' placeholder='Nombre' />
            <input type='email' placeholder='Email' />
            <textarea rows="4" cols="50" placeholder='Escribe tu mensaje aquí'></textarea>
            <button type='submit' className='btn-submit'>
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
