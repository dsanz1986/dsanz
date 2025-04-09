
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('appear');
        }
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-transition').forEach((section) => {
      scrollObserver.observe(section);
    });

    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="animated-bg"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={cn(
            'order-2 md:order-1 transform transition-all duration-700 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          )}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 animate-fade-in">
              Diseñador de Producto
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance">
              Diseño productos digitales intuitivos y elegantes
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md text-balance">
              Desde hace ya unos cuantos años, resolviendo problemas de usuarios y necesidades de negocio a través de productos digitales.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:dsanzux@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-btn-primary"
              >
                Contactar
                <Mail size={18} />
              </a>
              <a
                href="https://drive.google.com/file/d/1fJsf-TqffHyjNKw7nob4bQEkqzAGWQw9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/50 text-primary hover:bg-primary/5 transition-colors font-medium"
              >
                Ver CV
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
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className={cn(
            'order-1 md:order-2 transition-all duration-700 ease-out float',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )} style={{ transitionDelay: '200ms' }}>
            <div className="glass-card rounded-2xl p-2 md:p-4 rotate-1 shadow-lg">
              <img
                src="/lovable-uploads/f8cfa364-d1ed-4107-a8df-a4f24688d2f0.png"
                alt="David Sanz - Diseñador de Producto"
                className="rounded-xl w-full aspect-square md:aspect-[4/5] object-cover animate-blur-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
