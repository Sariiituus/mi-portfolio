import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <main className='main'>
      <div className='principal'>
        <h1>
          {props.info.name} {props.info.surnames}
        </h1>
        <h2> {props.info.profession}</h2>
        <p> {props.info.city}</p>
  
        <div>
          <a className='github' href={props.info.gitHub} target='_blank'>
            Perfil de Github
          </a>
          <a className='linkedin' href={props.info.linkedin} target='_blank'>
            Perfil de LinkedIn
          </a>
        </div>
        <a download href='CV-SARA-RH.pdf'>
          <button class='dowload-cv'>Descargar CV</button>
        </a>
        <div>
          <img src='/assets/Foto-perfil.JPG' className='img-perfil' />
        </div>
      </div>
    </main>
  );
};

export default Home;
