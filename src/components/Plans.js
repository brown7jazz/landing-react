import React from 'react';
import styles from './Plans.module.css';


const PlanCard = ({ title, price, features }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.planCard}>
      <h3>{title}</h3>
      <p className={styles.price}>{price} UF</p>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index}>
            <span className={styles.checkIcon}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button onClick={scrollToContact} className={styles.ctaButton}>
        Cotizar plan
      </button>
    </div>
  );
};

const Plans = () => {
  const plans = [
    {
      title: "Landing",
      price: 10,
      features: [
        "3 secciones",
        "Dominio + Hosting x 1 año",
        "1 correos con dominio",
        "Diseño responsive",
        "Formulario de contacto",
        "Integración con RRSS",
        "Certificado SSL x 1 año",
        "Botón de WhatsApp",
        "Autoadministrable",
        "Capacitación",
        "Capacitación",
        "Capacitación",
      ]
    },
    {
      title: "Web",
      price: 18,
      features: [
        "5 secciones",
        "Dominio + Hosting x 1 año",
        "3 correos con dominio",
        "Diseño responsive",
        "Formulario de contacto",
        "Integración con RRSS",
        "Certificado SSL x 1 año",
        "Botón de WhatsApp",
        "Autoadministrable",
        "Capacitación",
        "Capacitación",
        "Capacitación",
      ]
    },
    {
      title: "Ecommerce",
      price: 24,
      features: [
        "7 secciones",
        "Dominio + Hosting x 1 año",
        "5 correos con dominio",
        "Diseño responsive",
        "Formulario de contacto",
        "Integración con RRSS",
        "Certificado SSL x 1 año",
        "Carro de compra",
        "Carga inicial 20 productos",
        "Integración con método de pago",
        "Autoadministrable",
        "Capacitación",
      ]
    }
  ];

  return (
    <section id="planes" className={styles.plansSection}>
      <h2>Planes</h2>
      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Plans;