import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import About from "./components/Hero/About/About";
import Education from "./components/Hero/Education/Education";
import Experience from "./components/Hero/Experience/Experience";
import More from "./components/Hero/More/More";
import { CV } from "./CV/CV";


const { hero, education, experience, languages, habilities } = CV;

function App() {
  return (
    <div className='App'>
      <Hero hero={hero} />
      <About hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      <More languages={languages} habilities={habilities} />
    </div>
  );
}

export default App;
