
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyStartupSaaS from "./pages/CaseStudyStartupSaaS";
import CaseStudyRistorante from "./pages/CaseStudyRistorante";

// Utilizzerò CaseStudyTemplate con dati diversi per le altre pagine dei casi studio
import CaseStudyTemplate from "./pages/CaseStudyTemplate";

const queryClient = new QueryClient();

// Dati temporanei per i casi studio che utilizzeranno il template
const scaleupCaseStudy = {
  category: "Scaleup",
  title: "Growth Strategy per Scaleup",
  description: "Sviluppo di una strategia di crescita per una scaleup in rapida espansione, con focus su scalabilità e acquisizione nuovi clienti.",
  imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=3840&h=2160",
  challenge: "La scaleup stava crescendo rapidamente ma senza una strategia strutturata, causando inefficienze e costi di acquisizione elevati.",
  solution: "Implementazione di un framework di crescita scalabile e data-driven focalizzato su automazione e ottimizzazione dei canali.",
  result: "Aumento del 75% dei lead generati e riduzione del 30% del costo di acquisizione clienti.",
  context: [
    "Una scaleup tecnologica che aveva ottenuto un round di finanziamento e necessitava di accelerare la crescita mantenendo un'efficienza operativa.",
    "L'azienda aveva una base clienti solida ma voleva espandersi in nuovi mercati e segmenti, ottimizzando il processo di acquisizione."
  ],
  strategy: [
    "Analisi approfondita dei dati per identificare i canali più performanti",
    "Implementazione di un sistema di lead scoring e qualificazione",
    "Ottimizzazione del funnel di vendita con automazione del processo",
    "Sviluppo di una strategia di content marketing multicanale",
    "Implementazione di un sistema di referral strutturato",
    "Test A/B continui per ottimizzare tassi di conversione"
  ],
  results: [
    { value: "+75%", label: "lead generati" },
    { value: "-30%", label: "costo acquisizione clienti" },
    { value: "+55%", label: "fatturato annuale" }
  ],
  conclusion: "La strategia ha permesso alla scaleup di accelerare significativamente la crescita mantenendo un modello economicamente sostenibile. L'azienda è riuscita a espandersi in nuovi mercati e a stabilire una posizione di leadership nel settore."
};

const impresaFamiliareCaseStudy = {
  category: "Imprese Familiari",
  title: "Campagna Ads per Impresa Familiare",
  description: "Pianificazione ed esecuzione di una campagna pubblicitaria su Google e Facebook per un'impresa familiare locale nel settore servizi.",
  imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=3840&h=2160",
  challenge: "L'impresa familiare aveva difficoltà a competere con aziende più grandi e a raggiungere nuovi clienti nella propria area geografica.",
  solution: "Creazione di campagne pubblicitarie mirate su Google e Facebook con focus sulla tradizione e l'expertise dell'impresa.",
  result: "ROAS di 4.8x e aumento del 65% nel tasso di conversione.",
  context: [
    "Un'impresa familiare con oltre 30 anni di esperienza nel settore servizi, con una solida reputazione locale ma limitate capacità di marketing digitale.",
    "L'azienda stava perdendo quote di mercato a favore di concorrenti più grandi con maggiori budget pubblicitari e presenza online."
  ],
  strategy: [
    "Analisi del mercato locale e dei concorrenti principali",
    "Sviluppo di una proposta di valore unica basata sulla tradizione familiare e l'esperienza",
    "Creazione di campagne Google Ads mirate per ricerche locali ad alta intenzione",
    "Implementazione di campagne Facebook con targeting demografico e comportamentale",
    "Ottimizzazione delle landing page per massimizzare le conversioni",
    "Retargeting strategico per aumentare il tasso di conversione"
  ],
  results: [
    { value: "4.8x", label: "ROAS" },
    { value: "-30%", label: "costo per click" },
    { value: "+65%", label: "tasso di conversione" }
  ],
  conclusion: "La campagna ha permesso all'impresa familiare di competere efficacemente con concorrenti più grandi, espandere la propria clientela e aumentare il fatturato. Il focus sulla tradizione e l'esperienza ha creato un vantaggio competitivo unico che ha risuonato con i clienti target."
};

