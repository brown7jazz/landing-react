import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    tipoServicio: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mensaje enviado con éxito');
        setFormData({
          nombre: '',
          apellido: '',
          telefono: '',
          email: '',
          tipoServicio: '',
          mensaje: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre*"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido*"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono*"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <select
            id="tipoServicio"
            name="tipoServicio"
            value={formData.tipoServicio}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un tipo de servicio</option>
            <option value="Landing page">Landing page</option>
            <option value="Sitio web (5 secciones)">Sitio web (5 secciones)</option>
            <option value="Tienda online">Tienda online</option>
            <option value="Web SPA">Web SPA</option>
            <option value="Soporte web">Soporte web</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje (opcional)"
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </section>
  );
};

export default Contact;