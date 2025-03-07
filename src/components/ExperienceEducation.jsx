import { useState } from 'react';
import Experience from './Experience';
import Education from './Education';
import "./../styles/experienceEducation.css";

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="container" id="experience-education">
      <h2 className="section-title">Mi Trayectoria</h2>
      
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => handleTabChange('experience')}
        >
          Experiencia
        </button>
        <button 
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => handleTabChange('education')}
        >
          Educación
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'experience' ? <Experience /> : <Education />}
      </div>
    </section>
  );
};

export default ExperienceEducation;
