import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <ExperienceEducation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
