import React from "react";
import "./services.scss";
import { TiTick } from "react-icons/ti";

const Services = () => {
  return (
    <section id="services">
      <h5>What We Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <TiTick className="service__list-icon" />
              <p>Expertise in UI/UX</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>User-centric interfaces</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>Crafting visually stunning websites</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>Aesthetics and functionality</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <TiTick className="service__list-icon" />
              <p>Web Design and Development</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>E-Commerce Development</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>Custom Web Applications</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>Website Maintenance & Support</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>API Integration</p>
            </li>
          </ul>
        </article>
        {/* END OF WEBDEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Hosting</h3>
          </div>
          <ul className="service__list">
            <li>
              <TiTick className="service__list-icon" />
              <p>Website Hosting</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>Domain Hosting</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>VPS Hosting</p>
            </li>
            <li>
              <TiTick className="service__list-icon" />
              <p>Shared Hosting</p>
            </li>
          </ul>
        </article>
        {/* END OF HOSTING */}
      </div>
    </section>
  );
};

export default Services;
