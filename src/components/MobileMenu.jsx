import { useState, useEffect } from 'react';
import '../styles/aboutme.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.sidebar-menu') && !event.target.closest('.mobile-menu-icon')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <button 
        className={`mobile-menu-icon ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menú móvil"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      
      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about" onClick={() => setIsOpen(false)}>SOBRE MÍ</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>PROYECTOS</a></li>
          <li><a href="#experience-education" onClick={() => setIsOpen(false)}>EXPERIENCIA</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>CONTACTO</a></li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu; 