
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const principles = [
  {
    number: "01",
    title: "Define primero el problema",
    description: "Antes de diseñar, hay que entender a fondo el problema que necesitamos resolver."
  },
  {
    number: "02",
    title: "Menos es más",
    description: "Simplificar las funcionalidades para ofrecer solo lo esencial y maximizar el valor."
  },
  {
    number: "03",
    title: "Diseño medible",
    description: "Un diseño es exitoso si ayuda a la conversión y se puede medir bien."
  },
  {
    number: "04",
    title: "La consistencia es clave",
    description: "Mantener patrones coherentes que faciliten la experiencia de usuario."
  },
  {
    number: "05",
    title: "Una acción a la vez",
    description: "Foco a que el usuario realice una sola acción a la vez."
  },
  {
    number: "06",
    title: "Reduce la fricción",
    description: "Minimiza la cantidad de inputs que se piden al usuario."
  },
  {
    number: "07",
    title: "Habla su idioma",
    description: "Utilizar la forma de hablar de nuestro usuario y no ser demasiado técnico."
  },
  {
    number: "08",
    title: "Simplifica decisiones",
    description: "Reducir la carga cognitiva tomando decisiones cuando nos sea posible."
  },
  {
    number: "09",
    title: "Jerarquía visual clara",
    description: "Organizar los elementos para que la información se entienda."
  },
  {
    number: "10",
    title: "Diseño alineado",
    description: "Asegurar que los elementos visuales estén bien alineados."
  },
  {
    number: "11",
    title: "Soluciona de verdad",
    description: "No buscar el efecto \"WOW\", prioriza resolver problemas reales del usuario."
  },
  {
    number: "12",
    title: "Diseño iterativo",
    description: "Medir, iterar y mejorar constantemente en función de los datos obtenidos."
  }
];

const PrinciplesSection = () => {
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
      id="principios"
      ref={sectionRef}
      className="py-24 bg-secondary/50"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out gradient-text",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
          )}>
            Los 12 Principios de diseño que aplico en mi día
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <Card 
              key={index}
              className={cn(
                "glass-card border-none overflow-hidden principle-card section-transition transform translate-y-6",
                isVisible && 'appear transform-none'
              )}
              style={{ transitionDelay: `${Math.min(index * 100, 500)}ms` }}
            >
              <CardContent className="p-6 relative">
                <div className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#3599E2] to-[#FFA4FB] card-number">{principle.number}</div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm">{principle.description}</p>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -mr-10 -mt-10 opacity-30 transition-transform duration-300 group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-50 to-blue-50 rounded-full -ml-8 -mb-8 opacity-30"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