const ristoranteSocialCaseStudy = {
  category: "Ristoranti",
  title: "Strategia Social per Ristorante",
  description: "Creazione e gestione di una strategia social media per aumentare la visibilità e l'engagement di un ristorante di nicchia.",
  imageSrc: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=3840&h=2160",
  challenge: "Il ristorante di nicchia era poco conosciuto nonostante l'alta qualità dell'offerta e aveva difficoltà a costruire una community di clienti fedeli.",
  solution: "Sviluppo di una strategia social media focalizzata su storytelling visivo e coinvolgimento della community locale.",
  result: "Aumento del 245% nell'engagement e 68% di follower organici in più.",
  context: [
    "Un ristorante gourmet con un concept innovativo ma con poca visibilità nel panorama gastronomico locale.",
    "Nonostante la qualità eccezionale, il locale faticava a comunicare la propria unicità e a costruire una base di clienti fedeli."
  ],
  strategy: [
    "Definizione dell'identità visiva e del tono di voce sui social media",
    "Pianificazione di un calendario editoriale con contenuti diversificati",
    "Produzioni fotografiche e video professionali dei piatti e dell'ambiente",
    "Collaborazioni con influencer food locali",
    "Creazione di contenuti dietro le quinte per mostrare la passione e il processo creativo",
    "Organizzazione di eventi social-first per coinvolgere la community"
  ],
  results: [
    { value: "+245%", label: "engagement sui contenuti" },
    { value: "+68%", label: "follower organici" },
    { value: "+42%", label: "visite al sito dal social" }
  ],
  conclusion: "La strategia social ha trasformato la percezione del ristorante, creando una forte comunità di appassionati e aumentando significativamente le prenotazioni. Il locale è riuscito a posizionarsi come punto di riferimento gastronomico nella zona, attraendo anche clienti da fuori città."
};

const saasAutomationCaseStudy = {
  category: "Startup",
  title: "Marketing Automation per SaaS",
  description: "Implementazione di un sistema di automazione marketing per una startup SaaS, con focus su onboarding e nurturing dei lead.",
  imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=3840&h=2160",
  challenge: "La startup SaaS aveva un alto abbandono durante il processo di onboarding e un basso tasso di conversione da free trial a clienti paganti.",
  solution: "Creazione di un sistema di automazione marketing personalizzato per migliorare onboarding, nurturing e conversione.",
  result: "Aumento del 82% nel completamento onboarding e riduzione del churn rate del 35%.",
  context: [
    "Una startup SaaS B2B con un prodotto tecnicamente valido ma con difficoltà nel convertire gli utenti gratuiti in clienti paganti.",
    "L'azienda aveva una buona acquisizione iniziale ma perdeva molti utenti durante l'onboarding a causa di processi manuali e comunicazioni non personalizzate."
  ],
  strategy: [
    "Implementazione di una piattaforma di marketing automation integrata con il CRM",
    "Creazione di workflow di onboarding personalizzati basati sul comportamento degli utenti",
    "Sviluppo di sequenze email segmentate per diversi tipi di utenti e casi d'uso",
    "Implementazione di trigger comportamentali per interventi tempestivi",
    "Creazione di contenuti educativi mirati alle diverse fasi del customer journey",
    "Setup di un sistema di scoring dei lead per prioritizzare gli interventi del team commerciale"
  ],
  results: [
    { value: "+82%", label: "completamento onboarding" },
    { value: "-35%", label: "churn rate" },
    { value: "+112%", label: "conversion rate" }
  ],
  conclusion: "L'implementazione del sistema di automazione ha trasformato radicalmente il processo di conversione della startup. L'azienda è riuscita a scalare le operazioni di marketing e sales mantenendo un'esperienza altamente personalizzata, con un impatto significativo sui principali KPI di business."
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies/startup-saas" element={<CaseStudyStartupSaaS />} />
          <Route path="/case-studies/ristorante-content" element={<CaseStudyRistorante />} />
          <Route 
            path="/case-studies/impresa-familiare-ads" 
            element={<CaseStudyTemplate {...impresaFamiliareCaseStudy} />} 
          />
          <Route 
            path="/case-studies/saas-automation" 
            element={<CaseStudyTemplate {...saasAutomationCaseStudy} />} 
          />
          <Route 
            path="/case-studies/ristorante-social" 
            element={<CaseStudyTemplate {...ristoranteSocialCaseStudy} />} 
          />
          <Route 
            path="/case-studies/scaleup-growth" 
            element={<CaseStudyTemplate {...scaleupCaseStudy} />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
