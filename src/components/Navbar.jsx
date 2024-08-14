import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.logo}>
        <Link to="http://localhost:3000/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.navItems} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link to="/" onClick={() => scrollToSection('inicio')}>Inicio</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('servicios')}>Servicios</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('planes')}>Planes</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('tecnologias')}>Tecnologías</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('about')}>Equipo</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('contacto')}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;