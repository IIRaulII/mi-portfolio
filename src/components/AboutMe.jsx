import "./../styles/aboutme.css";

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <img src="/images/avatar.png" alt="Avatar" className="avatar" />
      <div className="about-text">
        <h1>
          Hola, soy <span className="purple-text">Raúl</span>
        </h1>
        <p>
        Soy un apasionado Project Manager especializado en e-commerce 
        y futuro desarrollador Full-Stack, con amplia experiencia en la gestión de marketplaces, tecnología y estrategia digital.
         A lo largo de mi carrera, he liderado equipos multidisciplinarios, optimizado procesos y desarrollado
          soluciones innovadoras que impulsan el crecimiento de negocios en el entorno digital.
        </p>
        <p>🚀 Gestión de proyectos - Planificación, ejecución y optimización de estrategias digitales.</p>
        <p>🛍️ Especialista en e-commerce - Maximización de conversión y visibilidad de productos.</p>
        <p>💡 Innovación y tecnología - Desarrollo y mantenimiento de sitios web con nuevas funcionalidades.</p>
        <p>🤝 Liderazgo y trabajo en equipo - Coordinación de equipos y comunicación efectiva con clientes y stakeholders.</p>
        <p>🔧 Desarrollo Full-Stack - Implementación de soluciones web con tecnologías modernas.</p>
        <p>
          Siempre estoy ansioso por aprender nuevas tecnologías y mejorar mis habilidades para
          ofrecer las mejores soluciones posibles a mis clientes. ¡Creemos algo increíble juntos!
        </p>
      </div>
      <div className="about-me-buttons">
        <a href="#contact" className="btn-primary">Contactar</a>
        <a href="/files/cv-raul.pdf" download className="btn-secondary">Descargar CV</a>
      </div>
    </section>
  );
};

export default AboutMe;