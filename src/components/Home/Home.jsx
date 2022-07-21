import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <main className='main'>
      <div className='info-content'>
        <h1>
          {props.info.name} {props.info.surnames}
        </h1>
        <h2> {props.info.profession}</h2>
        <div className="social-network">
          <a className='github' href={props.info.gitHub} target="_blank">
            <img
              src='./assets/github-brands.svg'
              alt='linkedin-github'
              class='icon-github'
            />
          </a>
          <a className='linkedin' href={props.info.linkedin} target="_blank">
            <img
              src='./assets/linkedin-brands.svg'
              alt='linkedin-github'
              class='icon-linkedin'
            />
          </a>
        </div>
        <a download href='CV-SARA-RH.pdf'>
          <button class='dowload-cv'>Descargar CV</button>
        </a>
        <div className='profile-picture'>
          <img src='/assets/Foto-perfil.png' className='img-perfil' />
        </div>
      </div>
    </main>
  );
};

export default Home;
