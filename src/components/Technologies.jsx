import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Technologies.module.css';

const Technologies = () => {
  const technologies = [
    { name: "React", image: "/images/react.png" },
    { name: "Node.js", image: "/images/nodejs.png" },
    { name: "JavaScript", image: "/images/javascript.png" },
    { name: "Github Pages", image: "/images/githubpages.png" },
    { name: "HTML5", image: "/images/html5.png" },
    { name: "Astro", image: "/images/astro.png" },
    { name: "MongoDB", image: "/images/mongodb.png" },
    { name: "Wordpress", image: "/images/wordpress.png" },
    { name: "Woocommerce", image: "/images/woocommerce.png" },
    { name: "AWS", image: "/images/amazon-web-services.png" }

    
  ];

  const settings = {
    dots: true,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
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