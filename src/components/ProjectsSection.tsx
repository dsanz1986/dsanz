
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Projects categorized by type
const projectsByCategory = {
  "case-study": [
    {
      title: "Diseño de aplicación móvil",
      description: "Interfaz intuitiva para app de finanzas personales",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
    },
    {
      title: "Rediseño de plataforma web",
      description: "Mejora de experiencia de usuario para plataforma educativa",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
    }
  ],
  "side-projects": [
    {
      title: "Personal Finance App",
      description: "Side project para gestión de finanzas personales",
      imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
      link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
    }
  ],
  "ui-concept": [
    {
      title: "Concept App",
      description: "Concepto de interfaz para app de productividad",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
    }
  ],
  "design-system": [
    {
      title: "Diseño de sistema",
      description: "Creación de sistema de diseño para startup tecnológica",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
    }
  ]
};

// All projects combined
const allProjects = [
  ...projectsByCategory["case-study"],
  ...projectsByCategory["side-projects"],
  ...projectsByCategory["ui-concept"],
  ...projectsByCategory["design-system"]
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-24"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
          )}>
            Proyectos
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg max-w-xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
          )} style={{ transitionDelay: '100ms' }}>
            Algunos de los proyectos en los que he colaborado
          </p>
        </div>

        <div className={cn(
          "transition-all duration-700 ease-out mb-12",
          isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
        )} style={{ transitionDelay: '200ms' }}>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-secondary/70 backdrop-blur-sm">
                <TabsTrigger value="all" className="text-sm">All projects</TabsTrigger>
                <TabsTrigger value="case-study" className="text-sm">Case study</TabsTrigger>
                <TabsTrigger value="side-projects" className="text-sm">Side projects</TabsTrigger>
                <TabsTrigger value="ui-concept" className="text-sm">UI Concept</TabsTrigger>
                <TabsTrigger value="design-system" className="text-sm">Design System</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    index={index}
                    {...project}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="case-study" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsByCategory["case-study"].map((project, index) => (
                  <ProjectCard
                    key={index}
                    index={index}
                    {...project}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="side-projects" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsByCategory["side-projects"].map((project, index) => (
                  <ProjectCard
                    key={index}
                    index={index}
                    {...project}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ui-concept" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsByCategory["ui-concept"].map((project, index) => (
                  <ProjectCard
                    key={index}
                    index={index}
                    {...project}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design-system" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsByCategory["design-system"].map((project, index) => (
                  <ProjectCard
                    key={index}
                    index={index}
                    {...project}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className={cn(
          "mt-16 text-center transition-all duration-700 ease-out",
          isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
        )} style={{ transitionDelay: '400ms' }}>
          <a
            href="https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ver todos los proyectos
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
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
