
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from './common/SectionHeader';
import { Badge } from './ui/badge';

const experiences = [
  {
    company: "NAILTED",
    period: "2022 - Actualidad",
    role: "Product Designer",
    sector: "HR Tech / Employee Engagement",
    content: "Como **Product** **Designer** en **Nailted**, teníamos la misión de mejorar el bienestar de las personas en su entorno laboral, era fundamental generar un impacto real y positivo. En este tipo de contexto, el diseño no se trata solo de crear interfaces atractivas, sino de construir experiencias humanas, funcionales y empáticas que ayuden a los usuarios a que se sientan escuchados y apoyados.",
    color: "bg-gradient-to-r from-blue-50 to-blue-100",
    icon: "👥",
    skills: ["User Research", "Product Strategy", "UI Design", "Prototyping"]
  },
  {
    company: "Lola Market / Glovo",
    period: "2020 - 2022",
    role: "Product Designer",
    sector: "E-commerce / Marketplace",
    content: "Como **Product Designer** en **Lola Market** (empresa que posteriormente fue adquirida por **Glovo**), creamos una experiencia fluida y efectiva que beneficiara tanto a los **usuarios finales**, quienes realizaban la compra desde su casa, como a los **shoppers**, responsables de recoger y entregar los pedidos. Lo más importante era entender cuales eran los retos del comercio online, optimizar la logística y garantizar que, tanto los clientes como los shoppers, tuvieran una experiencia positiva.",
    color: "bg-gradient-to-r from-yellow-50 to-yellow-100",
    icon: "🛒",
    skills: ["UX/UI Design", "Design Systems", "User Testing", "Wireframing"]
  },
  {
    company: "Finizens",
    period: "2018 - 2020",
    role: "Product Designer",
    sector: "Fintech / Wealth Management",
    content: "Como **Product Designer** en **Finizens**, una fintech centrada en la inversión pasiva, mi trabajo estuvo orientado a ayudar a los usuarios a gestionar su dinero de forma segura y transparente, con un enfoque diferente al modelo de inversión tradicional. Debíamos ofrecer una experiencia que combinara **transparencia, simplicidad y seguridad**, ayudando a los usuarios a confiar en un modelo de inversión muy diferente al tradicional.",
    color: "bg-gradient-to-r from-purple-50 to-purple-100",
    icon: "💰",
    skills: ["Information Architecture", "UX Research", "Visual Design", "User Flows"]
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
        <SectionHeader 
          title="Experiencia" 
          description="Trabajar como Product Designer en sectores tan distintos y con necesidades tan diversas me ha servido de base para ofrecer soluciones consistentes, pero adaptadas a cada contexto."
          isVisible={isVisible} 
        />

        <div className="space-y-12 max-w-4xl mx-auto">
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
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-2xl">
                      {experience.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{experience.company}</h3>
                      <p className="text-sm font-medium text-[#18134D]">{experience.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                    <span className="text-sm font-medium text-muted-foreground">{experience.period}</span>
                    <span className="text-xs text-muted-foreground mt-1">{experience.sector}</span>
                  </div>
                </div>
                
                <div 
                  className="text-muted-foreground text-sm mb-6"
                  dangerouslySetInnerHTML={{ __html: formatText(experience.content) }}
                />
                
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="bg-[#18134D]/10 text-[#18134D] border-none"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
