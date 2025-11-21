import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import StartupExperience from './components/StartupExperience';
import ProfessionalExperience from './components/ProfessionalExperience';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <MyStory />
      <StartupExperience />
      <ProfessionalExperience />
      <CaseStudies />
      <Skills />
      <Education />
      <Blog />
      <Contact />
    </Layout>
  );
}

export default App;
