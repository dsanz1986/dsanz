
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Mail, ArrowRight, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Create mailto URL with form data
    const mailtoUrl = `mailto:dsanzux@gmail.com?subject=Mensaje de ${name}&body=${encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    )}`;

    // Open default email client
    window.location.href = mailtoUrl;

    // Show success message
    toast({
      title: "¡Gracias por tu mensaje!",
      description: "Te responderé lo antes posible.",
    });

    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 bg-secondary/50"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className={cn(
          'glass-card rounded-2xl p-8 md:p-12 transition-all duration-700 ease-out grid md:grid-cols-2 gap-12',
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-12'
        )}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Hablamos?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Escríbeme un mensaje si quieres colaborar conmigo en algún proyecto
            </p>
            
            <div className="flex flex-col gap-4">
              <a
                href="mailto:dsanzux@gmail.com"
                className="inline-flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                dsanzux@gmail.com
              </a>
              
              <a
                href="https://www.linkedin.com/in/dsanzux/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="bg-background/50"
            />
            <Input
              type="email"
              name="email"
              placeholder="Tu email"
              required
              className="bg-background/50"
            />
            <Textarea
              name="message"
              placeholder="Cuéntame sobre tu proyecto"
              required
              className="min-h-[120px] bg-background/50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Enviar mensaje
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
