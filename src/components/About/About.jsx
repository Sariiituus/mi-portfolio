import React from "react";
import "./About.css";

const About = (props) => {
  const { education, langs, skills } = props;

  return (
    <div className='cointainer-principal'>
      <div>
        <h3>Educación:</h3>
        <ul>
          {education.map((item) => {
            return (
              <li key={item}>
                Titulo: {item.name} - Fecha: {item.date} - Lugar: {item.where}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h3>Idiomas:</h3>
        <ul>
          {langs.map((lang) => {
            return (
              <li key={lang}>
                {lang.language} - {lang.level}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h3>Skills:</h3>
        <ul>
          {skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
