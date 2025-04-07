
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 ease-in-out py-4',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="sr-only">Inicio</span>
          <span className="font-bold gradient-text">David</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 mx-auto">
          <a 
            href="#sobre-mi" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre mí
          </a>
          <a 
            href="#proyectos" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Proyectos
          </a>
          <a 
            href="#principios" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Principios
          </a>
        </nav>

        <a 
          href="https://drive.google.com/file/d/15sKeRuoDYIkcCA9fYRNeJosxyNM1nOPP/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-btn-secondary"
        >
          Currículum
          <Download size={16} />
        </a>
      </div>
    </header>
  );
};

export default NavBar;
