
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
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
      ref={sectionRef}
      className="py-24 bg-secondary/50"
    >
      <div className="container max-w-4xl">
        <div
          className={cn(
            'glass-card rounded-2xl p-8 md:p-12 transition-all duration-700 ease-out',
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-12'
          )}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Sobre mí</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hace ya unos cuantos años decidí dar un giro a mi carrera profesional y le dediqué gran parte de mi energía y tiempo a desarrollarme como Diseñador de producto, el sector del diseño siempre me ha gustado pero no fue hasta hace unos años cuando quise que lo que más me gustaba se convirtiera en mi trabajo habitual.
            </p>
            <p>
              Mi experiencia se centra en resolver problemas complejos de usuarios y satisfacer necesidades de negocio a través del diseño de productos digitales. Me apasiona crear experiencias que sean tanto funcionales como estéticamente atractivas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
