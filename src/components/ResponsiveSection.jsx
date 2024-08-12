import React from 'react';
import Lottie from 'lottie-react';
import styles from './ResponsiveSection.module.css';
import animationData from '../lottiefiles/ResponsiveDevices.json'; // Asegúrate de tener este archivo

const ResponsiveSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section id="responsive" className={styles.responsiveSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2>¿Necesitas un sitio web Responsivo?</h2>
          <p>Una web con diseño responsivo es capaz de adaptarse a cualquier dispositivo inteligente donde se visualice, Smartphone, Tablet, Notebook, Desktop, entre otros. Las estadísticas muestran el creciente tráfico web que se genera desde dispositivos móviles, pero además Google penaliza en su buscador las webs que no poseen este tipo de técnica de  diseño, si consideras que tu web está obsoleta, es el momento de ponerte en manos de nuestro equipo para diseñar una web responsiva con las mejores garantías.</p>
        </div>
        <div className={styles.lottieContent}>
          <Lottie options={defaultOptions} height="100%" width="100%" />
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default ResponsiveSection;