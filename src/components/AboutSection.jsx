import React from 'react';
import Lottie from 'lottie-react';
import styles from './AboutSection.module.css';
import animationData from '../lottiefiles/about-animation.json'; // Asegúrate de tener este archivo

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.lottieContent}>
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div className={styles.textContent}>
          <h2>Sobre Technoweb</h2>
          <p>
             Ofrecemos soluciones tecnológicas a la medida de tu requerimiento con visión de futuro y escalabilidad, te apoyamos en la transformación tecnológica de tu negocio.
             Nos preocupamos principalmente por ofrecerte una solución, atendiendo tus necesidades inmediatas, es por ello que ofrecemos diferentes servicios tecnológicos a la medida y alcance de cada cliente; desde un desarrollo web elaborado a la medida del cliente o una web básica para empresas o proyectos que recién comienzan y necesitan mostrar sus servicios en Internet y contactar con sus clientes de manera inmediata.
             Nuestro equipo de profesionales posee gran experiencia en diferentes áreas de la tecnología digital, programación, desarrollo web, diseño gráfico y soporte técnico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;