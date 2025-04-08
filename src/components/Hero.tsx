
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50 -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-growth-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 opacity-0 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="heading-gradient">Growth Hacking</span> per far crescere il tuo business
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Strategie innovative e soluzioni concrete per accelerare la crescita della tua azienda in modo sostenibile e misurabile.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-growth-600 hover:bg-growth-700">
              <a href="#projects">Scopri i miei progetti</a>
            </Button>
            <Button size="lg" variant="outline" className="border-growth-600 text-growth-600 hover:bg-growth-50">
              <a href="#contact">Contattami</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 pt-4">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-growth-700">50+</p>
              <p className="text-sm text-gray-600">Progetti completati</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-growth-700">90%</p>
              <p className="text-sm text-gray-600">Clienti soddisfatti</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-growth-700">3x</p>
              <p className="text-sm text-gray-600">ROI medio</p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block relative opacity-0 animate-fade-in animate-delay-300">
          <div className="relative z-10">
            <svg className="w-full max-w-lg mx-auto" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M488.5,274.5Q488,349,413.5,387Q339,425,280,423Q221,421,179.5,384.5Q138,348,119.5,299Q101,250,118,201Q135,152,178.5,115.5Q222,79,281,82.5Q340,86,396.5,119Q453,152,471,201Q489,250,488.5,274.5Z" fill="#0c87e8" opacity="0.2"></path>
              <path d="M424,267Q407,334,350,379Q293,424,232,416Q171,408,139,358Q107,308,88.5,254Q70,200,102,151Q134,102,192.5,77Q251,52,308,87Q365,122,403,161Q441,200,424,267Z" fill="#0c87e8" opacity="0.4"></path>
            </svg>
            
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-xl w-3/4 relative">
                <div className="w-full h-2 bg-gray-100 mb-8 rounded-full overflow-hidden">
                  <div className="h-full bg-growth-500 w-3/4 rounded-full"></div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">Acquisizione Utenti</p>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <span className="text-green-600 text-sm ml-1">+24.8%</span>
                      </div>
                    </div>
                    <p className="text-2xl font-semibold">12,540</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">Conversione</p>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <span className="text-green-600 text-sm ml-1">+18.2%</span>
                      </div>
                    </div>
                    <p className="text-2xl font-semibold">3.2%</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">CAC</p>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                          <polyline points="16 17 22 17 22 11"></polyline>
                        </svg>
                        <span className="text-red-500 text-sm ml-1">-12.5%</span>
                      </div>
                    </div>
                    <p className="text-2xl font-semibold">€22.4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
