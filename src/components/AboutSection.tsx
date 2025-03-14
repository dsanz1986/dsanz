
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from './common/SectionHeader';
import { MicIcon, AwardIcon } from 'lucide-react';
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
          description="Diseñador de producto y UI/UX con más de 7 años de experiencia" 
          isVisible={isVisible} 
        />
        
        <div className={cn(
          "max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 transition-all duration-700 ease-out mb-12",
          isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-12"
        )} style={{ transitionDelay: '200ms' }}>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hace más de 7 años decidí dar un giro a mi carrera profesional y le dediqué gran parte de mi energía y tiempo a desarrollarme como Diseñador de producto, el sector del diseño siempre me ha gustado pero no fue hasta hace unos años cuando quise que lo que más me gustaba se convirtiera en mi trabajo habitual.
            </p>
            <p>
              Mi experiencia se centra en resolver problemas complejos de usuarios y satisfacer necesidades de negocio a través del diseño de productos digitales. Me apasiona crear experiencias que sean tanto funcionales como estéticamente atractivas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                <li key={index}>
                  <a href={talk.link} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline text-muted-foreground">
                    {talk.title}
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
                <li key={index} className="flex items-baseline gap-2">
                  <span>{achievement.emoji}</span>
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline text-muted-foreground">
                    {achievement.title}
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
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-[#18134D]"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
              <h3 className="text-lg font-semibold">Posts</h3>
            </div>
            <ul className="space-y-3">
              {posts.map((post, index) => (
                <li key={index} className="flex items-baseline gap-2">
                  <span>{post.emoji}</span>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline text-muted-foreground">
                    {post.title}
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
