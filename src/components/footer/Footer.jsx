import React from "react";
import "./footer.scss";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Quantum Web Developers
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div id="footer__socials">
        <a
          href="https://www.instagram.com/quantumwebdevs/?igshid=MjAxZDBhZDhlNA%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; QUANTUM WEB DEVS. ALL RIGTHS RESERVED.</small>
      </div>
    </footer>
  );
};

export default Footer;
