
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#" className="text-2xl font-bold text-growth-700">
          GrowthAchink
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="text-growth-900 hover:text-growth-600 transition-colors">
            Progetti
          </a>
          <a href="#about" className="text-growth-900 hover:text-growth-600 transition-colors">
            Chi sono
          </a>
          <a href="#contact" className="text-growth-900 hover:text-growth-600 transition-colors">
            Contatti
          </a>
          <Button className="bg-growth-600 hover:bg-growth-700">
            <a href="#contact">Collaboriamo</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-growth-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#projects" 
              className="text-growth-900 py-2 hover:text-growth-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Progetti
            </a>
            <a 
              href="#about" 
              className="text-growth-900 py-2 hover:text-growth-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chi sono
            </a>
            <a 
              href="#contact" 
              className="text-growth-900 py-2 hover:text-growth-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contatti
            </a>
            <Button 
              className="bg-growth-600 hover:bg-growth-700 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#contact">Collaboriamo</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
