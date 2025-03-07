import { useState, useEffect } from 'react';
import "./../styles/header.css";
import MobileMenu from './MobileMenu';
import ToggleButton from './ToggleButton';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  // Detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/images/codigo.png" alt="Logo" />
        </div>
        <div className="navbar">
          <a href="#about">SOBRE MÍ</a>
          <a href="#projects">PROYECTOS</a>
          <a href="#experience-education">EXPERIENCIA</a>
          <a href="#contact">CONTACTO</a>
          <ToggleButton />
        </div>
      </nav>
      
      {/* Menú móvil (solo se renderiza en pantallas < 500px) */}
      {isMobile && <MobileMenu />}
    </header>
  );
};

export default Header;
