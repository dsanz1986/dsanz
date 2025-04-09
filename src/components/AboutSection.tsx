
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from './common/SectionHeader';
import { MicIcon, AwardIcon, FileTextIcon } from 'lucide-react';

// Info for achievements, talks, and posts
const talks = [
  {
    title: "Evento Design Meetics de Sngular",
    link: "https://x.com/albertoroldan_/status/1137016335920246785?s=20"
  },
  {
    title: "La Product Conf - Mejora continua",
    link: "https://twitter.com/LaProductConfES/status/1176571555943460866?s=20"
  }
];

const achievements = [
  {
    title: "Lola Market Mejor Producto Digital",
    link: "https://producthackers.com/es/blog/ganadores-de-los-product-hackers-awards-2019"
  },
  {
    title: "Lola market adquirida por Glovo",
    link: "https://www.sngular.com/es/insights/28/enhorabuena-a-lola-market-por-convertirse-en-parte-de-glovo"
  }
];

const posts = [
  {
    title: "Un día cualquiera diseñando en Lola Market",
    link: "https://medium.com/lola-tech/undiaenlolamarket-5d07a5dfc4c4"
  },
  {
    title: "Mis primeros meses en una fintech",
    link: "https://medium.com/davidsanzn/mis-primeros-meses-en-una-fintech-798add5ce352"
  }
];

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
      id="sobre-mi"
      ref={sectionRef}
      className="py-24 bg-secondary/50"
    >
      <div className="container">
        <SectionHeader 
          title="Sobre mí" 
          description="Hace ya unos cuantos años decidí dar un giro a mi carrera profesional y le dediqué gran parte de mi energía y tiempo a desarrollarme como Diseñador de producto, el sector del diseño siempre me ha gustado pero no fue hasta hace unos años cuando quise que lo que más me gustaba se convirtiera en mi trabajo habitual." 
          isVisible={isVisible} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {/* Talks Section */}
          <div className={cn(
            "glass-card rounded-2xl p-6 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-12"
          )} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MicIcon size={18} className="text-primary" />
              Charlas
            </h3>
            <ul className="space-y-0">
              {talks.map((talk, index) => (
                <li key={index} className="group">
                  <a 
                    href={talk.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block py-2 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                  >
                    <span className="group-hover:underline">{talk.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements Section */}
          <div className={cn(
            "glass-card rounded-2xl p-6 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-12"
          )} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AwardIcon size={18} className="text-primary" />
              Hitos
            </h3>
            <ul className="space-y-0">
              {achievements.map((achievement, index) => (
                <li key={index} className="group">
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block py-2 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                  >
                    <span className="group-hover:underline">{achievement.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Posts Section */}
          <div className={cn(
            "glass-card rounded-2xl p-6 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-12"
          )} style={{ transitionDelay: '500ms' }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileTextIcon size={18} className="text-primary" />
              Posts
            </h3>
            <ul className="space-y-0">
              {posts.map((post, index) => (
                <li key={index} className="group">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block py-2 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                  >
                    <span className="group-hover:underline">{post.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
