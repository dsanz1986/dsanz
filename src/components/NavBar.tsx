
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
          <span className="font-bold">David Sanz</span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <a 
            href="#portfolio" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Portfolio
          </a>
          <a 
            href="#habilidades" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Habilidades
          </a>
          <a 
            href="https://drive.google.com/file/d/15sKeRuoDYIkcCA9fYRNeJosxyNM1nOPP/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Currículum
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
