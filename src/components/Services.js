import React from 'react';
import styles from './Services.module.css';

const ServiceCard = ({ title, description, image }) => (
  <div className={styles.serviceCard}>
    <img src={image} alt={title} className={styles.serviceImage} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);


const Services = () => {
    
  const services = [
    
    {
      title: "Desarrollo web",
      description: "Tienes un sitio web y quieres actualizarlo o realizar modificaciones a nivel estructural o diseño, nosotros nos encargamos, asegurándote calidad profesional en el servicio.",
      image: "/images/web-dev.png"
    },
    {
      title: "Diseño web",
      description: "Consideramos como punto fuerte el diseño UI/UX, para pequeñas y medianas empresas, corporativas, tiendas virtuales, con diseños e interfaces elegantes y funcionales.",
      image: "/images/web-design.png"
    },
    {
      title: "Soporte",
      description: "Nos ocupamos de las mantenciones contínuas de tu sitios web, actualizaciones globales, publicaciones de noticias, eventos, novedades, galerías de fotos, integración con Google Analytics 4.",
      image: "/images/support.png"
    },
    {
      title: "Ecommerce",
      description: "Potencia tus ventas en internet con un e-Commerce, integramos tu sitio web con los diferentes medios de pago conocidos Stripe, Transbank, PayPal, Webpay, Mercadopago, Flow, etc.",
      image: "/images/ecommerce.png"
    }
   
  ];
  

  return (
    
    <section id="servicios" className={styles.servicesSection}>
      <h2>Servicios</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;