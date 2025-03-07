import "./../styles/experience.css";

const Experience = () => {
  return (
    <div className="experiences">
      <div className="experience-item">
        <div className="experience-circle"></div>
        <div className="experience-content">
          <div className="experience-title-container">
            <h3 className="experience-title">Gestión de Proyectos E-commerce</h3>
            <span className="date">2014 - 2024</span>
          </div>
          <p>
          Como Project Manager en Seven Hundred Creative S.L., me especializo en la planificación,
          ejecución y optimización de Marketplaces. Coordino equipos multifuncionales para garantizar
          el cumplimiento de plazos y objetivos estratégicos, además de desarrollar estrategias que 
          aumentan la visibilidad y conversión de productos. Mi enfoque en la mejora continua y el 
          análisis de datos me permite implementar soluciones innovadoras para potenciar el rendimiento
          en plataformas digitales.
          </p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-circle"></div>
        <div className="experience-content">
          <div className="experience-title-container">
            <h3 className="experience-title">Dirección y Estrategia Comercial</h3>
            <span className="date">2004 - 2024</span>
          </div>
          <p>
          Con una trayectoria consolidada en el sector tecnológico, he ocupado puestos de liderazgo como
          Director Comercial en Darty Hispana S.A. y Director de Tienda en Euronics. Mi experiencia abarca
          la supervisión de operaciones, desarrollo de estrategias de ventas y marketing, y la gestión de 
          equipos de alto rendimiento. Mi capacidad para analizar tendencias del mercado y optimizar recursos
          ha impulsado el crecimiento de cada proyecto en el que he participado.
          </p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-circle"></div>
        <div className="experience-content">
          <div className="experience-title-container">
            <h3 className="experience-title">Tecnología y Desarrollo</h3>
            <span className="date">2002 - Actualidad</span>
          </div>
          <p>
          Mi formación en Ingeniería Informática y mi experiencia como Full-Stack Developer
          en The Power Education me han permitido desarrollar habilidades técnicas avanzadas en
          desarrollo web y gestión de infraestructuras digitales. Además, mi paso por la dirección
          del área de informática me ha brindado un conocimiento profundo sobre sistemas, hardware
          y software, asegurando eficiencia y optimización en entornos tecnológicos exigentes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;