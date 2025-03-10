
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SkillCard from './SkillCard';

// Icons as simple SVGs for skills
const SkillIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
    {children}
  </div>
);

const SkillsSection = () => {
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

  const skills = [
    {
      title: "UX/UI Design",
      icon: (
        <SkillIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </SkillIcon>
      ),
    },
    {
      title: "Wireframing",
      icon: (
        <SkillIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M3 9h18"></path>
            <path d="M9 21V9"></path>
          </svg>
        </SkillIcon>
      ),
    },
    {
      title: "Prototyping",
      icon: (
        <SkillIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 6 4 14"></path>
            <path d="M12 6v14"></path>
            <path d="M8 8v12"></path>
            <path d="M4 4v16"></path>
          </svg>
        </SkillIcon>
      ),
    },
    {
      title: "User Research",
      icon: (
        <SkillIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <circle cx="12" cy="10" r="2"></circle>
            <line x1="8" x2="8" y1="2" y2="4"></line>
            <line x1="16" x2="16" y1="2" y2="4"></line>
          </svg>
        </SkillIcon>
      ),
    },
    {
      title: "Design Systems",
      icon: (
        <SkillIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.5 2h-7V14h13V9"></path>
            <path d="M16 2h6v6h-6z"></path>
            <path d="M8 20.5H12"></path>
            <path d="M10 18.5v4"></path>
          </svg>
        </SkillIcon>
      ),
    },
    {
      title: "Responsive Design",
      icon: (
        <SkillIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
            <line x1="8" x2="16" y1="21" y2="21"></line>
            <line x1="12" x2="12" y1="17" y2="21"></line>
          </svg>
        </SkillIcon>
      ),
    },
  ];

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="py-24 bg-secondary/50"
    >
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            Especialidades
          </span>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
          )}>
            Mis Habilidades
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg max-w-xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
          )} style={{ transitionDelay: '100ms' }}>
            Áreas en las que me especializo y he desarrollado experiencia profesional
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              icon={skill.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
