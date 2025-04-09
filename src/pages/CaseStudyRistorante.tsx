
import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const CaseStudyRistorante = () => {
  const caseStudyData = {
    category: "Ristoranti",
    title: "Content Marketing per Ristorante",
    description: "Sviluppo di una strategia di content marketing per aumentare la visibilità online e le prenotazioni di un ristorante di fascia media.",
    imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=3840&h=2160",
    challenge: "Il ristorante aveva una bassa visibilità online e un numero insufficiente di prenotazioni, specialmente durante i giorni feriali.",
    solution: "Implementazione di una strategia di content marketing focalizzata su storytelling, fotografia e ottimizzazione locale.",
    result: "Aumento del 320% nel traffico organico e del 75% nelle prenotazioni online.",
    context: [
      "Un ristorante di fascia media situato in una zona turistica ma con difficoltà ad attrarre clienti locali e a distinguersi dalla concorrenza.",
      "Nonostante l'ottima qualità della cucina, il locale non riusciva a comunicare efficacemente la propria identità online e a convertire l'interesse in prenotazioni."
    ],
    strategy: [
      "Creazione di contenuti di qualità che raccontassero la storia del ristorante e le origini dei piatti",
      "Servizio fotografico professionale per valorizzare piatti, locale e atmosfera",
      "Ottimizzazione SEO per ricerche locali e integrazione con Google My Business",
      "Strategia di social media con focus su Instagram e Facebook",
      "Implementazione di un sistema di prenotazione online facile da usare",
      "Creazione di eventi tematici per aumentare l'engagement con la community locale"
    ],
    results: [
      { value: "+320%", label: "traffico organico" },
      { value: "+75%", label: "prenotazioni online" },
      { value: "+35%", label: "clienti ricorrenti" }
    ],
    conclusion: "La strategia ha portato a un aumento significativo della visibilità online e delle prenotazioni, con particolare successo nell'attrarre clienti locali e fidelizzarli. Il ristorante è riuscito a costruire una forte identità di marca e a distinguersi in un mercato altamente competitivo."
  };

  return <CaseStudyTemplate {...caseStudyData} />;
};

export default CaseStudyRistorante;
