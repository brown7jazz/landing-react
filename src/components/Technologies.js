import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Technologies.module.css';

const Technologies = () => {
  const technologies = [
    { name: "React", image: "/images/react.webp" },
    { name: "Node.js", image: "/images/nodejs.webp" },
    { name: "JavaScript", image: "/images/javascript.webp" },
    { name: "HTML5", image: "/images/html5.webp" },
    { name: "CSS3", image: "/images/css3.webp" },
    { name: "MongoDB", image: "/images/mongodb.webp" },
    { name: "Express", image: "/images/express.webp" },
    { name: "Git", image: "/images/git.webp" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <section id="tecnologias" className={styles.technologiesSection}>
      <h2>Tecnologías que utilizamos</h2>
      <Slider {...settings}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.techSlide}>
            <img src={tech.image} alt={tech.name} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Technologies;