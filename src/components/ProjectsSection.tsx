
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';

const projects = [
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
  },
  {
    title: "Diseño de sistema",
    description: "Creación de sistema de diseño para startup tecnológica",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
  },
  {
    title: "Producto digital",
    description: "Diseño de dashboard para análisis de datos",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
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
