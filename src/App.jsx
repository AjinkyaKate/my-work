import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import HotstarCaseStudy from './pages/HotstarCaseStudy';
import DennerCaseStudy from './pages/DennerCaseStudy';
import QportCaseStudy from './pages/QportCaseStudy';

function HomePage() {
  return (
    <>
      <Hero />
      <MyStory />
      <StartupExperience />
      <ProfessionalExperience />
      <CaseStudies />
      <Skills />
      <Education />
      <Blog />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/hotstar-55-plus" element={<HotstarCaseStudy />} />
        <Route path="/case-studies/denner-onboarding-analytics" element={<DennerCaseStudy />} />
        <Route path="/case-studies/qport-0-to-1" element={<QportCaseStudy />} />
      </Routes>
    </Layout>
  );
}

export default App;
