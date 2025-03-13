
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    company: "NAILTED",
    sector: "HR Tech / Employee Engagement",
    content: "Como **Product** **Designer** en **Nailted**, teníamos la misión de mejorar el bienestar de las personas en su entorno laboral, era fundamental generar un impacto real y positivo. En este tipo de contexto, el diseño no se trata solo de crear interfaces atractivas, sino de construir experiencias humanas, funcionales y empáticas que ayuden a los usuarios a que se sientan escuchados y apoyados.",
    color: "bg-blue-100"
  },
  {
    company: "Lola Market / Glovo",
    sector: "E-commerce / Marketplace",
    content: "Como **Product Designer** en **Lola Market** (empresa que posteriormente fue adquirida por **Glovo**), creamos una experiencia fluida y efectiva que beneficiara tanto a los **usuarios finales**, quienes realizaban la compra desde su casa, como a los **shoppers**, responsables de recoger y entregar los pedidos. Lo más importante era entender cuales eran los retos del comercio online, optimizar la logística y garantizar que, tanto los clientes como los shoppers, tuvieran una experiencia positiva.",
    color: "bg-yellow-100"
  },
  {
    company: "Finizens",
    sector: "Fintech / Wealth Management",
    content: "Como **Product Designer** en **Finizens**, una fintech centrada en la inversión pasiva, mi trabajo estuvo orientado a ayudar a los usuarios a gestionar su dinero de forma segura y transparente, con un enfoque diferente al modelo de inversión tradicional. Debíamos ofrecer una experiencia que combinara **transparencia, simplicidad y seguridad**, ayudando a los usuarios a confiar en un modelo de inversión muy diferente al tradicional.",
    color: "bg-purple-100"
  }
];

// Helper function to convert markdown-style bold to HTML
const formatText = (text: string) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

const ExperienceSection = () => {
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
      id="experiencia"
      ref={sectionRef}
      className="py-24"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
          )}>
            Experiencia
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg max-w-xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
          )} style={{ transitionDelay: '100ms' }}>
            Trabajar como Product Designer en sectores tan distintos y con necesidades tan diversas me ha servido de base para ofrecer soluciones consistentes, pero adaptadas a cada contexto.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card border-none rounded-xl overflow-hidden hover-scale section-transition",
                isVisible && 'appear',
                experience.color
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-lg font-semibold">{experience.company}</h3>
                  <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">{experience.sector}</span>
                </div>
                <div 
                  className="text-muted-foreground text-sm"
                  dangerouslySetInnerHTML={{ __html: formatText(experience.content) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
