import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { CV } from "./CV/CV";

// import Footer from "./components/Footer/Footer";

const { hero, education, experience, languages, skills } = CV;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").removeAttribute("data-theme");
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").removeAttribute("data-theme");
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <div className='App'>
      <Router>
        <header>
          <nav className='navbar'>
            <ul className='menu'>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/about'>Acerca de</Link>
              </li>
              <li>
                <Link to='/contact'>Contacto</Link>
              </li>
                <li>
                  <button
                    onClick={() => {
                      setDarkMode(true);
                    }}
                  >
                    🌙
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setDarkMode(false);
                    }}
                  >
                    🌞
                  </button>
                </li>
            </ul>
          </nav>
        </header>

        <main className='container'>
          <Routes>
            <Route path='/' element={<Home info={hero} />} />
            <Route
              path='/about'
              element={
                <About
                  education={education}
                  experience={experience}
                  langs={languages}
                  skills={skills}
                />
              }
            />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
