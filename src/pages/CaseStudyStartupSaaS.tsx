
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const CaseStudyStartupSaaS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-growth-100 text-growth-700 mb-4">
              Startup
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Strategia di Growth per Startup SaaS</h1>
            <p className="text-lg text-gray-700 mb-6">
              Implementazione di una strategia completa di growth per una startup SaaS in fase early-stage
              con focus su acquisizione utenti e conversione.
            </p>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1728" 
            alt="Strategia di Growth per Startup SaaS" 
            className="w-full h-80 object-cover rounded-xl mb-8"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-growth-700">Sfida</h3>
              <p className="text-gray-700">
                La startup stava lottando per acquisire nuovi utenti e convertire i free trial in abbonamenti paganti.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-growth-700">Soluzione</h3>
              <p className="text-gray-700">
                Implementazione di una strategia integrata che includeva ottimizzazione del funnel e campagne ads mirate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-growth-700">Risultati</h3>
              <p className="text-gray-700">
                Aumento del tasso di conversione del 45% e riduzione del CAC del 28%.
              </p>
            </div>
          </div>
          
          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Il Contesto</h2>
              <p className="text-gray-700 mb-4">
                Una startup SaaS B2B nel settore della produttività aziendale, con un prodotto innovativo ma con difficoltà 
                nell'acquisire nuovi clienti e convertire gli utenti gratuiti in abbonamenti a pagamento.
              </p>
              <p className="text-gray-700">
                Con una base utenti limitata e risorse di marketing ridotte, avevano bisogno di una strategia efficiente 
                per aumentare la loro visibilità e migliorare il tasso di conversione.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">La Strategia</h2>
              <p className="text-gray-700 mb-4">
                Ho sviluppato un approccio in più fasi per affrontare le sfide specifiche:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>Analisi approfondita del funnel di conversione per identificare i punti critici</li>
                <li>Ottimizzazione dell'onboarding degli utenti con email personalizzate e tutorial interattivi</li>
                <li>Implementazione di una strategia di content marketing con focus su SEO e lead magnet</li>
                <li>Campagne ads su LinkedIn e Google con targeting preciso verso decision-maker B2B</li>
                <li>A/B testing continuo dell'interfaccia utente e delle call-to-action</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">I Risultati</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-growth-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-growth-700">+45%</p>
                  <p className="text-sm text-gray-700">tasso di conversione</p>
                </div>
                <div className="bg-growth-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-growth-700">-28%</p>
                  <p className="text-sm text-gray-700">costo di acquisizione cliente</p>
                </div>
                <div className="bg-growth-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-growth-700">+62%</p>
                  <p className="text-sm text-gray-700">retention rate</p>
                </div>
              </div>
              <p className="text-gray-700">
                La strategia ha portato a un aumento significativo dei nuovi utenti, migliorando contemporaneamente 
                i tassi di conversione e riducendo il costo di acquisizione. La startup ha potuto accelerare 
                la crescita e raggiungere il product-market fit in meno di 6 mesi.
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

export default CaseStudyStartupSaaS;
