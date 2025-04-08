
import React, { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

// Mock data for projects
const projectsData: ProjectCardProps[] = [
  {
    id: 1,
    title: "Ottimizzazione Funnel E-commerce",
    description: "Riprogettazione completa del funnel di acquisizione per un e-commerce nel settore moda, con focus su UX e copy persuasivo.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1728",
    category: "E-commerce",
    results: [
      "+45% tasso di conversione",
      "-28% costo di acquisizione cliente",
      "+62% valore ordine medio"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Strategia SEO per Startup SaaS",
    description: "Sviluppo e implementazione di una strategia SEO completa per una startup SaaS nel settore fintech, con focus su keyword a lungo termine.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "SEO",
    results: [
      "+320% traffico organico",
      "+15 posizioni #1 in SERP",
      "+87% lead generation"
    ]
  },
  {
    id: 3,
    title: "Campagna Marketing Multi-canale",
    description: "Pianificazione ed esecuzione di una campagna marketing integrata su più canali per il lancio di un nuovo prodotto nel settore wellness.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "Marketing",
    results: [
      "120.000€ di vendite al lancio",
      "ROI del 380%",
      "+25.000 nuovi follower sui social"
    ],
    link: "#"
  },
  {
    id: 4,
    title: "Ottimizzazione Campagne Google Ads",
    description: "Ristrutturazione completa dell'account Google Ads per un'azienda B2B, con focus su segmentazione avanzata e automazione.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "PPC",
    results: [
      "+82% conversion rate",
      "-35% costo per lead",
      "+112% ROAS"
    ],
    link: "#"
  },
  {
    id: 5,
    title: "Content Strategy B2B",
    description: "Sviluppo di una strategia di content marketing per un'azienda B2B nel settore manifatturiero, con focus su lead nurturing.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "Content",
    results: [
      "+245% engagement sui contenuti",
      "+68% lead qualificati",
      "-42% ciclo di vendita"
    ]
  },
  {
    id: 6,
    title: "Automazione Marketing per PMI",
    description: "Implementazione di un sistema di automazione marketing per una PMI nel settore servizi, con focus su personalizzazione e scalabilità.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=3840&h=2160",
    category: "Automazione",
    results: [
      "+75% efficienza operativa",
      "-30% costo acquisizione clienti",
      "+55% customer retention"
    ],
    link: "#"
  }
];

// Categories for filtering
const categories = ["Tutti", "E-commerce", "SEO", "Marketing", "PPC", "Content", "Automazione"];

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  
  const filteredProjects = activeCategory === "Tutti" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-gradient">Progetti</span> di Successo
          </h2>
          <p className="text-gray-700">
            Scopri come ho aiutato diverse aziende a raggiungere i loro obiettivi di crescita attraverso strategie innovative e data-driven.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-0 animate-fade-in animate-delay-200">
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
