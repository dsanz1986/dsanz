
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  index: number;
}

const ProjectCard = ({ title, description, imageUrl, link, index }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100); // Staggered animation
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [index]);

  // Create URL-friendly slug from title
  const projectSlug = title.toLowerCase().replace(/\s+/g, '-');
  const internalLink = `/project/${projectSlug}`;

  return (
    <div
      ref={cardRef}
      className={cn(
        'glass-card rounded-2xl overflow-hidden hover-scale section-transition transform translate-y-6',
        isVisible && 'appear transform-none'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={internalLink} className="block h-full">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
