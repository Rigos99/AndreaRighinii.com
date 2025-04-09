
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="mt-8">
        <ProjectsShowcase />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
