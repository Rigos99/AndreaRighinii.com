
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface CaseStudyProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  challenge: string;
  solution: string;
  result: string;
  context: string[];
  strategy: string[];
  results: {
    value: string;
    label: string;
  }[];
  conclusion: string;
}

const CaseStudyTemplate = ({
  category,
  title,
  description,
  imageSrc,
  challenge,
  solution,
  result,
  context,
  strategy,
  results,
  conclusion
}: CaseStudyProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-growth-100 text-growth-700 mb-4">
              {category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-gray-700 mb-6">
              {description}
            </p>
          </div>
          
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-80 object-cover rounded-xl mb-8"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-growth-700">Sfida</h3>
              <p className="text-gray-700">{challenge}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-growth-700">Soluzione</h3>
              <p className="text-gray-700">{solution}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-growth-700">Risultati</h3>
              <p className="text-gray-700">{result}</p>
            </div>
          </div>
          
          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Il Contesto</h2>
              {context.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
              ))}
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">La Strategia</h2>
              <p className="text-gray-700 mb-4">
                Ho sviluppato un approccio in più fasi per affrontare le sfide specifiche:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                {strategy.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">I Risultati</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {results.map((result, index) => (
                  <div key={index} className="bg-growth-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-growth-700">{result.value}</p>
                    <p className="text-sm text-gray-700">{result.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700">
                {conclusion}
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <Button variant="outline" className="border-growth-600 text-growth-600 hover:bg-growth-50">
              <a href="/#projects">Torna ai progetti</a>
            </Button>
            <Button className="bg-growth-600 hover:bg-growth-700">
              <a href="#contact">Contattami per una consulenza</a>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudyTemplate;
