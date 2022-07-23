import React from "react";
import "./About.css";

const About = (props) => {
  const { education, experience, langs, skills } = props;

  return (
    <div className='cointainer-principal'>
      <article>
        <header>Educación</header>
        <table>
          <thead>
            <tr>
              <th scope='col'>Fecha</th>
              <th scope='col'>Título</th>
              <th scope='col'>Lugar</th>
            </tr>
          </thead>
          <tbody>
            {education.map((item) => {
              return (
                <tr key={item}>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.where}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>

      <div>
        <article>
          <header>Experiencia</header>
          <table>
            <thead>
              <tr>
                <th scope='col'>Fecha</th>
                <th scope='col'>Título</th>
                <th scope='col'>Lugar</th>
              </tr>
            </thead>
            <tbody>
              {experience.map((item) => {
                return (
                  <tr key={item}>
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.where}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </div>

      <div>
        <article>
          <header>Idiomas</header>
          <table>
            <thead>
              <tr>
                <th scope='col'>Idioma</th>
                <th scope='col'>Nivel</th>
              </tr>
            </thead>
            <tbody>
              {langs.map((langs) => {
                return (
                  <tr key={langs}>
                    <td>{langs.language}</td>
                    <td>{langs.level}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>

        <div>
          <article>
            <header>Skills</header>
            <table>
              <tbody>
                {skills.map((skill) => {
                  return <tr key={skill}>{skill}</tr>;
                })}
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
