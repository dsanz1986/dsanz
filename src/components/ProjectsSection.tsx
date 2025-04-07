
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from './common/SectionHeader';
import ProjectTabs from './projects/ProjectTabs';
import { ArrowRight } from 'lucide-react';

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
        <SectionHeader 
          title="Proyectos" 
          description="Algunos de los proyectos en los que he colaborado" 
          isVisible={isVisible} 
        />

        <div className={cn(
          "transition-all duration-700 ease-out mb-12",
          isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
        )} style={{ transitionDelay: '200ms' }}>
          <ProjectTabs isVisible={isVisible} />
        </div>

        <div className={cn(
          "mt-16 text-center transition-all duration-700 ease-out",
          isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
        )} style={{ transitionDelay: '400ms' }}>
          <a
            href="https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/50 text-primary hover:bg-primary/5 transition-colors font-medium"
          >
            Ver todos los proyectos
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
