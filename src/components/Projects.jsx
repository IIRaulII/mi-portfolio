import "./../styles/projects.css";

const Projects = () => {
  // Objeto con las URLs de los proyectos
  const projectUrls = {
    jdSports: "https://jdsportshop.netlify.app/",
    setecientosGramos: "https://setecientosgramos.com/",
    pinterest: "https://pinterep.netlify.app/"
  };

  return (
    <section className="container" id="projects">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects">
        <a href={projectUrls.jdSports} target="_blank" rel="noopener noreferrer" className="project-item">
          <div className="project-image">
            <img src="/images/jd-project.jpg" alt="Proyecto JD Sports" />
          </div>
          <div className="project-info">
            <h3>JD Sports Clone</h3>
            <div className="project-type">E-commerce de Zapatillas</div>
            <div className="project-arrow">→</div>
          </div>
        </a>
        
        <a href={projectUrls.setecientosGramos} target="_blank" rel="noopener noreferrer" className="project-item">
          <div className="project-image">
            <img src="/images/wedding-project.jpg" alt="Proyecto Bodas" />
          </div>
          <div className="project-info">
            <h3>Setecientos Gramos</h3>
            <div className="project-type">E-Commerce Customized Products.</div>
            <div className="project-arrow">→</div>
          </div>
        </a>
        
        <a href={projectUrls.pinterest} target="_blank" rel="noopener noreferrer" className="project-item">
          <div className="project-image">
            <img src="/images/pinterest-project.jpg" alt="Proyecto Pinterest" />
          </div>
          <div className="project-info">
            <h3>Pinterest Clone</h3>
            <div className="project-type">Red Social de Imágenes</div>
            <div className="project-arrow">→</div>
          </div>
        </a>
      </div>
      
      <div className="experience-with">
        <h2>Experiencia Con</h2>
        <div className="experience-with-lang">
          <img src="/images/html.png" alt="HTML" />
          <img src="/images/css.png" alt="CSS" />
          <img src="/images/js.png" alt="JavaScript" />
          <img src="/images/react.png" alt="React" />
          <img src="/images/node.png" alt="Node.js" />
        </div>
      </div>
    </section>
  );
};

export default Projects;