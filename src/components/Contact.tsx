
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Here you would typically handle the form submission to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Messaggio inviato!",
      description: "Grazie per il tuo messaggio. Ti risponderò al più presto.",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="section-padding bg-growth-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-gradient">Collaboriamo</span> Insieme
          </h2>
          <p className="text-gray-700">
            Sei interessato a far crescere la tua azienda? Contattami per una consulenza gratuita e scopri come posso aiutarti a raggiungere i tuoi obiettivi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white p-8 rounded-xl shadow-sm opacity-0 animate-fade-in animate-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div className="space-y-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full"
                  placeholder="La tua email"
                />
              </div>
              
              <div className="space-y-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Oggetto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full"
                  placeholder="Oggetto del messaggio"
                />
              </div>
              
              <div className="space-y-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Messaggio
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="w-full min-h-[150px]"
                  placeholder="Il tuo messaggio..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-growth-600 hover:bg-growth-700">
                Invia Messaggio
              </Button>
            </form>
          </div>
          
          {/* Contact details */}
          <div className="space-y-8 opacity-0 animate-fade-in animate-delay-300">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Contatti Diretti</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-growth-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Telefono</h4>
                    <p className="text-gray-600">+39 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-growth-600"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@growthachink.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-growth-600"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Indirizzo</h4>
                    <p className="text-gray-600">Via Roma 123, Milano, Italia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-growth-100 flex items-center justify-center hover:bg-growth-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-growth-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-growth-100 flex items-center justify-center hover:bg-growth-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-growth-600"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-growth-100 flex items-center justify-center hover:bg-growth-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-growth-600"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-growth-100 flex items-center justify-center hover:bg-growth-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-growth-600"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-growth-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Consulenza Gratuita</h3>
              <p className="mb-4">
                Prenota una chiamata di 30 minuti per discutere delle tue esigenze e scoprire come posso aiutarti.
              </p>
              <Button variant="outline" className="bg-white text-growth-600 hover:bg-growth-50 border-white">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Prenota Ora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
