
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  delay: number;
}

const SkillCard = ({ title, icon, delay }: SkillCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
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
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'glass-card p-6 rounded-xl hover-scale flex flex-col items-center section-transition opacity-0 transform translate-y-6',
        isVisible && 'appear opacity-100 transform-none'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="font-medium text-center">{title}</h3>
    </div>
  );
};

export default SkillCard;
