import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="conctact-headings">
        <h2>Contáctame</h2>
        <div className="divider"></div>
      </div>
      <div className="container-contact">
        <img
          src="/assets/Contacto.jpg"
          alt="Contacto"
          className="img-form"
        />
        <div className="contact-form">
          <h4>Rellena los datos</h4>
          <form className="form">
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Escribe tu mensaje aquí"> </textarea>
            <button type="submit" className="btn-submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact