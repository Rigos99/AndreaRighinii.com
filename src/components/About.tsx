
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  // Services data
  const services = [
    {
      title: "Content Marketing",
      description: "Creazione di contenuti strategici che coinvolgono il pubblico target e costruiscono autorità nel settore, aumentando la visibilità organica."
    },
    {
      title: "Ads Management",
      description: "Gestione ottimizzata di campagne pubblicitarie su Google e social media per massimizzare il ROI e ridurre il costo di acquisizione."
    },
    {
      title: "Growth Marketing",
      description: "Strategie data-driven per accelerare la crescita attraverso test A/B, ottimizzazione e scale-up delle campagne marketing."
    },
    {
      title: "Marketing Automation",
      description: "Implementazione di processi automatizzati per ottimizzare il lavoro e scalare le attività di marketing in modo efficiente."
    }
  ];

  return (
    <section id="about" className="py-4 md:py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About me section */}
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-growth-100 text-growth-700">
              Chi Sono
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Growth Hacker con <span className="heading-gradient">esperienza</span> nel settore startup
            </h2>
            
            <div className="flex items-center space-x-4 my-6">
              <Avatar className="w-20 h-20 border-2 border-growth-600">
                <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80" alt="Andrea Righini" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-growth-700">Andrea Righini</h3>
                <p className="text-gray-600">Growth & Marketing Specialist</p>
              </div>
            </div>
            
            <p className="text-gray-700">
              Mi occupo di aiutare PMI, startup e imprese familiari a crescere attraverso strategie innovative di growth hacking e marketing data-driven. Con due lauree in ambito economico-manageriale e un approccio analitico, sviluppo soluzioni personalizzate che generano risultati concreti.
            </p>
            
            <p className="text-gray-700">
              Ho lavorato principalmente con startup SaaS e ristoranti, specializzandomi in content marketing, gestione di campagne ads e strategie di crescita sostenibili per realtà che vogliono scalare in modo efficiente.
            </p>
            
            <div className="pt-4 flex gap-4">
              <Button className="bg-growth-600 hover:bg-growth-700">
                <a href="#contact">Contattami</a>
              </Button>
              <Button variant="outline" className="border-growth-600 text-growth-600 hover:bg-growth-50">
                <a href="#projects">Vedi i progetti</a>
              </Button>
            </div>
          </div>
          
          {/* Skills & services section */}
          <div className="space-y-8 opacity-0 animate-fade-in animate-delay-200">
            {/* Experience numbers */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-growth-600">2+</p>
                <p className="text-gray-700">Anni di esperienza</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-growth-600">10+</p>
                <p className="text-gray-700">Progetti completati</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-growth-600">4+</p>
                <p className="text-gray-700">Clienti attivi</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-growth-600">2</p>
                <p className="text-gray-700">Lauree</p>
              </div>
            </div>
            
            {/* Services */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Servizi</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-6 h-6 rounded-full bg-growth-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-growth-600"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
