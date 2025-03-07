import "./../styles/education.css";

const Education = () => {
  return (
    <div className="experiences">
      <div className="experience-item">
        <div className="experience-circle"></div>
        <div className="experience-content">
          <div className="experience-title-container">
            <h3 className="experience-title">Grado en Ingeniería Informática - Universidad Internacional de Valencia</h3>
            <span className="date">2023 - Actualidad</span>
          </div>
          <p>
          Actualmente, estoy cursando el Grado en Ingeniería Informática, adquiriendo conocimientos avanzados en desarrollo
          de software, gestión de bases de datos y optimización de sistemas. Esta formación complementa mi experiencia
          en e-commerce y dirección de proyectos tecnológicos, potenciando mis habilidades en innovación y resolución de
          problemas.
          </p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-circle"></div>
        <div className="experience-content">
          <div className="experience-title-container">
            <h3 className="experience-title">Master-Bootcamp de Desarrollo Web Full Stack - The Power Education</h3>
            <span className="date">2024 - 2025</span>
          </div>
          <p>
          En este programa de formación intensiva, estoy perfeccionando mis habilidades en desarrollo web con tecnologías
          como JavaScript, Node.js, React y bases de datos. Este aprendizaje me permite crear soluciones digitales completas,
          desde el backend hasta la experiencia del usuario, aplicando las mejores prácticas del sector.
          </p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-circle"></div>
        <div className="experience-content">
          <div className="experience-title-container">
            <h3 className="experience-title">Máster en Marketing y Diseño Gráfico</h3>
            <span className="date">2020 - 2021</span>
          </div>
          <p>
          Este máster me ha permitido profundizar en estrategias de marketing digital, branding y diseño gráfico aplicado al
          mundo empresarial. Gracias a esta formación, he desarrollado habilidades clave en identidad visual, UX/UI y estrategias
          publicitarias, complementando mi experiencia en e-commerce y gestión de proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
