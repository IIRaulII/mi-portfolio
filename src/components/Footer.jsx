import { useState } from 'react';
import "./../styles/footer.css";
import ToggleButton from './ToggleButton';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulamos el envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // En un caso real, aquí se haría la llamada a una API para enviar el correo
      // Por ejemplo:
      // await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      console.log('Formulario enviado:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', company: '', message: '' });
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p>
        Project Manager especializado en e-commerce y desarrollo tecnológico,
        con una sólida trayectoria en la gestión de Marketplaces, dirección de equipos y optimización
        de estrategias digitales. Con experiencia en desarrollo Full-Stack y una visión estratégica del sector
        , combino habilidades técnicas y de liderazgo para crear soluciones innovadoras, escalables y centradas
        en el usuario. Si buscas colaboración en proyectos digitales, optimización de plataformas o asesoramiento
        en tecnología y comercio electrónico, estaré encantado de ayudarte.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Empresa</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              value={formData.company}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required 
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn-primary submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="submit-status success">
              ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="submit-status error">
              Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
            </div>
          )}
        </form>
        
        <div className="contact-email">
          <a href="mailto:raulmontoyareina@gmail.com">raulmontoyareina@gmail.com</a>
        </div>
        
        <div className="social-links">
          <a href="#" className="social-link">
            <img src="/images/twitter.svg" alt="Twitter" />
          </a>
          <a href="#" className="social-link">
            <img src="/images/github.svg" alt="GitHub" />
          </a>
          <a href="#" className="social-link">
            <img src="/images/youtube.svg" alt="YouTube" />
          </a>
        </div>

        {/* Botón de toggle para pantallas pequeñas */}
        <div className="footer-toggle">
          <ToggleButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
