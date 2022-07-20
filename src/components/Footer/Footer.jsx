import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>©Copyright 2022</h2>
      </div>
      <div className="social-network">
        <a href="https://www.linkedin.com/in/sararodriguezhernandez/">
          <img
            src="./assets/linkedin-brands.svg"
            alt="linkedin-icon"
            className="icon-linkedin"
          />
        </a>
        <a href="https://github.com/Sariiituus">
          <img
            src="./assets/github-brands.svg"
            alt="linkedin-github"
            className="icon-github"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer;