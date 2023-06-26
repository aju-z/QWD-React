import React from "react";
import "./testimonials.scss";
import Avatar1 from "../../assets/Avatar1.png";
import Avatar2 from "../../assets/Avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";
import Avatar4 from "../../assets/Avatar4.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Sabarinadhan",
    review:
      "Ipsa dolorum earum eveniet velit voluptatum deleniti alias aperiam!",
  },
  {
    avatar: Avatar2,
    name: "Murugan",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis perferendis est vel, possimus mollitia eius aliquam facere modi voluptatibus culpa perspiciatis. Ipsa dolorum earum eveniet velit",
  },
  {
    avatar: Avatar3,
    name: "Sundar",
    review:
      "possimus mollitia eius aliquam facere modi voluptatibus culpa perspiciatis. Ipsa dolorum earum eveniet velit voluptatum deleniti alias aperiam!",
  },
  {
    avatar: Avatar4,
    name: "Venu Gopal",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis perferendis est vel, possimus mollitia eius aliquam facere modi voluptatibus culpa perspiciatis. Ipsa dolorum earum eveniet velit voluptatum deleniti alias aperiam!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial ">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 client__name>{name}</h5>
              <small client__review>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
