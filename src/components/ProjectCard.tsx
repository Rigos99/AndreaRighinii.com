
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  results: string[];
  link?: string;
  className?: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  category, 
  results, 
  link, 
  className,
  delay = 0
}: ProjectCardProps) => {
  return (
    <Card className={cn(
      "card-hover overflow-hidden opacity-0 animate-fade-in",
      className
    )}
    style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <div className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-growth-100 text-growth-700 mb-2">
              {category}
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="mb-4 line-clamp-3">{description}</CardDescription>
        
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Risultati:</p>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="text-sm flex items-start">
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
                  className="text-growth-600 mr-2 mt-1 flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter>
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-growth-600 hover:text-growth-700 text-sm font-medium flex items-center transition-colors"
          >
            Scopri di più
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
              className="ml-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        ) : (
          <span className="text-gray-400 text-sm">Case study riservato</span>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
