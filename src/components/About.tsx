
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  // Services data
  const services = [
    {
      title: "Ottimizzazione Funnel",
      description: "Analisi e miglioramento del percorso di conversione per aumentare i tassi di conversione e ridurre il costo di acquisizione clienti."
    },
    {
      title: "Growth Marketing",
      description: "Strategie data-driven per accelerare la crescita attraverso test A/B, ottimizzazione e scale-up delle campagne marketing."
    },
    {
      title: "Strategia SEO",
      description: "Posizionamento organico attraverso strategie SEO tecniche e content marketing mirato per generare traffico qualificato."
    },
    {
      title: "Marketing Automation",
      description: "Implementazione di processi automatizzati per ottimizzare il lavoro e scalare le attività di marketing in modo efficiente."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About me section */}
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-growth-100 text-growth-700">
              Chi Sono
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Growth Hacker con <span className="heading-gradient">esperienza</span> in vari settori
            </h2>
            
            <p className="text-gray-700">
              Mi occupo di aiutare le aziende a crescere attraverso strategie innovative e data-driven. Con un approccio incentrato sul cliente e sull'analisi dei dati, creo soluzioni personalizzate che generano risultati misurabili.
            </p>
            
            <p className="text-gray-700">
              Ho lavorato con startup, PMI e grandi aziende in diversi settori, dall'e-commerce al SaaS, dal B2B al B2C, aiutandole a raggiungere i loro obiettivi di crescita in modo sostenibile e scalabile.
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
                <p className="text-4xl font-bold text-growth-600">5+</p>
                <p className="text-gray-700">Anni di esperienza</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-growth-600">70+</p>
                <p className="text-gray-700">Progetti completati</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-growth-600">40+</p>
                <p className="text-gray-700">Clienti soddisfatti</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-growth-600">3x</p>
                <p className="text-gray-700">ROI medio</p>
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
