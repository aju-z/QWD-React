import React from "react";
import "./about.scss";
import Us from "../../assets/About-Us.svg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { AiTwotoneFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-img">
            <img src={Us} alt="AboutImg" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about-card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about-card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>40+ satisfied Clients</small>
            </article>

            <article className="about-card">
              <AiTwotoneFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
            We are a skilled team of web developers dedicated to creating
            exceptional digital experiences. We transform ideas into engaging
            websites and web applications. We pride ourselves on our attention
            to detail, commitment to client satisfaction.
          </p>
          <a href="#contact" className="btn btn-primary">
            Reach Out
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
