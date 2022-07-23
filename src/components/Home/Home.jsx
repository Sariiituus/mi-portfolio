import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div className='main'>
      <div className='info-content'>
        <h1>
          {props.info.name} {props.info.surnames}
        </h1>
        <h2> {props.info.profession}</h2>
        <div className='social-network'>
          <a className='github' href={props.info.gitHub} target='_blank'>
            <img
              src='./assets/github-brands.svg'
              alt='linkedin-github'
              class='icon-github'
            />
          </a>
          <a className='linkedin' href={props.info.linkedin} target='_blank'>
            <img
              src='./assets/linkedin-brands.svg'
              alt='linkedin-github'
              class='icon-linkedin'
            />
          </a>
        </div>
        <div className="container-btn-download">
          <a className="dowload-cv" download href='/assets/CV-SARA-RH.pdf' role="button">
          Descargar CV
          </a>
        </div>
      </div>
      <div className='profile-picture'>
        <img src='/assets/Foto-perfil.png' className='img-perfil' alt='imagen de perfil'/>
      </div>
    </div>
  );
};

export default Home;
