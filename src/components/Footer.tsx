
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © {currentYear} David Sanz. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dribbble"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
          
          <a
            href="https://drive.google.com/file/d/15sKeRuoDYIkcCA9fYRNeJosxyNM1nOPP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
