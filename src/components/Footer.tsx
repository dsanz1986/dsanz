
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © {currentYear} David Sanz, creado con ♥️
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/dsanzux/"
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
          </div>
          
          <a
            href="https://drive.google.com/file/d/1HTCWR2KwTZnd_OcWtKYLozp9RGSIpMjZ/view"
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
