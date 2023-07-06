import React from "react";
import "./testimonials.scss";
import Avatar1 from "../../assets/Avatar1.png";
import Avatar2 from "../../assets/Avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";
import Avatar4 from "../../assets/Avatar4.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Sabarinadhan",
    review:
      "Thanks for providing good support and for making an visually stunning website with awesome functionality.",
  },
  {
    avatar: Avatar2,
    name: "Nizar Ahmed",
    review:
      "I'm extremely satisfied with the service provided, They understood my vision and turned it into a stunning website.",
  },
  {
    avatar: Avatar3,
    name: "Ajees",
    review: "Pixle perfect websites with with fantastic functionality!",
  },
  {
    avatar: Avatar4,
    name: "Mujibar",
    review:
      "They patiently listened to my requirements and transalated them into a visually appealing website.",
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
            <SwiperSlide key={index} className="testimonial">
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
