import React from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="inicio" className={styles.heroBanner}>
      <h1>¿Ya tienes tu proyecto en internet?</h1>
      <h2>Tu web la nube para mas conversiones de negocio</h2>
      <button onClick={scrollToContact} className={styles.ctaButton}>
        Contáctanos
      </button>
    </div>
  );
};

export default HeroBanner;