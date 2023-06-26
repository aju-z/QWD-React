import React from "react";
import "./header.scss";
import CTA from "./CTA";
import Hero from "../../assets/Hero.svg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello We Are</h5>
        <h1>Quantum Web Devs</h1>
        <h5 className="text-light">
          Get your dream website developed by our expert team!
        </h5>
        <CTA />

        <div className="header__img">
          <img src={Hero} alt="HeroImage" className="header__hero-img" />
        </div>
      </div>

      <a href="#contact" className="scroll-down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
