
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from './common/SectionHeader';
import { MicIcon, AwardIcon, ExternalLinkIcon, FileTextIcon } from 'lucide-react';
import { Badge } from './ui/badge';

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
    link: "https://producthackers.com/es/blog/ganadores-de-los-product-hackers-awards-2019",
    emoji: "🏅"
  },
  {
    title: "Lola market adquirida por Glovo",
    link: "https://www.sngular.com/es/insights/28/enhorabuena-a-lola-market-por-convertirse-en-parte-de-glovo",
    emoji: "💸"
  }
];

const posts = [
  {
    title: "Un día cualquiera diseñando en Lola Market",
    link: "https://medium.com/lola-tech/undiaenlolamarket-5d07a5dfc4c4",
    emoji: "👨‍💻"
  },
  {
    title: "Mis primeros meses en una fintech",
    link: "https://medium.com/davidsanzn/mis-primeros-meses-en-una-fintech-798add5ce352",
    emoji: "📊"
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
        
        <div className={cn(
          "max-w-3xl mx-auto mt-8 glass-card rounded-xl p-6 border-l-4 border-primary/50 bg-white/30 backdrop-blur-sm",
          isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-12"
        )}>
          <blockquote className="text-lg md:text-xl italic text-muted-foreground leading-relaxed">
            "Desde hace ya unos cuantos años, resolviendo problemas de usuarios y necesidades de negocio a través de productos digitales".
          </blockquote>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {/* Talks Section */}
          <div className={cn(
            "glass-card rounded-2xl p-6 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-12"
          )} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center gap-2 mb-4">
              <MicIcon className="h-5 w-5 text-[#18134D]" />
              <h3 className="text-lg font-semibold">Charlas</h3>
            </div>
            <ul className="space-y-3">
              {talks.map((talk, index) => (
                <li key={index} className="group">
                  <a 
                    href={talk.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <ExternalLinkIcon className="h-3.5 w-3.5" />
                    </span>
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
            <div className="flex items-center gap-2 mb-4">
              <AwardIcon className="h-5 w-5 text-[#18134D]" />
              <h3 className="text-lg font-semibold">Hitos</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="group">
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span>{achievement.emoji}</span>
                    </span>
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
            <div className="flex items-center gap-2 mb-4">
              <FileTextIcon className="h-5 w-5 text-[#18134D]" />
              <h3 className="text-lg font-semibold">Posts</h3>
            </div>
            <ul className="space-y-3">
              {posts.map((post, index) => (
                <li key={index} className="group">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span>{post.emoji}</span>
                    </span>
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
