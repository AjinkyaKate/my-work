import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import Achievements from './components/Achievements';
import StartupExperience from './components/StartupExperience';
import ProfessionalExperience from './components/ProfessionalExperience';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Education from './components/Education';
import Blog from './components/Blog';
import HotstarCaseStudy from './pages/HotstarCaseStudy';
import DennerCaseStudy from './pages/DennerCaseStudy';
import QportCaseStudy from './pages/QportCaseStudy';

function HomePage() {
  return (
    <>
      <Hero />
      <MyStory />
      <Achievements />
      <ProfessionalExperience />
      <StartupExperience />
      <CaseStudies />
      <Skills />
      <Education />
      <Blog />
    </>
  );
}

import BlogPost from './components/BlogPost';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/hotstar-55-plus" element={<HotstarCaseStudy />} />
        <Route path="/case-studies/denner-onboarding-analytics" element={<DennerCaseStudy />} />
        <Route path="/case-studies/qport-0-to-1" element={<QportCaseStudy />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Layout>
  );
}

export default App;
