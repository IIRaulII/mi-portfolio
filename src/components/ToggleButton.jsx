import { useState, useEffect } from 'react';
import '../styles/togglebutton.css';

const MoonIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const SunIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const ToggleButton = () => {
  // Estado para controlar si el tema es oscuro o claro
  const [isDarkMode, setIsDarkMode] = useState(true); // Por defecto, tema oscuro

  // Función para cambiar el tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Efecto para aplicar el tema cuando cambia
  useEffect(() => {
    // Añadir o quitar la clase 'dark-theme' del elemento html
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <label className="toggle-button" title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
      <input 
        type="checkbox" 
        checked={isDarkMode}
        onChange={toggleTheme}
        aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      />
      <span className="toggle-slider">
        <span className="icon icon-dark">
          <MoonIcon />
        </span>
        <span className="icon icon-light">
          <SunIcon />
        </span>
      </span>
    </label>
  );
};

export default ToggleButton;
