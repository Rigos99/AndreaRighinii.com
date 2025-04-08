
import React, { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

// Mock data for projects
const projectsData: ProjectCardProps[] = [
  {
    id: 1,
    title: "Strategia di Growth per Startup SaaS",
    description: "Implementazione di una strategia completa di growth per una startup SaaS in fase early-stage con focus su acquisizione utenti e conversione.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1728",
    category: "SaaS",
    results: [
      "+45% tasso di conversione",
      "-28% costo di acquisizione cliente",
      "+62% retention rate"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Content Marketing per Ristorante",
    description: "Sviluppo di una strategia di content marketing per aumentare la visibilità online e le prenotazioni di un ristorante di fascia media.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "Ristoranti",
    results: [
      "+320% traffico organico",
      "+75% prenotazioni online",
      "+35% clienti ricorrenti"
    ],
    link: "#"
  },
  {
    id: 3,
    title: "Campagna Ads per PMI",
    description: "Pianificazione ed esecuzione di una campagna pubblicitaria su Google e Facebook per una piccola impresa locale nel settore servizi.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "PMI",
    results: [
      "ROAS di 4.8x",
      "-30% costo per click",
      "+65% tasso di conversione"
    ],
    link: "#"
  },
  {
    id: 4,
    title: "Marketing Automation per SaaS",
    description: "Implementazione di un sistema di automazione marketing per una startup SaaS, con focus su onboarding e nurturing dei lead.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "SaaS",
    results: [
      "+82% completamento onboarding",
      "-35% churn rate",
      "+112% conversion rate"
    ],
    link: "#"
  },
  {
    id: 5,
    title: "Strategia Social per Ristorante",
    description: "Creazione e gestione di una strategia social media per aumentare la visibilità e l'engagement di un ristorante di nicchia.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "Ristoranti",
    results: [
      "+245% engagement sui contenuti",
      "+68% follower organici",
      "+42% visite al sito dal social"
    ]
  },
  {
    id: 6,
    title: "Growth Strategy per Impresa Familiare",
    description: "Sviluppo di una strategia di crescita per un'impresa familiare tradizionale, con focus su digitalizzazione e acquisizione nuovi clienti.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "PMI",
    results: [
      "+75% lead generati",
      "-30% costo acquisizione clienti",
      "+55% fatturato annuale"
    ],
    link: "#"
  }
];

// Categories for filtering
const categories = ["Tutti", "SaaS", "Ristoranti", "PMI"];

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  
  const filteredProjects = activeCategory === "Tutti" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-4 md:py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-gradient">Progetti</span> di Successo
          </h2>
          <p className="text-gray-700">
            Scopri come ho aiutato PMI, startup e imprese familiari a raggiungere i loro obiettivi di crescita attraverso strategie innovative e data-driven.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 opacity-0 animate-fade-in animate-delay-200">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category
                  ? "bg-growth-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              {...project}
              delay={index * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
