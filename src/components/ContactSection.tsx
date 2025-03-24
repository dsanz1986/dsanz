
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Download } from 'lucide-react';

const ContactSection = () => {
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
      id="contacto"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">¿Hablamos?</h2>
          <p className="text-center text-muted-foreground mb-8">
            Si quieres que colaboremos, contáctame.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:dsanzux@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-btn-pink w-full sm:w-auto justify-center"
            >
              <Mail size={18} />
              Enviar un email
            </a>
            <a
              href="https://drive.google.com/file/d/15sKeRuoDYIkcCA9fYRNeJosxyNM1nOPP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium border border-border w-full sm:w-auto justify-center"
            >
              <Download size={18} />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
